import {apiService} from "./apiServices";
import {urls} from "../configs";

const movieServices = {
    getAll:apiService.get(urls.discover + urls.movie),
    getNewPage:(pageNumber)=>apiService.get(urls.discover + urls.movie+ urls.page + `${pageNumber}`),
    getMovieById:(id)=>apiService.get(urls.movie + `/${id}`),
    getGenres:(genres)=>apiService.get(urls.genre + urls.key)
}

export {movieServices}