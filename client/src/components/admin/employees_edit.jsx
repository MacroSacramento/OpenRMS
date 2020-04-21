import axios from 'axios'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'

class EditEmployee extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employeeData: null
    }
  }

  componentDidMount() {
    axios.get('/api/admin/employees', {
      params: { ID: this.props.match.params.id }
    })
      .then((res) => {
        this.setState({ employeeData: res.data })
      })

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

  render() {
    if(this.state.employeeData !== null){
      return (
        <>
        <h1 className="h2 border-bottom pb-2">Edit Employee</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formControlName">
            <Form.Label column sm={2}>Full Name *</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.employeeData.name} onChange={this.handleChange} placeholder="John Doe" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlUsername">
            <Form.Label column sm={2}>Username *</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.employeeData.username} onChange={this.handleChange} placeholder="Username" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlPassword">
            <Form.Label column sm={2}>Password *</Form.Label>
            <Col sm={5}>
              <Form.Control type="password" value={this.state.employeeData.password} onChange={this.handleChange} placeholder="Password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlEmail">
            <Form.Label column sm={2}>Email *</Form.Label>
            <Col sm={5}>
              <Form.Control type="email" value={this.state.employeeData.email} onChange={this.handleChange} placeholder="name@email.com" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlAddress">
            <Form.Label column sm={2}>Address *</Form.Label>
            <Col sm={5}>
              <Form.Control type="text" value={this.state.employeeData.address} onChange={this.handleChange} placeholder="123 Palm Lane" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlTel">
            <Form.Label column sm={2}>Phone Number *</Form.Label>
            <Col sm={5}>
              <Form.Control type="tel" value={this.state.employeeData.phoneNumber} onChange={this.handleChange} placeholder="(123) 456 7891" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlManager">
            <Form.Label column sm={2}>Manager</Form.Label>
            <Col sm={1}>
              <Form.Check checked={this.state.employeeData.isManager} onChange={this.handleChange} aria-label="is Manager?" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlAdmin">
            <Form.Label column sm={2}>Admin</Form.Label>
            <Col sm={1}>
              <Form.Check checked={this.state.employeeData.isAdmin} onChange={this.handleChange} aria-label="is Admin?" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formControlActive">
            <Form.Label column sm={2}>Active</Form.Label>
            <Col sm={1}>
              <Form.Check checked={this.state.employeeData.isActive} onChange={this.handleChange} aria-label="is Active?" />
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
    } else {
      return <h1>hi</h1>
    }
  }

}

export default withRouter(EditEmployee)