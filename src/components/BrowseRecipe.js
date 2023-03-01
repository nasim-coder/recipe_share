import React from 'react'
import { ListGroup, Container, Row, Col } from 'react-bootstrap'
import Dish from './Dish'
import dish_image from '../images/burger.jpg';
let title = 'Burger'
let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eum ab. Iure blanditiis reprehenderit harum tenetur error debitis incidunt quo alias amet veniam soluta, maxime, mollitia possimus maiores accusamus labore!";
console.log(Dish);
const BrowseRecipe = () => {
    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col sm={3} xs={12}>
                        <h1>Categories</h1>
                        <ListGroup as="ol" numbered variant="flush">
                            <ListGroup.Item action href="#link1">All</ListGroup.Item>
                            <ListGroup.Item action href="#link1">Veg</ListGroup.Item>
                            <ListGroup.Item action href="#link1">Non-Veg</ListGroup.Item>
                            <ListGroup.Item action href="#link1">Vegan</ListGroup.Item>
                            <ListGroup.Item action href="#link1">Most Rated Veg</ListGroup.Item>
                            <ListGroup.Item action href="#link1">Most Rated non-veg</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h1>Recipes</h1>
                        <Row className='justify-content-around gy-5'>
                            <Dish dish_image={dish_image} title={title} description={description} />
                            <Dish dish_image={dish_image} title={title} description={description} />
                            <Dish dish_image={dish_image} title={title} description={description} />
                            <Dish dish_image={dish_image} title={title} description={description} />
                            <Dish dish_image={dish_image} title={title} description={description} />
                            <Dish dish_image={dish_image} title={title} description={description} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BrowseRecipe