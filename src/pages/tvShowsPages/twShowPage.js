import {Outlet} from "react-router-dom";

import {TvShows} from "../../components";

const  TvShowPage = ()=> {

    return (
        <div>
            <TvShows/>
            <Outlet/>
        </div>
    );
}

export {TvShowPage}