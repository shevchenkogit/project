import {Header} from "../components";
import {Outlet} from "react-router-dom";

const MinelayOuts = ()=> {

    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
}

export {MinelayOuts}