import { onError } from 'apollo-link-error'

export const errorLink = onError(console.log)
