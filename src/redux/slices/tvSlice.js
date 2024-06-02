import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {tvServices} from "../../services/tvServices";
import {searchService} from "../../services/searchService";

const initialState = {
    tv: [],
    errors: null,
    loading: null
}

const getAll = createAsyncThunk(
    'tvSlice/getAll',
    async (_,rejectWithValue) =>{
        try{
            const {data} = await tvServices.getAll
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getPage = createAsyncThunk(
    'tvSlice/getPage',
    async (pageNumber,rejectWithValue) =>{
        try{
            const {data} = await tvServices.getNewPage(pageNumber)
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)

const getTvSearchResult = createAsyncThunk(
    'movieSlice/SearchInfo',
    async (searchInfo,rejectWithValue) =>{
        try{
            const {data} =  await searchService.getTv(searchInfo)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)
const getTvById = createAsyncThunk(
    'movieSlice/getTvById',
    async (id,rejectWithValue) =>{
        try{
            const {data} = await tvServices.getTvById(id)
            return data
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }
)

const tvSlice = createSlice({
        name: 'tvSlice',
        initialState,
        reducers:{},
    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
        state.tv = action.payload})
        .addCase(getPage.fulfilled, (state, action)=>{
            state.tv = action.payload})
        .addCase(getTvSearchResult.fulfilled,
            (state, action)=>{
                state.tv = action.payload})
        .addCase(getTvById.fulfilled,
            (state, action)=>{
                state.tv = action.payload})
})

const {reducer:tvReducer} = tvSlice

const tvActions = {
    getAll,
    getPage,
    getTvSearchResult,
    getTvById
}

export {
    tvReducer,
    tvActions
}