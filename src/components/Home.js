import React from 'react';
import { Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-bootstrap/lib/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Home() {
    return(
        <Row>
            <Col xs={12}>
                {/* add in an image and some custom styling here */}
                <h1>It's time to get yoked and fit!</h1>
                <p>Have you ever wanted to track your runs, weight training sessions, and general fitness workouts in one convienent place? Health Hub, helps you keep track of your exercises so you can focus on putting in that work.</p>
                <ButtonToolbar>
                    <LinkContainer to="/signup">
                        <Button bsStyle="primary">Sign Up</Button>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Button>Log In</Button>
                    </LinkContainer>
                </ButtonToolbar>
            </Col>
        </Row>
    );
}
export default Home;