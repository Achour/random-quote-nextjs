"use client"
import { useEffect, useState } from 'react';
export default function Home() {

  const [quote, setquote] = useState(false);
  const [count, setcount] = useState(0)

  useEffect(() => {

    fetch('/api/quote')
      .then(res => res.json())
      .then(json => {
        setquote(json)
      })


  }, [count]);

  function handleClick() {
    setquote(false)
    setcount(count + 1)
  }


  if (!quote) {
    return (
      <main className='h-screen flex items-center justify-center text-center'>


        <div className='animate-pulse flex flex-col gap-3 w-full justify-center items-center'>
          <p className='text-7xl text-gray-700'><i className="bi bi-quote"></i></p>
          <div className='w-full h-6 bg-gray-300 dark:bg-gray-700 rounded-xl'></div>
          <div className='w-1/2 h-6 bg-gray-300 dark:bg-gray-700  rounded-xl'></div>
          <div className='w-1/3 h-6 bg-gray-300  dark:bg-gray-700 rounded-xl'></div>
        </div>

        <button disabled={true} onClick={handleClick} className='dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 fixed bottom-10 bg-white border py-3 px-5 rounded-xl'>
          <div className='animate-spin'>

            <i className="bi bi-arrow-clockwise text-3xl"></i>
          </div>
        </button>
      </main>
    )
  }

  return (
    <main className='h-screen flex items-center justify-center text-center'>
      {quote.map(quote => (
        <div key={quote.author}>
          <div className='rounded-xl mb-5 text-center'>
            <p className='text-7xl dark:text-gray-200 text-gray-700'><i className="bi bi-quote"></i></p>
            <p className='font-light dark:text-gray-200 text-gray-700 text-3xl'>
              <em>
                {quote.quote}
              </em>
            </p>
          </div>
          <p className='dark:text-gray-100'>{quote.author}</p>

        </div>
      ))}
      <button onClick={handleClick} className=' dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 fixed bottom-10 bg-white border py-3 px-5 rounded-xl'>


        <i className="bi bi-arrow-clockwise text-3xl"></i>
      </button>
    </main>
  )
}
