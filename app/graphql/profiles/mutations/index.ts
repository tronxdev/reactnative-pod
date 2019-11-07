import gql from 'graphql-tag'

export const CREATE_PROFILE_MUTATION = gql`
  mutation CREATE_PROFILE_MUTATION($input: CreateProfileInput!) {
    createProfile(input: $input) {
      id
    }
  }
`
