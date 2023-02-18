import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { FaChevronRight} from "react-icons/fa";
import { useGlobalContext } from '../context';


const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {

  const {darkTheme} = useGlobalContext();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {

        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
          } = data.drinks[0];

          const ingredients = [
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
          ]


          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          };

          setCocktail(newCocktail);
        }
        else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id])

  //returns
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className={darkTheme?"section-title title-color-change":"section-title"}>No cocktail to display 🥲</h2>
  }

  const { name, image, info, category, glass, instructions, ingredients } = cocktail;
  return (
    <section className='section cocktail-section'>
      <h2 className={darkTheme?"section-title title-color-change":"section-title"}>{name}</h2>
      <div className={darkTheme?"drink title-color-change":"drink"}>
        <img src={image} alt={name} className='cocktail-border'/>
        <div className="drink-info">
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            <hr />
            {ingredients.map((ingredient) => {
              return (
                ingredient ?
                  <>
                    <span><FaChevronRight />{ingredient}</span>
                    <hr />
                  </>
                  : null
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
};

export default SingleCocktail;
