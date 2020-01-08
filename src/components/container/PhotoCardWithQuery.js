import React from "react";
import { PhotoCard } from "../PhotoCard/index";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={query} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;

        const { photo = {} } = data;
        return <PhotoCard {...photo} />;
      }}
    </Query>
  );
};
