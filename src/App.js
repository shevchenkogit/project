import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {MinelayOuts} from './layOuts/'
import {FilmsPage, TvShowPage, SelectedMoviePage, SelectedTvPage} from './pages'

import './App.css';

function App() {
  const {dayNight}  = useSelector(state => state.movies)

  return (
      <div className={dayNight?'Day':'Night'}>

          <Routes>
              <Route path={'/'} element={<MinelayOuts/>}>
                  <Route path={'movies'} element={<FilmsPage/>}>

                      <Route path={'selectedMoviePage'} element={<SelectedMoviePage/>}/>

                  </Route>
                  <Route path={'tvShows'} element={<TvShowPage/>}>

                      <Route path={'selectedTvPage'} element={<SelectedTvPage/>}/>

                  </Route>

              </Route>
          </Routes>
      </div>

  );
}

export default App;
