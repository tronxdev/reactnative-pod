import * as React from 'react'
// libs
import { apolloClient } from '@app/lib/apollo'
// context
import { ApolloProvider } from 'react-apollo'

export const withAmplifyApollo = EnhancedComponent => {
  const WithAmplifyApolloComponent: React.FunctionComponent<unknown> = props => (
    <ApolloProvider client={apolloClient}>
      <EnhancedComponent {...props} />
    </ApolloProvider>
  )

  return WithAmplifyApolloComponent
}
