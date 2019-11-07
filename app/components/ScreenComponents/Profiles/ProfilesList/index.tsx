import * as React from 'react'
// libs
import { FlatList } from 'react-native'
import { compose, graphql } from 'react-apollo'
import { debounce } from 'lodash'
import { pipe, map, toLower, isEmpty, getOr, get } from 'lodash/fp'
// components
import { SafeAreaView } from 'react-navigation'
import { ListItem, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
// graphql
import { SEARCH_PROFILES_QUERY } from '@graphql/profiles/queries'
// theme
import { color } from '@theme/index'
// constants
import { E2E_TEST_IDS } from '@constants/tests'
// utils
import { toDefaultUserAvatar, toNA } from '@utils/placeholders'
import { parseRowResponse } from '@utils/freeSearch'

interface IProfilesList {
  // TODO: add types
  profilesQuery: any
}

// It should not be placed here, but it is, because of API changes soon and eliminating raw elasticsearch search
export const PROFILES_DEFAULT_VARIABLES = {
  path: '/profile/doc/_search',
  body: JSON.stringify({
    size: 1000,
    sort: [
      {
        'name.keyword': {
          order: 'asc'
        }
      }
    ]
  })
}

const generateVariablesWithSearch = search => {
  const body = JSON.parse(PROFILES_DEFAULT_VARIABLES.body)

  return {
    ...PROFILES_DEFAULT_VARIABLES,
    body: JSON.stringify({
      ...body,
      query: {
        bool: {
          should: [
            {
              // eslint-disable-next-line @typescript-eslint/camelcase
              query_string: {
                fields: [
                  'name',
                  'title',
                  'locations.address.country',
                  'locations.address.country',
                  'locations.address.state',
                  'locations.address.city',
                  'locations.address.zip',
                  'locations.address.street'
                ],
                query: `*${search}*`
              }
            }
          ]
        }
      }
    })
  }
}

const ProfilesList: React.FunctionComponent<IProfilesList> = ({ profilesQuery }) => {
  const [value, setValue] = React.useState('')
  const debouncedSearch = React.useRef(
    debounce(
      ({ refetch, variables }) =>
        refetch(variables).catch(error => {
          console.log('[ProfilesList.debouncedSearch]: ', error)
        }),
      300
    )
  )

  const isLoading: boolean = getOr(true, 'loading', profilesQuery)

  const getEntities = React.useCallback(
    pipe(
      getOr('', 'freeSearch'),
      parseRowResponse,
      get('items'),
      map(({ id, title, name, avatar }) => ({
        id,
        title: toNA(title),
        name: toNA(name),
        avatar: toDefaultUserAvatar(avatar)
      }))
    ),
    []
  )

  const handleChangeSearch = React.useCallback(
    value => {
      setValue(value)

      const prepareVariables = pipe(
        toLower,
        generateVariablesWithSearch
      )

      const variables = isEmpty(value) ? PROFILES_DEFAULT_VARIABLES : prepareVariables(value)

      debouncedSearch.current({ refetch: profilesQuery.refetch, variables })
    },
    [value, profilesQuery]
  )

  const entities = getEntities(profilesQuery)

  return (
    <>
      <SearchBar
        placeholder={'Type here...'}
        value={value}
        onChangeText={handleChangeSearch}
        showLoading={isLoading}
        accessibilityLabel={E2E_TEST_IDS.PROFILES.SEARCH_BAR}
      />
      <FlatList
        data={entities}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<SafeAreaView forceInset={{ bottom: 'always' }} />}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { id, avatar, name, title } }) => (
          <ListItem
            key={id}
            title={name}
            bottomDivider
            leftAvatar={{ source: { uri: avatar && avatar } }}
            subtitle={`Title: ${title}`}
            rightIcon={<Icon name={'chevron-right'} color={color.palette.gray400} />}
          />
        )}
      />
    </>
  )
}

export default compose(
  graphql(SEARCH_PROFILES_QUERY, {
    name: 'profilesQuery',
    options: {
      fetchPolicy: 'network-only',
      variables: PROFILES_DEFAULT_VARIABLES
    }
  })
)(ProfilesList)
