import React from 'react'
// libs
import { map, find, getOr } from 'lodash/fp'
// components
import RNPicker from 'react-native-picker'
import Input, { IInput } from './Input'

interface PickerOptions {
  pickerData?: any[]
  selectedValue?: any[]
  pickerTitleText?: string
  pickerConfirmBtnText?: string
  pickerCancelBtnText?: string
  pickerConfirmBtnColor?: number[]
  pickerCancelBtnColor?: number[]
  pickerTitleColor?: number[]
  pickerToolBarBg?: number[]
  pickerBg?: number[]
  pickerToolBarFontSize?: number
  pickerFontSize?: number
  pickerRowHeight?: number
  pickerFontColor?: number[]
  onPickerConfirm?(item: any[]): void
  onPickerCancel?(item: any[]): void
  onPickerSelect?(item: any[]): void
}

export interface IOption<T = string> {
  label: string
  value: T
}

export interface IPicker extends PickerOptions {
  options: IOption[]
  value?: any
  onChange?: any
  inputProps: IInput
}

const Picker: React.FunctionComponent<IPicker> = ({ value, onChange, options, inputProps, ...rest }) => {
  React.useEffect(() => {
    return () => {
      RNPicker.hide()
    }
  })

  const handlePress = () => {
    RNPicker.init({
      pickerData: map('value')(options),
      selectedValue: [value],
      onPickerConfirm: ([pickedValue]) => {
        onChange(pickedValue)
      },
      pickerTitleText: 'pickerTitleText',
      pickerConfirmBtnText: 'Confirm',
      pickerCancelBtnText: 'Cancel',
      ...rest
    })

    RNPicker.show()
  }

  const currentOption: IOption = find<IOption>({ value })(options)
  const text: string = getOr<IOption, any, string>('', ['label'])(currentOption)

  return <Input editable={false} onTouchEnd={handlePress} value={text} {...inputProps} />
}

export default Picker
