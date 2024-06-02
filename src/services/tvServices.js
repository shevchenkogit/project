import {apiService} from "./apiServices";
import {urls} from "../configs";

const tvServices = {
    getAll:apiService.get(urls.discover + urls.tv),
    getNewPage:(pageNumber)=>apiService.get(urls.discover + urls.tv+ urls.page + `${pageNumber}`),
    getTvById:(id)=>apiService.get(urls.tv + `/${id}`)
}


export {tvServices}