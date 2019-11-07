import React from 'react'
// components
import { Loader } from '@components/UI'
import { SafeAreaView, StyleSheet } from 'react-native'
// theme
import { palette } from '@theme/palette'

const styles = StyleSheet.create({
  loaderView: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  }
})

const FullScreenLoader: React.FunctionComponent<{}> = () => (
  <SafeAreaView style={styles.loaderView}>
    <Loader size={'large'} color={palette.blue200} />
  </SafeAreaView>
)

export default FullScreenLoader
