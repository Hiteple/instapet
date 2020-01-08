import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

// Using a query of graphQL in a component
export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);
