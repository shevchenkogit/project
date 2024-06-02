import {useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";

import {urls} from "../../configs";
import {Genr} from "../genr/Genr";
import {ProductionCountries} from "../productionCountries/productionCountries";

import css from "./tvShowsDetail.module.css"

const TvShowDetails = ()=> {

    const {tv} = useSelector(state => state.tv)

    const {first_air_date, original_name, poster_path,name,vote_average, production_countries, genres, overview} = tv

    const image_size = '/w400'

    return (
        <div className={css.TvDitales}>
            <div>
                <div> <h1>{name}</h1> </div>
                <div> <h5>Original name: {original_name}</h5> </div>
                <div> <img src={urls.imageMovie + image_size + poster_path}/></div>
            </div>
            <div>
                <div> <h3>Release date:</h3>   {first_air_date}</div>
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

export {TvShowDetails}