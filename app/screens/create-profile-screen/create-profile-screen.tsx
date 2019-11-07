import * as React from 'react'
// libs
import { NavigationScreenProps } from 'react-navigation'
// components
import { SafeAreaView } from 'react-native'
import { CreateProfile } from '@components/ScreenComponents/Profiles'

export interface CreateProfileScreenProps extends NavigationScreenProps<{}> {}

const CreateProfileScreen: React.FunctionComponent<CreateProfileScreenProps> = () => {
  return (
    <SafeAreaView>
      <CreateProfile />
    </SafeAreaView>
  )
}

export default CreateProfileScreen
