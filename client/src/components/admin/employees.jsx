import axios from 'axios'
import Feather from 'feather-icons'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Switch, Route, NavLink } from 'react-router-dom'

export default class AdminEmployees extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/admin/employees/')
      .then((res) => {
        this.setState({ employees: res.data })
      })
  }

  componentDidUpdate() {
    Feather.replace()
  }

  render() {
    const { url } = this.props.match
    const employeeList = this.state.employees.map((employee) => {
      return <tr key={employee._id} id={employee._id}>
        <td>{employee.name}</td>
        <td>{employee.username}</td>
        <td>{employee.address}</td>
        <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
        <td className="text-center">{employee.isManager ? <span data-feather="check"></span> : <span data-feather="x"></span>}</td>
        <td className="text-center">{employee.isAdmin ? <span data-feather="check"></span> : <span data-feather="x"></span>}</td>
        <td className="text-center">{employee.isActive ? <span data-feather="check"></span> : <span data-feather="x"></span>}</td>
      </tr>
    })

    return (
      <>
        <div className="w-100">
          <h2 className="h2 d-inline-block">Employees</h2>
          <NavLink to={`${ url }/employees/create`}>
            <Button type="button" size="sm" variant="dark" className="float-right align-middle">
              <span className="feather-16" data-feather="plus"></span><span className="pl-1">Add Employee</span>
            </Button>
          </NavLink>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Address</th>
              <th>Hire Date</th>
              <th className="text-center">Manager</th>
              <th className="text-center">Admin</th>
              <th className="text-center">Active</th>
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