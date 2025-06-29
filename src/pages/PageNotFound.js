import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import PageNotFoundimg from '../assets/pexels-weekendplayer-704555.jpg'
export const PageNotFound = () => {
  useEffect(() =>{
    document.title  ="Page Not Found";
}, [])
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className = "text-slate-700 text-5xl dark:text-slate-100">404 oops! Page not Found</p>
         
               <img className='max-w-lg' src={PageNotFoundimg} alt="" />
                <Link to = "/">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Cinemate</button>
                </Link>
               
        </div>
        <div>
         
        </div>
      </section>
    </main>
  )
}
