import { gql } from '@apollo/client'

export const CORE_USER_FIELDS = gql`
  fragment CoreUserFields on User {
    id
    name
    email
    phone
  }
`

export const USER_FIELDS = gql`
  ${CORE_USER_FIELDS}

  fragment UserFields on User {
    ...CoreUserFields
  }
`