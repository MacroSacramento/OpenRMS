import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Feather from 'feather-icons'
import '../../styles/admin/admin.scss'

import AdminNav from './admin_navbar'
import AdminSideBar from './admin_sidebar'

import Home from './admin_home'

import Restaurants from './restaurants/restaurants'
import RestaurantCreate from './restaurants/restaurant_create'
import RestaurantOrderList from './restaurants/restaurant_order_list'
import RestaurantEdit from './restaurants/restaurant_edit'

import Employees from './employees/employees'
import CreateEmployee from './employees/employees_create'
import EditEmployee from './employees/employees_edit'

import CreateIngredient from './ingredients/ingredients_create'

export default class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      alert: {
        show: false,
        text: ''
      }
    }
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleSuccessClose = this.handleSuccessClose.bind(this)
    this.successAlert = this.successAlert.bind(this)
  }

  successAlert() {
    console.log(this.state.alert)
    if (this.state.alert.show === true) {
      return (
        <div className="alert alert-success alert-dismissibile fade show" role="alert">
          <button type="button" className="close" onClick={() => this.handleSuccessClose()} data-dismiss="alert">
            <span aria-hidden="true">&times;</span><span className="sr-only">Close alert</span>
          </button>
          <h4>{this.state.alert.text}</h4>
        </div>
      )
    }
  }

  handleSuccess(show, text = "") {
    this.setState({
      alert: {
        show: show,
        text: text
      }
    });
  }

  handleSuccessClose() {
    this.handleSuccess(false)
  }

  componentDidMount() {
    Feather.replace()
  }

  render() {
    const { path } = this.props.match

    return (
      <>
        <AdminNav {...this.props} />
        <div className="container-fluid">
          <div className="row">
            <AdminSideBar {...this.props} />
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
              <Switch>
                <Route exact path={path} component={Home} />

                <Route exact path={`${path}/restaurants`}
                  render={
                    (props) => <Restaurants {...this.props} />}
                />
                <Route path={`${path}/restaurants/create`}
                  render={
                    (props) => <RestaurantCreate {...this.props} />}
                />
                <Route path={`${path}/restaurants/:id/orders`}
                  render={
                    (props) => <RestaurantOrderList {...this.props} />}
                />
                <Route path={`${path}/restaurants/edit/:id`}
                  render={
                    (props) => <RestaurantEdit {...this.props} />}
                />

                <Route exact path={`${path}/employees`}
                  render={
                    (props) =>
                      <Employees
                        {...this.props}
                        employeeAlert={this.state.employeeAlert}
                        changeSuccess={this.handleSuccess}
                        showSuccess={this.successAlert}
                      />}
                />
                <Route path={`${path}/employees/create`}
                  render={
                    (props) =>
                      <CreateEmployee
                        {...this.props}
                        changeSuccess={this.handleSuccess}
                      />}
                />
                <Route path={`${path}/employees/edit/:id`}
                  render={
                    (props) =>
                      <EditEmployee
                        {...this.props}
                        changeSuccess={this.handleSuccess}
                      />}
                />

                <Route path={`${path}/ingredients/create`}
                  render={
                    (props) =>
                      <CreateIngredient
                        {...this.props} />}
                />

              </Switch>
            </main>
          </div>
        </div>
      </>
    )
  }

}

