import React from 'react'
import { Card, Button } from 'react-bootstrap';
const Dish = ({dish_image, title, description}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ dish_image } />
                <Card.Body className='text-center'>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="outline-success">See Recipe</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Dish