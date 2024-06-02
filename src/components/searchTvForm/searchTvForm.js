import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from "./searchTvForm.module.css"
import {tvActions} from "../../redux/slices/tvSlice";

const SearchTvForm = ()=> {
    const {register, handleSubmit} = useForm()

    const dispatch = useDispatch()

    const onSubmit = (result)=>{
        dispatch(tvActions.getTvSearchResult(result.search))
    }

    return (
        <div className={css.SearchTvForm} >
            <form className={css.SearchTvForm} onSubmit={handleSubmit(onSubmit)}>
                <button className={css.Button}>search</button>
                <input className={css.Input} type='text' placeholder='Entre name of movie' {...register('search')}/>
            </form>

        </div>
    );
}

export {SearchTvForm}