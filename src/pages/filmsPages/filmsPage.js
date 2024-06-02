import {Outlet} from "react-router-dom";

import {Movies} from "../../components";
import css from './filmsPage.module.css'

const FilmsPage = ()=> {

    return (
        <div className={css.FilmsPage}>

            <div>
                <Movies/>
                <Outlet/>
            </div>

        </div>
    );
}

export {FilmsPage}