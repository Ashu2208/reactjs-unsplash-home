import { SEARCH_PHOTOS, CLEAR_SEARCH_DATA } from "./Constants";

const initialValuesPhotos = {
    photos: []
};


export const photoReducer = (state = initialValuesPhotos, action) => {
    switch (action.type) {
        case SEARCH_PHOTOS:
            return {
                photos: [...state.photos, ...action.payload]
            }
        case CLEAR_SEARCH_DATA:
            return {
                photos: []
            }
        default:
            return state
    }

}