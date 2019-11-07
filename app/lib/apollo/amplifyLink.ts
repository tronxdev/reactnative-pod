import { createAppSyncLink } from 'aws-appsync'
// env
import { AWS_CONFIG } from '@app/environment-variables'
// services
import { authOptions } from '@services/auth'

export const amplifyLink = createAppSyncLink({
  url: AWS_CONFIG.graphqlEndpoint,
  region: AWS_CONFIG.region,
  complexObjectsCredentials: () => null,
  auth: authOptions
})
