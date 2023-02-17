import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'


const Error = () => {

  const {darkTheme} = useGlobalContext();
  
  return (
    <section className={darkTheme?'error-page section title-color-change':'error-page section'}>
      <div className="error-container">
        <h1>oops! Page not found...</h1>
        <Link to='/cocktail-db' className='btn btn-primary'>Back home</Link>
      </div>
    </section>
  )
}

export default Error
