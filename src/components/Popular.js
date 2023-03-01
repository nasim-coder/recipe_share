import React from 'react'
// import { Card, Button } from 'react-bootstrap';
import rice from '../images/rice.jpg'
import Dish from './Dish';
const Popular = () => {
  return (
    <>
      <h1 className='popular-recipe'>Popular Dishes</h1>
      <div className='cards row justify-content-around gy-5'>
        <Dish dish_image={rice} title={"Polao"} description={'Pilaf or pilau is a rice dish, or in some regions, a wheat dish, whose recipe usually involves cooking in'} />
        <Dish dish_image={rice} title={"Polao"} description={'Pilaf or pilau is a rice dish, or in some regions, a wheat dish, whose recipe usually involves cooking in'} />
        <Dish dish_image={rice} title={"Polao"} description={'Pilaf or pilau is a rice dish, or in some regions, a wheat dish, whose recipe usually involves cooking in'} />
        <Dish dish_image={rice} title={"Polao"} description={'Pilaf or pilau is a rice dish, or in some regions, a wheat dish, whose recipe usually involves cooking in'} />
      </div>
    </>
  )
}

export default Popular