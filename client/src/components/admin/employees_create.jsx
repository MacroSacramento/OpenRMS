import React, { Component } from 'react'
import { Form, Col, Row } from 'react-bootstrap'

export default class CreateEmployee extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <>
        <h1 className="h2 border-bottom pb-2">Create Employee</h1>
        <Form>
          <Form.Group as={Row} controlId="formControlName">
            <Form.Label column sm={1}>Full Name</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="John Doe" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlUsername">
            <Form.Label column sm={1}>Username</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlPassword">
            <Form.Label column sm={1}>Password</Form.Label>
            <Col sm={5}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} controlId="formControlAddress">
            <Form.Label column sm={1}>Address</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="123 Palm Lane" />
            </Col>
          </Form.Group>

        </Form>
      </>
    )
  }
}