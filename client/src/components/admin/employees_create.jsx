import axios from 'axios'
import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'

export default class CreateEmployee extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formControlName: '',
      formControlUsername: '',
      formControlPassword: '',
      formControlEmail: '',
      formControlAddress: '',
      formControlTel: '',
      formControlManager: false,
      formControlAdmin: false,
      formControlActive: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    console.log(this.props)
  }

  handleChange(event) {
    const target = event.target
    const id = target.id
    const value = (
      id === 'formControlAdmin' ? target.checked :
      id === 'formControlManager' ? target.checked :
      id === 'formControlActive' ? target.checked :
      target.value
    )

    console.log(`${event.target.id} is ${value}`)
    this.setState({
      [event.target.id]: value
    })
  }

  handleSubmit(event) {
    console.log(this.state)
    axios.post(`/api/admin/employees`, {
      username: this.state.formControlUsername,
      name: this.state.formControlName,
      password: this.state.formControlPassword,
      email: this.state.formControlEmail,
      phoneNumber: this.state.formControlTel,
      address: this.state.formControlAddress,
      isManager: this.state.formControlManager,
      isAdmin: this.state.formControlAdmin,
      isActive: this.state.formControlActive
    })
      .then((res) => {
        this.props.changeEmployeeSuccess(true)
        this.props.history.push({
          pathname: '/admin/employees',
          state: { showSuccessAlert: true }
        })
      })
    event.preventDefault()
  }

  render() {
    return (
      <>
        <h1 className="h2 border-bottom pb-2">Create Employee</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formControlName">
            <Form.Label column sm={2}>Full Name *</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.formControlName} onChange={this.handleChange} placeholder="John Doe" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlUsername">
            <Form.Label column sm={2}>Username *</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.formControlUsername} onChange={this.handleChange} placeholder="Username" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlPassword">
            <Form.Label column sm={2}>Password *</Form.Label>
            <Col sm={5}>
              <Form.Control type="password" value={this.state.formControlPassword} onChange={this.handleChange} placeholder="Password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlEmail">
            <Form.Label column sm={2}>Email *</Form.Label>
            <Col sm={5}>
              <Form.Control type="email" value={this.state.formControlEmail} onChange={this.handleChange} placeholder="name@email.com" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlAddress">
            <Form.Label column sm={2}>Address *</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.formControlAddress} onChange={this.handleChange} placeholder="123 Palm Lane" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlTel">
            <Form.Label column sm={2}>Phone Number *</Form.Label>
            <Col sm={5}>
              <Form.Control type="tel" value={this.state.formControlTel} onChange={this.handleChange} placeholder="(123) 456 7891" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlManager">
            <Form.Label column sm={2}>Manager</Form.Label>
            <Col sm={1}>
              <Form.Check checked={this.state.formControlManager} onChange={this.handleChange} aria-label="is Manager?" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlAdmin">
            <Form.Label column sm={2}>Admin</Form.Label>
            <Col sm={1}>
              <Form.Check checked={this.state.formControlAdmin} onChange={this.handleChange} aria-label="is Admin?" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlActive">
            <Form.Label column sm={2}>Active</Form.Label>
            <Col sm={1}>
              <Form.Check checked={this.state.formControlActive} onChange={this.handleChange} aria-label="is Active?" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={1}>
              <Button variant="dark" type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    )
  }
}