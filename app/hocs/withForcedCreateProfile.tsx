import * as React from 'react'
// libs
import { SCREENS } from '@app/navigation'
import { NavigationScreenProps } from 'react-navigation'
// context
import { CurrentUserContext } from '@context/index'
// components
import { FullScreenLoader } from '@components/UI'
// utils
import { isEmpty } from 'lodash/fp'

export const withForcedCreateProfile = EnhancedComponent => {
  const WithForcedCreateProfileComponent: React.FunctionComponent<NavigationScreenProps & unknown> = props => {
    const { loading, user } = React.useContext(CurrentUserContext)
    const isUserProfileEmpty = isEmpty(user)

    const { navigation } = props

    React.useEffect(() => {
      const hasFinishedLoading = !loading

      if (hasFinishedLoading && isUserProfileEmpty) {
        navigation.navigate(SCREENS.CREATE_PROFILE_SCREEN)
      }
    }, [loading])

    const shouldShowLoader = loading || isUserProfileEmpty

    return shouldShowLoader ? <FullScreenLoader /> : <EnhancedComponent {...props} />
  }

  return WithForcedCreateProfileComponent
}
