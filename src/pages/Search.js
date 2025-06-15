import { MovieCard } from "../components/MovieCard"

import {useFetch} from '../hooks/useFetch'
import { useSearchParams } from "react-router-dom";
export const Search = ({api}) => {
  const [params] = useSearchParams();
  const queryTerm = params.get("q");
  const { data: movies } = useFetch(api, queryTerm)
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700  dark:text-white">{movies.length === 0? `no result found for ${queryTerm}`: `results for ${queryTerm}`}</p>
      </section>
        <section className='py-7'>
          <div className='flex justify-start flex-wrap'>
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
