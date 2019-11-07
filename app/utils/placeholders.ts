import { defaultTo } from 'lodash/fp'

export const toDefaultUserAvatar = defaultTo('http://s3.amazonaws.com/37assets/svn/765-default-avatar.png')
export const toNA = defaultTo('N/A')
