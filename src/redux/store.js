import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {tvReducer} from "./slices/tvSlice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    tv: tvReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}