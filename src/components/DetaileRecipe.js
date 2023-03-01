import React from 'react'
import Comment from './Comment'
const DetaileRecipe = () => {
  return (
    <div>
          <div>
              <img src="" alt="" />
          </div>
          <h1>Recipe Title</h1>
          <h3>rating</h3>
          <p>description</p>
          <div>
              <h2>Cooking Time: </h2>
              <h2>Ingredients</h2>
              <ul>
                  <li>1/2 spoonfull of soda</li>
                  <li>2 cup water</li>
                  <li>5 chilly</li>
                  <li>2 kg paneer</li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
              <h2>Cooking Instructions:</h2>
              <p>some instructions</p>
              <Comment />
          </div>
    </div>
  )
}

export default DetaileRecipe