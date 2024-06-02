import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";
import css from './searchForm.module.css'


const SearchForm = ()=> {
    const {register, handleSubmit} = useForm()

    const dispatch = useDispatch()

    const onSubmit = (result)=>{
        dispatch(movieActions.getSearchResult(result.search))
    }

    return (
        <div className={css.SearchForm} >
            <form className={css.SearchForm} onSubmit={handleSubmit(onSubmit)}>
                <button className={css.Button}>search</button>
                <input className={css.Input} type='text' placeholder='Entre name of movie' {...register('search')}/>
            </form>
        </div>
    );
}

export {SearchForm}