import * as React from 'react'
// libs
import { withAuthenticator } from 'aws-amplify-react-native'
import { compose, Query } from 'react-apollo'
// graphql
import { AUTH_MY_PROFILE_QUERY } from '@graphql/profiles/queries'
// components
import { FullScreenLoader } from '@components/UI'
// context
import { ICurrentUserContext, CurrentUserContext } from '@context/index'
import { withAmplifyApollo } from '@hocs/withAmplifyApollo'
// utils
import { safeGetOr } from '@utils/fp'
// types
import { AuthMyProfileQuery, AuthMyProfileQueryVariables } from '@app/graphql'

// inititate authorization
import '@services/auth'

interface IWithAuthEnhancedComponent {
  authState: ICurrentUserContext['status']
  authData: ICurrentUserContext['auth']
  onStateChange: any
}

export const withAuth = EnhancedComponent => {
  const WithAuthEnhancedComponent: React.FunctionComponent<IWithAuthEnhancedComponent & unknown> = ({
    authData,
    authState,
    onStateChange,
    ...props
  }) => (
    <Query<AuthMyProfileQuery, AuthMyProfileQueryVariables>
      query={AUTH_MY_PROFILE_QUERY}
      variables={{ id: authData.getUsername() }}
    >
      {({ loading, data, refetch }) => {
        const user = safeGetOr<AuthMyProfileQuery, AuthMyProfileQuery['getProfile']>({} as any, 'getProfile')(data)

        const currentUserProviderValue: ICurrentUserContext = {
          user,
          loading,
          auth: authData,
          status: authState,
          refetchCurrentUser: refetch,
          onAuthStateChange: onStateChange
        }

        return loading ? (
          <FullScreenLoader />
        ) : (
          <CurrentUserContext.Provider value={currentUserProviderValue}>
            <EnhancedComponent {...props} />
          </CurrentUserContext.Provider>
        )
      }}
    </Query>
  )

  return compose(
    withAuthenticator,
    withAmplifyApollo
  )(WithAuthEnhancedComponent)
}
