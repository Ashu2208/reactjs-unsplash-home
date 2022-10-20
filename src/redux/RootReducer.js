import { combineReducers } from "redux";
import { topicsReducer, photoReducer, topicReducer } from "./Reducers";
export const RootReducer = combineReducers({
    topicsReducer,
    topicReducer,
    photoReducer,
})