import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'

class EditEmployee extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      employeeData: {},
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
    Axios.get('/api/admin/employees', {
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
        document.title = `Edit ${this.state.employeeData.name} | ` + process.env.REACT_APP_RESTAURANT_NAME
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
    Axios.put(`/api/admin/employees`, {
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
        this.props.changeSuccess(true, `You have successfully updated employee: ${this.state.formControlName}`)
        this.props.history.push('/admin/employees')
      })
    event.preventDefault()
  }

  render() {
    if (this.state.employeeData !== null) {
      return (
        <>
          <h1 className="h2 border-bottom pb-2">Update Employee</h1>
          <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="formControlName" className="col-sm-2">Full Name *</label>
            <div className="col-sm-5">
              <input type="text" id="formControlName" className="form-control" placeholder="John Doe" value={this.state.formControlName} onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlUsername" className="col-sm-2">Username *</label>
            <div className="col-sm-5">
              <input type="text" id="formControlUsername" className="form-control" placeholder="Username" value={this.state.formControlUsername} onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlPassword" className="col-sm-2">Password *</label>
            <div className="col-sm-5">
              <input type="password" id="formControlPassword" className="form-control" placeholder="Password" value={this.state.formControlPassword} onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlEmail" className="col-sm-2">Email *</label>
            <div className="col-sm-5">
              <input type="email" id="formControlEmail" className="form-control" placeholder="name@email.com" value={this.state.formControlEmail} onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlAddress" className="col-sm-2">Address *</label>
            <div className="col-sm-5">
              <input type="text" id="formControlAddress" className="form-control" placeholder="123 W. Palm Lane" value={this.state.formControlAddress} onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlTel" className="col-sm-2">Phone Number *</label>
            <div className="col-sm-5">
              <input type="text" id="formControlTel" className="form-control" placeholder="(123) 456 7890" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" value={this.state.formControlTel} onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlManager" className="form-label col-form-label col-sm-2">Manager</label>
            <div className="col-sm-1">
              <div className="form-check">
                <input type="checkbox" id="formControlManager" className="form-check-input position-static" checked={this.state.formControlManager} onChange={this.handleChange}/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlAdmin" className="form-label col-form-label col-sm-2">Admin</label>
            <div className="col-sm-1">
              <div className="form-check">
                <input type="checkbox" id="formControlAdmin" className="form-check-input position-static" checked={this.state.formControlAdmin} onChange={this.handleChange}/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="formControlActive" className="form-label col-form-label col-sm-2">Active</label>
            <div className="col-sm-1">
              <div className="form-check">
                <input type="checkbox" id="formControlActive" className="form-check-input position-static" checked={this.state.formControlActive} onChange={this.handleChange}/>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-1">
              <input type="button" type="submit" value="Update Employee" className="btn btn-dark" />
            </div>
          </div>
        </form>
        </>
      )
    } else if(this.state.isLoading){
      return (<></>)
    } else {
      return <div className="alert alert-danger">An error has occurred.</div>
    }
  }
}

export default withRouter(EditEmployee)
