import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { Switch, Route, NavLink } from 'react-router-dom'
import Feather from 'feather-icons'
import '../styles/admin/admin.scss'

import AdminNav from './admin/admin_navbar'

import AdminHome from './admin/home'
import AdminEmployees from './admin/employees'
import CreateEmployee from './admin/employees_create'
import EditEmployee from './admin/employees_edit'

export default class Admin extends Component {

  constructor(props){
    super(props)
    this.state = {
      showEmployeeAddSuccess: false
    }
    this.handleEmployeeSuccess = this.handleEmployeeSuccess.bind(this)
  }

  handleEmployeeSuccess(val){
    this.setState({ showEmployeeAddSuccess: val });
  }

  componentDidMount() {
    Feather.replace()
  }

  render() {
    const { path, url } = this.props.match

    return (
      <>
        <AdminNav {...this.props} />
        <Container fluid="true">
          <Row>
            <Col md="2" className="d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <Nav className="flex-column">
                  <Nav.Item>
                    <NavLink exact to={`${url}`} className="nav-link"><span data-feather="home"></span>Dashboard</NavLink>
                    <NavLink to={`${url}/orders`} className="nav-link"><span data-feather="archive"></span>Orders</NavLink>
                    <NavLink to={`${url}/restaurants`} className="nav-link"><span data-feather="map"></span>Restaurants</NavLink>
                    <NavLink to={{ pathname: `${url}/employees`, state: { showSuccessAlert: false } }} className="nav-link"><span data-feather="users"></span>Employees</NavLink>
                    <NavLink to={`${url}/recipes`} className="nav-link"><span data-feather="clipboard"></span>Recipes</NavLink>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Switch>
                <Route exact path={path} component={AdminHome} />
                <Route exact path={`${path}/employees`} render={(props) => <AdminEmployees 
                  {...this.props}  
                  showEmployeeAddSuccess={this.state.showEmployeeAddSuccess} 
                  changeEmployeeSuccess={this.handleEmployeeSuccess}/>} 
                />
                <Route path={`${path}/employees/create`} render={(props) => <CreateEmployee {...this.props} changeEmployeeSuccess={this.handleEmployeeSuccess}/>} />
                <Route path={`${path}/employees/edit/:id`} render={(props) => <EditEmployee {...this.props} />} />
              </Switch>
            </main>
          </Row>
        </Container>
      </>
    )
  }

}

