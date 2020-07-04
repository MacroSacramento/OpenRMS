import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import Feather from 'feather-icons'
import '../../styles/admin/admin.scss'

import AdminNavBar from './admin_navbar'
import AdminSideBar from './admin_sidebar'

import AdminHome from './admin_home'
import AdminRestaurants from './restaurants/restaurants'
import AdminRestaurantOrderList from './restaurants/restaurant_order_list'
import AdminEmployees from './employees/employees'
import CreateEmployee from './employees/employees_create'
import EditEmployee from './employees/employees_edit'

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
        <AdminNavBar {...this.props} />
        <Container fluid="true">
          <Row>
            <AdminSideBar {...this.props} />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Switch>
                <Route exact path={path} component={AdminHome} />

                <Route exact path={`${path}/restaurants`}
                  render={
                    (props) => <AdminRestaurants {...this.props} />}
                />
                <Route path={`${path}/restaurants/:id/orders`}
                  render={
                    (props) => <AdminRestaurantOrderList {...this.props} />}
                />

                <Route exact path={`${path}/employees`}
                  render={
                    (props) =>
                      <AdminEmployees
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

              </Switch>
            </main>
          </Row>
        </Container>
      </>
    )
  }

}

