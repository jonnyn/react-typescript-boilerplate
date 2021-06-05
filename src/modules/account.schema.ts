import { gql } from '@apollo/client'

//---------------------------
// QUERIES
//---------------------------
export const GET_ME = gql`
  query getMe {
    me {
      id
      email
      username
      firstName
      lastName
      state
      role
      lastLogin
      createdAt
      updatedAt
    }
  }
`

//---------------------------
// MUTATIONS
//---------------------------

export const UPDATE_ME = gql`
  mutation updateMe($input: MeUpdateInput!) {
    updateMe(input: $input) {
      error {
        code
      }
    }
  }
`

export const REMOVE_AVATAR = gql`
  mutation removeAvatar {
    removeAvatar {
      error {
        code
      }
    }
  }
`
