module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@app': './app',
          '@components': './app/components',
          '@models': './app/models',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@services': './app/services',
          '@theme': './app/theme',
          '@utils': './app/utils',
          '@constants': './app/constants',
          '@hocs': './app/hocs',
          '@context': './app/context',
          '@graphql/*': './app/graphql'
        }
      }
    ]
  ]
}
