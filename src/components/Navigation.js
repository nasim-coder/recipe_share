import React from 'react'
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import logo from '../images/recipe_logo.png';

const Navigation = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Recipe Share logo"
                        />
                    </Navbar.Brand>
                    <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    <Nav className="ml-auto">
                        
                        <Nav.Link href="#home">Browse Recipes</Nav.Link>
                        <Nav.Link href="#features">Register</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        
                    </Nav>

                </Container>
            </Navbar>
            <img src="" alt="" />
        </>
    )
}

export default Navigation