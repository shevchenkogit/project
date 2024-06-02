import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import ReactPaginate from "react-paginate";

import {tvActions} from "../../redux/slices/tvSlice";
import {TvShow} from "../tvShow/tvShow";
import {SearchTvForm} from "../searchTvForm/searchTvForm";

import css from './tvShows.module.css'

const TvShows = ()=> {
    const dispatch = useDispatch()

    const {tv} = useSelector(state => state.tv)

    const {total_pages} = tv
    useEffect(()=>{
        dispatch(tvActions.getAll())
    },[dispatch])
    return (
        <div >
            <SearchTvForm/>
            <ReactPaginate

                breakLabel="..."
                nextLabel=" >"
                onPageChange={({ selected: selectedPage }) =>{
                    dispatch(tvActions.getPage(selectedPage+1))
                }}
                pageRangeDisplayed={3}
                previousLabel="< "
                renderOnZeroPageCount={null}
                pageCount={ total_pages}
                containerClassName={css.pageNum}
                pageLinkClassName={css.pageNum}
                previousLinkClassName={css.pageNum}
                nextLinkClassName={css.pageNum}
                activeLinkClassName={css.active}
                className={css.tvPagination}
                onClick={({ selected: selectedPage }) =>{
                    console.log(selectedPage+1)
                }}


            />

            {tv.results&&
                <div className={css.TvShows}>
                    {
                        tv.results.map(value => <TvShow key={value.id} tv={value}/>)
                    }
                </div>
            }
        </div>
    );
}

export {TvShows}