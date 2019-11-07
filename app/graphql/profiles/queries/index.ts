import gql from 'graphql-tag'

export const SEARCH_PROFILES_QUERY = gql`
  query SEARCH_PROFILES_QUERY($path: String, $body: String) {
    freeSearch(path: $path, body: $body)
  }
`

export const AUTH_MY_PROFILE_QUERY = gql`
  query AuthMyProfile($id: ID!) {
    getProfile(id: $id) {
      id
      name
      avatar
      emails {
        type
        email
      }
    }
  }
`
