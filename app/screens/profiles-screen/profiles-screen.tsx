import * as React from 'react'
// components
import { SafeAreaView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { ProfilesList } from '@components/ScreenComponents/Profiles'

export interface ProfilesScreenProps extends NavigationScreenProps<{}> {}

const ProfilesScreen: React.FunctionComponent<ProfilesScreenProps> = () => {
  return (
    <SafeAreaView>
      <ProfilesList />
    </SafeAreaView>
  )
}

export default ProfilesScreen
