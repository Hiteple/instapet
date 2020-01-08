import { GET_PHOTOS } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../ListOfPhotoCards/index'

export const ListOfPhotoCards = GET_PHOTOS(ListOfPhotoCardsComponent)
