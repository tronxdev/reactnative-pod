// libs
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'
import AWSAppSyncClient from 'aws-appsync'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { amplifyLink } from './amplifyLink'
import { errorLink } from './errorLink'
// services
import { authOptions } from '@services/auth'
// constants
import { AWS_CONFIG } from '@app/environment-variables'

const cache = new InMemoryCache()

console.log('authOptions: ', authOptions)

export const apolloClient: ApolloClient<{}> = new AWSAppSyncClient<{}>(
  {
    disableOffline: true,
    url: AWS_CONFIG.graphqlEndpoint,
    region: AWS_CONFIG.region,
    auth: authOptions
  },
  {
    cache,
    link: ApolloLink.from([amplifyLink, errorLink])
  }
) as any
