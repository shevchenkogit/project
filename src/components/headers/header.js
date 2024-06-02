import {NavLink} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";

import css from './header.module.css'


const Header = ()=> {
    const {dayNight} = useSelector(state => state.movies)
    const dispatch = useDispatch()



    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>films</NavLink>
            <NavLink to={'tvShows'}>TV Shows</NavLink>
            <div className={css.rightNav}>

                    <button className={css.User} title="Profile name: User"><b>U</b></button>
                    <button className={dayNight?css.Day:css.Night}
                         onClick={()=> dayNight === false?dispatch(movieActions.changeColor(true)):dispatch(movieActions.changeColor(false))}>
                    </button>

            </div>
        </div>
    );
}

export {Header}