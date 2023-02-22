import React from 'react'
import featureImg from '../images/featured.jpeg'
import { Button } from 'react-bootstrap'
const Featured = () => {
  return (
    <>
      <h1>Featured Recipe</h1>
      <div className="feature-img-container">
            <img src={featureImg} className="feature-image" alt='feature' />
            <div className="feature-div">
                <h1 className='featured-recipe-name'>Mutton Biryani</h1>
          <p className="m-0">Hyderabadi mutton biryani is a classic dish made by layering rice over slow cooked mutton gravy</p>
          <Button variant="outline-success float-end">Know More</Button>{''}
            </div>
      </div>
    </>
  )
}

export default Featured