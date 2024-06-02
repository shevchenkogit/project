import {useSelector} from "react-redux";

import {FoundMovie} from "../foundMovie/foundMovie";

import css from './foundMovies.module.css'

const FoundMovies = ()=> {

    const {movie} = useSelector(state => state.movies)
    console.log(movie);
    return (
        <div>
            {movie.results&&
                            <div className={css.FoundMovies}>
                                {
                                    movie.results.map(value=> <FoundMovie key={value.id} movie={value}/>)
                                }

                            </div>
            }
        </div>
    );
}

export {FoundMovies}