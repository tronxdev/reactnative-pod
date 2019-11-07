import React from 'react'
// libs
import { compose, graphql } from 'react-apollo'
import { withNavigation, NavigationScreenProps } from 'react-navigation'
import { Formik, FormikActions, FormikProps, FieldArray, FieldArrayRenderProps } from 'formik'
import { map, values, pipe, last, update, constant, defaultTo, isEmpty, get } from 'lodash/fp'
// constants
import { SCREENS } from '@navigation/index'
// graphql
import { AddressInput, Country, EmailType, LocationInput, LocationType, EmailInput } from '@graphql/index'
import { CREATE_PROFILE_MUTATION } from '@graphql/profiles/mutations'
import { SEARCH_PROFILES_QUERY } from '@graphql/profiles/queries'
import { PROFILES_DEFAULT_VARIABLES } from '@components/ScreenComponents/Profiles/ProfilesList'
// constants
import { COUNTRY_OPTIONS, US_STATES_OPTIONS } from '@constants/countries'
// components
import { ScrollView, StyleSheet, View } from 'react-native'
import { FormInput, FormPicker } from '@components/FormElements/Form'
import { Button } from '@components/UI'
import { Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
// themes
import { color } from '@theme/index'
// context
import { CurrentUserContext } from '@app/context'

interface ICreateProfile extends NavigationScreenProps {
  // TODO: add types
  createMutation: any
}

interface ICreateProfileFormValues {
  name: string
  title: string
  emails: EmailInput[]
  locations: LocationInput[]
}

const styles = StyleSheet.create({
  deleteLocationIcon: {
    position: 'absolute',
    right: 8,
    top: 0,
    zIndex: 1
  },
  fieldArrayContainer: {
    borderLeftColor: color.palette.blue200,
    borderLeftWidth: 2,

    marginBottom: 16,
    marginLeft: 8,

    marginTop: 16,
    paddingBottom: 8,
    paddingTop: 8,

    position: 'relative'
  },
  halfWidthInput: {
    width: '49%'
  },
  pushFieldArrayButton: {
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16,
    width: '50%'
  },
  splitFields: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  submitButton: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16
  },
  submitDivider: {
    backgroundColor: color.palette.gray100,
    marginTop: 16
  }
})

const LOCATION_TYPES_OPTIONS = pipe(
  values,
  map(value => ({ label: value, value }))
)(LocationType)

const CreateProfile: React.FunctionComponent<ICreateProfile> = ({ createMutation, navigation }) => {
  const { user, auth, refetchCurrentUser } = React.useContext(CurrentUserContext)
  const isNewUser = isEmpty(user)

  const handleFormSubmit = async (
    { name, title, emails, locations }: ICreateProfileFormValues,
    { resetForm }: FormikActions<ICreateProfileFormValues>
  ) => {
    try {
      await createMutation({
        awaitRefetchQueries: true,
        variables: {
          input: {
            name,
            title,
            emails,
            locations
          }
        },
        refetchQueries: [
          {
            query: SEARCH_PROFILES_QUERY,
            variables: PROFILES_DEFAULT_VARIABLES
          }
        ]
      })

      if (isNewUser) {
        await refetchCurrentUser()
      }

      navigation.navigate(SCREENS.PROFILES_SCREEN)
      resetForm()
    } catch (e) {
      console.log('[CreateProfile.handleFormSubmit]: ', e)
    }
  }

  const initialLocation: LocationInput = {
    address: {
      country: Country.USA,
      state: '',
      city: '',
      street: '',
      zip: ''
    },
    type: LocationType.Primary
  }

  const initialEmail: EmailInput = {
    email: isNewUser ? get('attributes.email', auth) : '',
    type: EmailType.Primary
  }

  const initialValues: ICreateProfileFormValues = {
    name: '',
    title: '',
    emails: [initialEmail],
    locations: [initialLocation]
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values, handleSubmit }: FormikProps<ICreateProfileFormValues>) => {
        const lastCountry: Country = pipe(
          map('address.country'),
          last,
          defaultTo(Country.USA)
        )(values.locations)
        const lastState: string = pipe(
          map('address.state'),
          last
        )(values.locations)
        const lastCity: string = pipe(
          map('address.city'),
          last
        )(values.locations)

        const getInitialLocation = (): AddressInput =>
          pipe(
            update('address.country', constant<Country>(lastCountry)),
            update('address.state', constant<string>(lastState)),
            update('address.city', constant<string>(lastCity))
          )(initialLocation)

        return (
          <ScrollView>
            <FormInput name={'name'} label={'Name'} />
            <FieldArray name={'emails'}>
              {({ push, remove }: FieldArrayRenderProps) => (
                <>
                  {values.emails.map((email, index: number) => {
                    const handleRemoveIconPress = () => remove(index)
                    const isFirst = index === 0

                    return (
                      <View key={index} style={StyleSheet.flatten([styles.fieldArrayContainer, styles.splitFields])}>
                        {!isFirst && (
                          <Icon
                            name={'times'}
                            size={24}
                            color={color.palette.red200}
                            style={styles.deleteLocationIcon}
                            onPress={handleRemoveIconPress}
                          />
                        )}
                        <FormInput
                          name={`emails[${index}].email`}
                          containerStyle={styles.halfWidthInput}
                          label={'Email'}
                        />
                        <FormPicker
                          name={`emails[${index}].type`}
                          inputProps={{
                            label: 'Email Type',
                            containerStyle: styles.halfWidthInput
                          }}
                          options={LOCATION_TYPES_OPTIONS}
                          pickerTitleText={'Email Type'}
                          pickerConfirmBtnText={'Confirm'}
                        />
                      </View>
                    )
                  })}
                  <Button
                    onPress={() => push(initialEmail)}
                    type={'outline'}
                    title={'Add Email'}
                    style={styles.pushFieldArrayButton}
                  />
                </>
              )}
            </FieldArray>
            <FormInput name={'title'} label={'Title'} />
            <FieldArray name={'locations'}>
              {({ push, remove }: FieldArrayRenderProps) => (
                <>
                  {values.locations.map((location, index: number) => {
                    const isUsCountry = location.address.country === Country.USA

                    const handleRemoveIconPress = () => remove(index)
                    const isFirst = index === 0

                    return (
                      <View key={index} style={styles.fieldArrayContainer}>
                        {!isFirst && (
                          <Icon
                            name={'times'}
                            size={24}
                            color={color.palette.red200}
                            style={styles.deleteLocationIcon}
                            onPress={handleRemoveIconPress}
                          />
                        )}
                        <FormPicker
                          name={`locations[${index}].address.country`}
                          inputProps={{
                            label: 'Country'
                          }}
                          options={COUNTRY_OPTIONS}
                          pickerTitleText={'Country'}
                          pickerConfirmBtnText={'Confirm'}
                        />
                        <View style={styles.splitFields}>
                          {isUsCountry ? (
                            <FormPicker
                              name={`locations[${index}].address.state`}
                              inputProps={{
                                label: 'State',
                                containerStyle: styles.halfWidthInput
                              }}
                              options={US_STATES_OPTIONS}
                              pickerTitleText={'State'}
                              pickerConfirmBtnText={'Confirm'}
                            />
                          ) : (
                            <FormInput
                              name={`locations[${index}].address.state`}
                              containerStyle={styles.halfWidthInput}
                              label={'State'}
                            />
                          )}
                          <FormInput
                            name={`locations[${index}].address.city`}
                            containerStyle={styles.halfWidthInput}
                            label={'City'}
                          />
                        </View>
                        <FormInput name={`locations[${index}].address.street`} label={'Street'} />
                        <View style={styles.splitFields}>
                          <FormInput
                            name={`locations[${index}].address.zip`}
                            containerStyle={styles.halfWidthInput}
                            label={'Zip'}
                          />
                          <FormPicker
                            name={`locations[${index}].type`}
                            inputProps={{
                              label: 'Location Type',
                              containerStyle: styles.halfWidthInput
                            }}
                            options={LOCATION_TYPES_OPTIONS}
                            pickerTitleText={'Location Type'}
                            pickerConfirmBtnText={'Confirm'}
                          />
                        </View>
                      </View>
                    )
                  })}
                  <Button
                    onPress={() => push(getInitialLocation())}
                    title={'Add Location'}
                    type={'outline'}
                    style={styles.pushFieldArrayButton}
                  />
                </>
              )}
            </FieldArray>
            <Divider style={styles.submitDivider} />
            <Button title={'Create Profile'} onPress={handleSubmit as any} style={styles.submitButton} />
          </ScrollView>
        )
      }}
    </Formik>
  )
}

export default compose(
  withNavigation,
  graphql(CREATE_PROFILE_MUTATION, {
    name: 'createMutation'
  })
)(CreateProfile)
