import { gql } from '@apollo/client';
//connects to me query on backend
export const GET_USER = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;