import * as React from 'react'
// components
import { Button as ButtonComponent, ButtonProps } from 'react-native-elements'

interface IButton extends ButtonProps {}

const Button: React.FunctionComponent<IButton> = props => {
  return <ButtonComponent {...props} />
}

export default Button
