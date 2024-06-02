import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../../services";

const  initialState = {
    genres:[],
    errors: null
}

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (genres,rejectWithValue) =>{
        try{
            const {data} = await movieServices.getGenres(genres)
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)

const genreMovie = createSlice({
    name:'genreMovie',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getGenres.fulfilled,
            (state, action)=>{
                state.genres = action.payload})
})

const {reducer: genreReducer} = genreMovie

const genreActions = {
    getGenres
}

export {
    genreReducer,
    genreActions
}