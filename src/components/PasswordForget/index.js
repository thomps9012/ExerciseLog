import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PasswordForget = () => (
    <div>
        <Form>
            <h1>PasswordForget</h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Button variant="primary" type="submit">
                    Reset Password
  </Button>
            </Form.Group>
        </Form>
    </div>
);

export default PasswordForget;