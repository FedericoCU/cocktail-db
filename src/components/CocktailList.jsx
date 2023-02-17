import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const {cocktails, loading, darkTheme} = useGlobalContext();


  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
    return(
      <h2 className={darkTheme?"section-title title-color-change":"section-title"}>No cocktails found 😢</h2>
    )
  }

  return (
    <section className='section'>
      <h2 className={darkTheme?"section-title title-color-change":"section-title"}>cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) =>{
          return(
            <Cocktail key={cocktail.id} {...cocktail}/>
          )
        })}
      </div>
      
    </section>
  )
}

export default CocktailList
