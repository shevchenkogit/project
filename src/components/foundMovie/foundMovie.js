import {NavLink} from "react-router-dom";

import css from "../movie/movie.module.css";
import {urls} from "../../configs";

const FoundMovie = ({movie})=> {

    const image_size = '/w200'
    const {original_title, poster_path, backdrop_path} = movie

    return (
        <div className={css.Movie}>
            <NavLink to={'selectedMoviePage'}>
                <div> {original_title} </div>
                <div> {typeof poster_path === 'undefined'||'null'?
                !!<img src={urls.imageMovie + image_size + poster_path}/>:<img src={urls.imageMovie + image_size + poster_path}/>
            } </div>
            </NavLink>

        </div>
    );
}


export {FoundMovie}