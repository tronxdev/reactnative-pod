//
// Load environment variables in.
//
// IMPORTANT:
//
//   1.  These might be null, so fallback to sane defaults accordingly where you
//       make use of these.
//
//   2.  You must use this syntax: process.env.NAME_OF_ENV_VAR.  No funny stuff
//       or the babel plugin won't work.
//
//   3.  You must whitelist each one in your `babel` config.
//
// GOTCHA:
//
//   Babel will cache things extensively. In dev, to bust this cache to pick up
//   new environment variable values, just change this file and resave it.
//
//   Or run `yarn start --reset-cache` to nuke babel's cache entirely
//   (overkill).
//
// ----------------------------------------------------------------------------

import RawAwsConfig from '@app/aws-exports.js'
import { AUTH_TYPE } from 'aws-appsync'
import ENV from 'react-native-config'
import { get } from 'lodash/fp'

export interface IAWSConfig {
  region: string
  graphqlEndpoint: string
  authenticationType: AUTH_TYPE
  apiKey: string
}

export const AWS_CONFIG: IAWSConfig = {
  region: get('region', RawAwsConfig),
  graphqlEndpoint: get('aws_appsync_graphqlEndpoint', RawAwsConfig),
  authenticationType: get('aws_appsync_authenticationType', RawAwsConfig) as AUTH_TYPE,
  apiKey: get('aws_appsync_apiKey', RawAwsConfig)
}

const AWS_POOL_CONFIG = {
  userPoolId: ENV.USER_POOL_ID,
  userPoolWebClientId: ENV.USER_POOL_CLIENT_ID
}

export const AMPLIFY_AUTH_OPTIONS = {
  type: AWS_CONFIG.authenticationType,
  apiKey: AWS_CONFIG.apiKey
}

export { RawAwsConfig, AWS_POOL_CONFIG }
