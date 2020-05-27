import axios from 'axios'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { Form, Col, Row, Button, Alert } from 'react-bootstrap'

class EditEmployee extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      employeeData: null,
      formControlName: '',
      formControlUsername: '',
      formControlPassword: '',
      formControlEmail: '',
      formControlAddress: '',
      formControlTel: '',
      formControlManager: false,
      formControlAdmin: false,
      formControlActive: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/admin/employees', {
      params: { _id: this.props.match.params.id }
    })
      .then((res) => {
        this.setState({
          employeeData: res.data,
          isLoading: false
        })
        this.setState({
          formControlName: this.state.employeeData.name,
          formControlUsername: this.state.employeeData.username,
          formControlEmail: this.state.employeeData.email,
          formControlAddress: this.state.employeeData.address,
          formControlTel: this.state.employeeData.phoneNumber,
          formControlManager: this.state.employeeData.isManager,
          formControlAdmin: this.state.employeeData.isAdmin,
          formControlActive: this.state.employeeData.isActive
        })

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
    this.setState({
      [event.target.id]: value
    })
  }

  handleSubmit(event) {
    axios.put(`/api/admin/employees`, {
      id: this.props.match.params.id,
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
        this.props.changeEmployeeSuccess(true, `You have successfully updated employee: ${this.state.formControlName}`)
        this.props.history.push('/admin/employees')
      })
    event.preventDefault()
  }

  render() {
    if (this.state.employeeData !== null) {
      return (
        <>
          <h1 className="h2 border-bottom pb-2">Edit Employee</h1>
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
              <Form.Label column sm={2}>Password</Form.Label>
              <Col sm={5}>
                <Form.Control type="password" value={this.state.formControlPassword} onChange={this.handleChange} placeholder="Password" />
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
                <Button variant="dark" type="submit">Update</Button>
              </Col>
            </Form.Group>
          </Form>
        </>
      )
    } else if(this.state.isLoading){
      return (<></>)
    } else {
      return <Alert variant="danger">An error has occurred.</Alert>
    }
  }
}

export default withRouter(EditEmployee)