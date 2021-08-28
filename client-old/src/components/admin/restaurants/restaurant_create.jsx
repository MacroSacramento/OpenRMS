import axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AdminAlert from '../admin_alert'

class RestaurantCreate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formControlID: '',
      formControlName: '',
      formControlAddress: '',
      formControlPhoneNumber: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    document.title = 'Create Restaurant | ' + process.env.REACT_APP_RESTAURANT_NAME
  }

  handleSubmit(event) {
    axios.post(`/api/admin/restaurants`, {
      id: this.state.formControlID,
      name: this.state.formControlName,
      phoneNumber: this.state.formControlTel,
      address: this.state.formControlAddress
    })
      .then((res) => {
        this.props.changeEmployeeSuccess(true, "You have successfully added a new Employee")
        this.props.history.push('/admin/restaurants')
      })
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <>
        <h1 className="h2 border-bottom pb-2">Create Restaurant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="formControlID" className="col-sm-2">Nickname *</label>
            <div className="col-sm-5">
              <input type="number" id="formControlID" className="form-control" placeholder="000000" min="000000" max="999999" value={this.state.formControlID} onChange={this.handleChange} required />
            </div>
          </div>
        </form>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="formControlName" className="col-sm-2">Nickname *</label>
            <div className="col-sm-5">
              <input type="text" id="formControlName" className="form-control" placeholder="John Doe" value={this.state.formControlName} onChange={this.handleChange} required />
            </div>
          </div>
        </form>

        <div className="form-group row">
          <label htmlFor="formControlAddress" className="col-sm-2">Address *</label>
          <div className="col-sm-5">
            <input type="text" id="formControlAddress" className="form-control" placeholder="123 W. Palm Lane" required value={this.state.formControlAddress} onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="formControlTel" className="col-sm-2">Phone Number *</label>
          <div className="col-sm-5">
            <input type="text" id="formControlTel" className="form-control" placeholder="(123) 456 7890" required pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" value={this.state.formControlTel} onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-1">
            <input type="button" type="submit" value="Create" className="btn btn-dark" />
          </div>
        </div>
      </>
    )
  }

}

export default withRouter(RestaurantCreate)