import {apiService} from "./apiServices";
import {urls} from "../configs";

const searchService = {
    getMovie:(nameOfMovie)=>apiService.get(urls.searchMovie + urls.movie + urls.key + `&query=` + nameOfMovie),
    getTv:(nameOfTv)=>apiService.get(urls.searchMovie + urls.tv + urls.key + `&query=` + nameOfTv)
}

export {searchService}