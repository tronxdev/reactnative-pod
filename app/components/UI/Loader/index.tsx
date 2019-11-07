import * as React from 'react'
// components
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

export interface ILoader extends ActivityIndicatorProps {}

const Loader: React.FunctionComponent<ILoader> = props => {
  return <ActivityIndicator {...props} />
}

export default Loader
