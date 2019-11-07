import * as React from 'react'
// libs
import { NavigationScreenProps } from 'react-navigation'
import { SCREENS } from '@navigation/index'
// hocs
import { withForcedCreateProfile } from '@app/hocs'
// components
import { SafeAreaView, Text } from 'react-native'
import { Button } from '@components/UI'
// constants
import { E2E_TEST_IDS } from '@constants/tests'
// context
import { CurrentUserContext } from '@app/context'
// utils
import { pipe, map, join } from 'lodash/fp'

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = ({ navigation }) => {
  const { auth, user, onAuthStateChange } = React.useContext(CurrentUserContext)

  const handleSignOut = async () => {
    await auth.signOut()
    await onAuthStateChange('signedOut', null)
  }

  return (
    <SafeAreaView>
      <Text>
        Authorized as {user.name} with emails{' '}
        {pipe(
          map('email'),
          join(', ')
        )(user.emails)}
      </Text>
      <Button
        title={'Profiles'}
        onPress={() => navigation.navigate(SCREENS.PROFILES_SCREEN)}
        accessibilityLabel={E2E_TEST_IDS.WELCOME.PROFILES_BUTTON}
      />
      <Button title={'Create new profile'} onPress={() => navigation.navigate(SCREENS.CREATE_PROFILE_SCREEN)} />
      <Button title={'Sign Out'} onPress={handleSignOut} />
    </SafeAreaView>
  )
}

export default withForcedCreateProfile(WelcomeScreen)
