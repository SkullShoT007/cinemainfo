import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
export const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchMovie()
    {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`)
      const json = await response.json();
      setData(json);
      console.log(json);
      
    }
    
    fetchMovie();
    
  }, [params.id])
  useEffect(() =>{
      document.title  = `${data.original_title}`;
  })
  
  return (
    <main>
      <section className='flex  justify-around flex-wrap py-5'>
        <div className='w-96'>
            <img className='rounded'  src= {`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
        </div>
        <div className='max-w-2xl text-gray- dark:text-gray-100 text-lg'>
          <h1 className='text-4xl font-bold my-2'>{data.original_title}</h1>
          <p className='my-4'>{data.overview}</p>
          {data.genres ? (
            <p className='my-7 flex flex-wrap'>
            {
              data.genres.map((genre) => (
                <span className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2' key = {genre.id}>{genre.name}</span>
              ))
            }

            
          </p>
          ) : ""}
          

          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{data.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{data.vote_count}</p>
          </div>
          <p className='my-4'>
            <span className='text-bold'>Movie Runtime: </span>
            <span>{data.runtime} min.</span>
          </p>
          <p className='my-4'>
            <span className='text-bold'>Budget: </span>
            <span>{data.budget}</span>
          </p>
          <p className='my-4'>
            <span className='text-bold'>Revenue: </span>
            <span>{data.revenue}</span>
          </p>
          <p className='my-4'>
            <span className='text-bold'>Release Date: </span>
            <span>{data.release_dat}</span>
          </p>
        </div>
      </section>
    </main>
  )
}
