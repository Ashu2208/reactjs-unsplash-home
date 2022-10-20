import { SEARCH_PHOTOS, CLEAR_SEARCH_DATA, GET_TOPICS, GET_TOPIC_DETAIL } from "./Constants";

const initialValuesPhotos = {
    photos: []
};
const initialValuesTopics = {
    topics: []
};
const initialValuesTopic = {
    topic: {}
}



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

export const topicsReducer = (state = initialValuesTopics, action) => {
    switch (action.type) {
        case GET_TOPICS:
            return {
                topics: [...action.payload]
            }
        default:
            return state
    }

}

export const topicReducer = (state = initialValuesTopic, action) => {
    switch (action.type) {
        case GET_TOPIC_DETAIL:
            return {
                topic: { ...action.payload }
            }
        default:
            return state
    }

}