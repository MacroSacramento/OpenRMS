import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import Feather from 'feather-icons'
import '../../styles/admin/admin.scss'

import AdminNav from './admin_navbar'
import AdminSideBar from './admin_sidebar'

import Home from './admin_home'

import Restaurants from './restaurants/restaurants'
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
      employeeAlert: {
        show: false,
        text: ''
      }
    }
    this.handleEmployeeSuccess = this.handleEmployeeSuccess.bind(this)
  }

  handleEmployeeSuccess(show, text = "") {
    this.setState({
      employeeAlert: {
        show: show,
        text: text
      }
    });
  }

  componentDidMount() {
    Feather.replace()
  }

  render() {
    const { path } = this.props.match

    return (
      <>
        <AdminNav {...this.props} />
        <Container fluid="true">
          <Row>
            <AdminSideBar {...this.props} />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Switch>
                <Route exact path={path} component={Home} />

                <Route exact path={`${path}/restaurants`}
                  render={
                    (props) => <Restaurants {...this.props} />}
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
                        changeEmployeeSuccess={this.handleEmployeeSuccess}
                      />}
                />
                <Route path={`${path}/employees/create`}
                  render={
                    (props) =>
                      <CreateEmployee
                        {...this.props}
                        changeEmployeeSuccess={this.handleEmployeeSuccess}
                      />}
                />
                <Route path={`${path}/employees/edit/:id`}
                  render={
                    (props) =>
                      <EditEmployee
                        {...this.props}
                        changeEmployeeSuccess={this.handleEmployeeSuccess}
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
          </Row>
        </Container>
      </>
    )
  }

}

