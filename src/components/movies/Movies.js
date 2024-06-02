import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";

import {movieActions} from "../../redux";
import {Movie} from "../movie/Movie";
import {SearchForm} from "../serrchForm/searchForm";

import css from "./movies.module.css"

const Movies = ()=> {
    const dispatch = useDispatch()
   const {movie} = useSelector(state => state.movies)

    const {total_pages} = movie
    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[dispatch])
    return (
        <div >
            <SearchForm/>
            <ReactPaginate

                breakLabel="..."
                nextLabel=" >"
                onPageChange={({ selected: selectedPage }) =>{
                    dispatch(movieActions.getPage(selectedPage+1))
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
                className={css.Pagination}


            />
            {movie.results&&
                            <div className={css.Movies}>
                                {
                                    movie.results.map(value => <Movie key={value.id} movie={value}/>)
                                }
                            </div>
        }
        </div>
    );
}

export {Movies}