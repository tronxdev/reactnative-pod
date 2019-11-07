import * as React from 'react'
// libs
import { storiesOf } from '@storybook/react-native'
import { State } from 'react-powerplug'
// components
import { SearchBar } from 'react-native-elements'
// views
import { StoryScreen, Story, UseCase } from '../../views'

storiesOf('SearchBar')
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('States', () => {
    return (
      <Story>
        <State initial={{ value: '' }}>
          {({ state, setState }) => (
            <UseCase text="showLoading = true" usage="Should be used in case of loading data">
              <SearchBar value={state.value} showLoading onChangeText={value => setState({ value })} />
            </UseCase>
          )}
        </State>
      </Story>
    )
  })
