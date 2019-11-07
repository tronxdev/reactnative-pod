import React from 'react'
// components
import { Field, FieldConfig, FieldProps } from 'formik'
import { Picker, IPicker } from '@components/FormElements'

export interface IFormPicker extends IPicker, FieldProps {}

const FormPickerComponent: React.FunctionComponent<IFormPicker> = ({ field, ...rest }) => {
  const { onChange, onBlur, name, value } = field

  return <Picker {...rest} onChange={onChange(name)} onBlur={onBlur(name)} value={value} />
}

const FormPicker: React.FunctionComponent<FieldConfig & IPicker> = props => (
  <Field component={FormPickerComponent} {...props} />
)

export default FormPicker
