import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { MyLoader } from '../Loader/Loader'

const GET_SINGLE_PHOTO = gql`
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
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <MyLoader />
  if (error) return <p>Error</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  )
}
