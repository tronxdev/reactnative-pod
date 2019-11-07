import Amplify from 'aws-amplify'
import { AMPLIFY_AUTH_OPTIONS, AWS_POOL_CONFIG, RawAwsConfig } from '@app/environment-variables'
import { getAuthToken } from '@services/auth/getAuthToken'
import { AuthOptions } from 'aws-appsync/lib/link/auth-link'

Amplify.configure({
  ...RawAwsConfig,
  userPoolId: AWS_POOL_CONFIG.userPoolId,
  userPoolWebClientId: AWS_POOL_CONFIG.userPoolWebClientId
})

export const authOptions: AuthOptions = {
  ...AMPLIFY_AUTH_OPTIONS,
  jwtToken: getAuthToken
}
