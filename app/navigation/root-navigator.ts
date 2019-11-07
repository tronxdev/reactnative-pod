import { createStackNavigator } from 'react-navigation'
import { WelcomeScreen } from '@screens/welcome-screen'
import { ProfilesScreen } from '@screens/profiles-screen'
import { CreateProfileScreen } from '@screens/create-profile-screen'

export enum SCREENS {
  WELCOME_SCREEN = 'welcomeScreen',

  PROFILES_SCREEN = 'profilesScreen',
  CREATE_PROFILE_SCREEN = 'createProfileScreen'
}

export const RootNavigator = createStackNavigator(
  {
    [SCREENS.WELCOME_SCREEN]: { screen: WelcomeScreen },

    [SCREENS.PROFILES_SCREEN]: { screen: ProfilesScreen },
    [SCREENS.CREATE_PROFILE_SCREEN]: { screen: CreateProfileScreen }
  },
  {
    headerMode: 'none',
    navigationOptions: { gesturesEnabled: false }
  }
)
