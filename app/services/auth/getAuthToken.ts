import { Auth } from 'aws-amplify'

export const getAuthToken = async (): Promise<string | null> => {
  try {
    const user = await Auth.currentSession()

    return user.getAccessToken().getJwtToken()
  } catch (error) {
    return null
  }
}
