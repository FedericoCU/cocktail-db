import React from 'react';
import { useGlobalContext } from '../context';


const About = () => {

  const {darkTheme} = useGlobalContext();

  return (
    <section className={darkTheme?'section about-section title-color-change':'section about-section'}>
      <h1 className="section-title">About us</h1>
      <p>Welcome to CocktailDB, your ultimate guide to cocktail recipes from around the world! We are passionate about mixology and want to share our love for unique and delicious drinks with you.

        At CocktailDB, we have curated an extensive collection of cocktail recipes, from classic favorites to modern twists. Whether you're a seasoned bartender or just starting out, we have something for everyone.

        Our team of mixologists has carefully crafted each recipe to ensure it is easy to follow and includes all the necessary ingredients and measurements. We also provide detailed information about the history and background of each cocktail, so you can learn more about the stories behind your favorite drinks.

        So, whether you're hosting a party or just want to try something new, explore our collection of cocktail recipes and get ready to impress your guests with your mixology skills. Cheers!
      </p>
    </section>
  )
}

export default About
