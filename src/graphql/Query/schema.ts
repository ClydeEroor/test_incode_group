import { gql } from '@apollo/client';

export const GET_All_CHARACTERS = gql`
  query {
    characters {
      info {
        count
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        location {
          name
        }
        episode {
          name
          air_date
        }
      }
    }
  }
`;
