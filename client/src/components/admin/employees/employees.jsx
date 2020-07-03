import axios from 'axios'
import Feather from 'feather-icons'
import React, { Component } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class AdminEmployees extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      showDeleteModal: false,
      deleteEmployee: {
        id: null,
        name: null
      }
    }
    this.handleSuccessClose = this.handleSuccessClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    document.title = "Employees - OpenRMS Admin"
    axios.get(`/api/admin/employees/`)
      .then(res => {
        this.setState({ employees: res.data })
      })
  }

  componentDidUpdate() {
    Feather.replace()
  }

  handleDelete(employee) {
    this.setState({ showDeleteModal: true, deleteEmployee: { id: employee.id, name: employee.name } }, () => console.log(this.state))
  }

  confirmDeleteModal() {
    return (
      <Modal show={this.state.showDeleteModal} onHide={() => this.setState({ showDeleteModal: false })}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deleting an employee cannot be undone and the records will be lost. Delete {this.state.deleteEmployee.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.setState({ showDeleteModal: false, deleteEmployee: { id: null, name: null } }, () => console.log(this.state))}>
            Close
          </Button>
          <Button variant="danger" onClick={
            () => {
              axios.delete('/api/admin/employees', { data: { id: this.state.deleteEmployeeID } })
              this.props.changeEmployeeSuccess(true, `You have successfully deleted an employee`)
              axios.get(`/api/admin/employees/`)
                .then(res => {
                  this.setState({ employees: res.data, showDeleteModal: false, deleteEmployee: { id: null, name: null } }, () => console.log(this.state))
                })
            }
          }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  handleSuccessClose() {
    this.props.changeEmployeeSuccess(false)
  }

  successAlert() {
    if (this.props.employeeAlert.show === true) {
      return (
        <Alert variant="success" onClose={() => this.handleSuccessClose()} dismissible>
          <Alert.Heading>{this.props.employeeAlert.text}</Alert.Heading>
        </Alert>
      )
    }
  }

  onSuccessAlertClose() {
    this.props.history.replace({
      pathname: '/admin/employees',
      state: { showSuccessAlert: false }
    })
    console.log(`clicked \n ${this.props.location.state.showSuccessAlert}`)
  }

  render() {
    const { url } = this.props.match
    const employeeList = this.state.employees.map((employee) => {
      return <tr key={employee._id} id={employee._id}>
        <td>{employee.name}</td>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td>{employee.address}</td>
        <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
        <td className="text-center">{employee.isManager ? <span data-feather="check"></span> : <span data-feather="x"></span>}</td>
        <td className="text-center">{employee.isAdmin ? <span data-feather="check"></span> : <span data-feather="x"></span>}</td>
        <td className="text-center">{employee.isActive ? <span data-feather="check"></span> : <span data-feather="x"></span>}</td>
        <td className="text-center"><NavLink to={`${url}/employees/edit/${employee._id}`}><span data-feather="edit"></span></NavLink></td>
        <td className="text-center"><button onClick={() => this.handleDelete({ id: employee._id, name: employee.name })}><span data-feather="trash-2"></span></button></td>
      </tr>
    })

    return (
      <>
        {this.confirmDeleteModal()}
        {this.successAlert()}
        <div className="w-100">
          <h2 className="h2 d-inline-block">Employees</h2>
          <NavLink to={`${url}/employees/create`}>
            <Button type="button" size="sm" variant="dark" className="float-right mt-1 align-middle">
              <span className="feather-16" data-feather="user-plus"></span><span className="pl-1">Add Employee</span>
            </Button>
          </NavLink>
        </div>
        <table className="table table-responsive-md table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Hire Date</th>
              <th className="text-center">Manager</th>
              <th className="text-center">Admin</th>
              <th className="text-center">Active</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employeeList}
          </tbody>
        </table>
      </>
    )
  }
}
