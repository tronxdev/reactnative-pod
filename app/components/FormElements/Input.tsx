import React from 'react'
// components
import { Input as InputComponent, InputProps } from 'react-native-elements'

export interface IInput extends InputProps {}

const Input: React.FunctionComponent<InputProps> = props => {
  return <InputComponent {...props} />
}

export default Input
