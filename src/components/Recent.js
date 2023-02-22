import React from 'react'
import Dish from './Dish';
// import { Card, Button } from 'react-bootstrap';
import dish_image from '../images/paneercurry.jpg';
let title = "Paneer Curry";
let description = 'Paneer curry recipe is a rich and delicious curry made in an onion-tomato-cashew curry base with soft paneer cubes or Indian cottage cheese.'


const Recent = () => {
  return (
    <>
      <h1 className='recent-recipe'>Recent Recipes</h1>
      <div className='cards'>
        <Dish title={title} description={description} dish_image={dish_image} />
        <Dish title={title} description={description} dish_image={dish_image} />
        <Dish title={title} description={description} dish_image={dish_image} />
        <Dish title={title} description={description} dish_image={dish_image} />
      </div>
    </>
  )
}

export default Recent