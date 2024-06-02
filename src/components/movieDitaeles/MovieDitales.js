import {useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";

import {urls} from "../../configs";
import {Genr} from "../genr/Genr";
import {ProductionCountries} from "../productionCountries/productionCountries";

import css from "./movieDitales.module.css"

const MovieDitales = ()=> {

    const {movie} = useSelector(state => state.movies)

    const {original_title, poster_path,title,vote_average,
        release_date, runtime, production_countries, genres, overview} = movie


    const image_size = '/w400'

    return (
        <div className={css.MovieDitales}>
            <div>
                <div> <h1>{title}</h1> </div>
                <div> <h5>Original name: {original_title}</h5> </div>
                <div> <img src={urls.imageMovie + image_size + poster_path}/></div>
            </div>
            <div>
                <div> <h3>Release time:</h3>   {release_date}</div>
                <hr/>
                        <div> <h3>Genres:</h3>
                            {genres&& <div className={css.Genres}>
                                            {
                                                genres.map(value=><Genr key={value.id} genres={value}/>)
                                            }
                                      </div>
                            }
                        </div>
                <hr/>
                <div> <h3>movie time: {runtime} m</h3> </div>
                <hr/>
                <div><h3>Ratings:</h3>
                    <StarRatings
                    rating={vote_average}
                    starRatedColor="gold"
                    numberOfStars={10}
                    name='rating'
                /></div>
                <div> <h3>Countries:</h3>
                    {production_countries&& <div className={css.Countries}>
                        {
                            production_countries.map((value, index)=><ProductionCountries key={index} country={value}/>)
                        }
                    </div>
                    }
                </div>
                <hr/>
                <div> <h2>About</h2> <h3><i>{overview}</i></h3> </div>
            </div>

        </div>
    );
}

export {MovieDitales}