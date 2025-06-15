import {Routes, Route} from 'react-router-dom';
import {MovieDetail, MovieList, PageNotFound, Search} from '../pages';


export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-900">
        <Routes>
            <Route path = "/" element = {<MovieList title = "CinemaInfo" api = "movie/now_playing"/>}/>
            <Route path = "movie/:id" element = {<MovieDetail/>}/>
            <Route path = "movies/popular" element = {<MovieList title = "Popular" api = "movie/popular"/>}/>
            <Route path = "movies/top" element = {<MovieList title = "Top Rated" api = "movie/top_rated"/>}/>
            <Route path = "movies/upcoming" element = {<MovieList title = "upcoming" api = "movie/upcoming"/>}/>
            <Route path = "search" element = {<Search api = "search/movie"/>}/>
            <Route path = "*" element = {<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
