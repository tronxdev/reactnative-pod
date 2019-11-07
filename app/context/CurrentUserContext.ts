import * as React from 'react'
// libs
import { CognitoUser } from '@aws-amplify/auth'
// types
import { AuthMyProfileQuery } from '@app/graphql'

export interface ICurrentUserContext {
  auth?: CognitoUser
  user?: AuthMyProfileQuery['getProfile']
  loading: boolean
  status?: 'signedOut' | 'signedIn' | 'signedUp'
  onAuthStateChange: any
  refetchCurrentUser: any
}

export const CurrentUserContext = React.createContext<ICurrentUserContext>({
  auth: null,
  user: null,
  loading: true,
  status: 'signedOut',
  onAuthStateChange: () => {},
  refetchCurrentUser: () => {}
})
