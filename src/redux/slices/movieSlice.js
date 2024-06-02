import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../../services";
import {searchService} from "../../services/searchService";

const initialState = {
    movie: [],
    errors: null,
    loading: null,
    pageNumber:null,
    dayNight:localStorage.getItem('dayNight')
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_,rejectWithValue) =>{
        try{
           const {data} = await movieServices.getAll
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getPage = createAsyncThunk(
    'movieSlice/getPage',
    async (pageNumber,rejectWithValue) =>{
        try{
            const {data} = await movieServices.getNewPage(pageNumber)
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getSearchResult = createAsyncThunk(
    'movieSlice/SearchInfo',
    async (searchInfo,rejectWithValue) =>{
        try{
            const {data} =  await searchService.getMovie(searchInfo)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id,rejectWithValue) =>{
        try{
            const {data} = await movieServices.getMovieById(id)
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getGenresById = createAsyncThunk(
    'movieSlice/getGenresById',
    async (id,rejectWithValue) =>{
        try{
            const {data} = await movieServices.getOneGenre(id)
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        changeColor:(state, action)=>{
            state.dayNight = action.payload
            localStorage.setItem('dayNight', `${action.payload}`)
        }
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
        state.movie = action.payload})
        .addCase(getPage.fulfilled,(state, action)=>{
            state.movie = action.payload})
        .addCase(getSearchResult.fulfilled,
            (state, action)=>{
            state.movie = action.payload})
        .addCase(getMovieById.fulfilled,
            (state, action)=>{
                state.movie = action.payload})
        .addCase(getGenresById.fulfilled,
            (state, action)=>{
                state.movie = action.payload})
})

const {reducer:movieReducer, actions:{changeColor}} = movieSlice

const movieActions = {
    getAll,
    getPage,
    getSearchResult,
    getMovieById,
    changeColor,
    getGenresById
}

export {
    movieReducer,
    movieActions
}