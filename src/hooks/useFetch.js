import { useState, useEffect } from "react"
export const useFetch = (url,  queryTerm= "") => {
    const [data, setData] = useState([])
    useEffect(()=>{
        async function fetchMovies(){
          const response = await fetch(`https://api.themoviedb.org/3/${url}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`)
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
        
      },[url, queryTerm])
  return {data}
}
