import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-white text-center">Login</h1>
          <hr/>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" name="password" required/>
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
