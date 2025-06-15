import { MovieCard } from "../components/MovieCard"
import {useEffect} from 'react'
import {useFetch} from '../hooks/useFetch'

export const MovieList = ({title,api}) => {
 
  const { data: movies } = useFetch(api)
  useEffect(() =>{
    document.title  = title;
}, [title])
  return (
    <main>
        <section className='py-7'>
          <div className='flex justify-start flex-wrap other:justify-evenly'>
            {
              movies.map((movie) => (
                <MovieCard key = {movie.id} movie = {movie}/>
              ))
            }
              
              
          </div>
        </section>
    </main>
  )
}
