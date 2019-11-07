import React from 'react'
// components
import { Field, FieldProps, FieldConfig } from 'formik'
import { Input, IInput } from '@components/FormElements'

export interface IFormInput extends IInput, FieldProps {}

const FormInputComponent: React.FunctionComponent<IFormInput> = ({ field, ...rest }) => {
  const { onChange, onBlur, name, value } = field

  return <Input {...rest} onChangeText={onChange(name)} onBlur={onBlur(name)} value={value} />
}

const FormInput: React.FunctionComponent<FieldConfig & IInput> = props => (
  <Field component={FormInputComponent} {...props} />
)

export default FormInput
