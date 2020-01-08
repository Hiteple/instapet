import { withPhotos } from "../hoc/withPhotos";
import { ListOfPhotoCardsComponent } from "../ListOfPhotoCards/index";

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
