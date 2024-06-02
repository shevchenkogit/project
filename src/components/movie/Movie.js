import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {urls} from "../../configs";
import {movieActions} from "../../redux";

import css from "./movie.module.css"



const Movie = ({movie})=> {
    const dispatch = useDispatch()

    const image_size = '/w300'
    const {original_title, poster_path, backdrop_path, id} = movie
    return (
        <div className={css.Movie}>
            <Link to={'selectedMoviePage'} onClick={()=>dispatch(movieActions.getMovieById(id))}>
                    <div className={css.title}> <h4>{original_title}</h4>   </div>
                    <div className={css.Image}> <img className={css.Image} src={urls.imageMovie + image_size + poster_path}/> </div>
            </Link>

        </div>
    );
}

export {Movie}