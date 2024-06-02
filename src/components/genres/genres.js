import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {genreActions} from "../../redux/slices/genreSlice";
import {Genr} from "../genr/Genr";
import css from './genres.module.css'

const Genres = ()=> {
    const dispatch = useDispatch()
    const {genres} = useSelector(state => state.genres)

    useEffect(()=>{
        dispatch(genreActions.getGenres())
    },[dispatch])
    return (

        <div className={css.Genres}>
            {genres.genres&&
                        <div>
                            {
                                genres.genres.map(value=><Genr key={value.id} genres={value}/>)
                            }
                        </div>
            }

        </div>
    );
}

export {Genres}