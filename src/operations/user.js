import { gql } from '@apollo/client'
import { USER_FIELDS } from './fragment'

export const GET_USERS = gql`
  ${USER_FIELDS}

  query GetUsers(
    $query: String
  ) {
    users(query: $query) {
      ...UserFields
    }
  }
`

export const CREATE_USER = gql`
  ${USER_FIELDS}

  mutation CreateUser(
    $data: CreateUserInput!
  ) {
    createUser(data: $data) {
      ...UserFields
    }
  }
`