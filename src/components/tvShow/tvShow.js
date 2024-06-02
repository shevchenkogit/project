import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {urls} from "../../configs";
import {tvActions} from "../../redux/slices/tvSlice";

import css from './tvShow.module.css'

const TvShow = ({tv})=> {
    const dispatch = useDispatch()

    const image_size = '/w300'
    const {poster_path, name, id} = tv
    return (
        <div>

            <div className={css.TvShow}>
                <Link to={'selectedTvPage'} onClick={()=>dispatch(tvActions.getTvById(id))}>
                    <div className={css.title}> <h4>{name}</h4>   </div>
                    <div className={css.Image}> <img className={css.Image} src={urls.imageMovie + image_size + poster_path}/> </div>
                </Link>

            </div>
        </div>
    );
}

export {TvShow}