import React, { Component } from 'react'
import { Container, Row, Col, Navbar, Nav, Form } from 'react-bootstrap'
import { Switch, Route, NavLink } from 'react-router-dom'
import Feather from 'feather-icons'
import '../styles/admin/admin.scss'

import AdminHome from './admin/home'
import AdminEmployees from './admin/employees'
import CreateEmployee from './admin/employees_create'

export default class Admin extends Component {

  componentDidMount() {
    Feather.replace()
  }

  render() {
    const { path, url } = this.props.match

    return (
      <>
        <Navbar className="flex-md-nowrap p-0 shadow" expand="false" variant="dark" sticky="top" fixed="top" bg="dark">
          <Navbar.Brand className="col-sm-3 col-md-2 mr-0" href="#">OpenRMS</Navbar.Brand>
          <Form.Control type="text" className="form-control-dark w-100" placeholder="Search" />
          <Nav className="px-3">
            <Nav.Item className="text-nowrap">
              <Nav.Link href="#">Sign Out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Container fluid="true">
          <Row>
            <Col md="2" className="d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <Nav className="flex-column">
                  <Nav.Item>
                    <NavLink exact to={`${url}`} className="nav-link"><span data-feather="home"></span>Dashboard</NavLink>
                    <NavLink to={`${url}/orders`} className="nav-link"><span data-feather="archive"></span>Orders</NavLink>
                    <NavLink to={`${url}/restaurants`} className="nav-link"><span data-feather="map"></span>Restaurants</NavLink>
                    <NavLink to={`${url}/employees`} className="nav-link"><span data-feather="users"></span>Employees</NavLink>
                    <NavLink to={`${url}/recipes`} className="nav-link"><span data-feather="clipboard"></span>Recipes</NavLink>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <Switch>
                <Route exact path={path} component={AdminHome} />
                <Route exact path={`${path}/employees`} render={(props) => <AdminEmployees {...this.props}/>} />
                <Route path={`${path}/employees/create`} render={(props) => <CreateEmployee {...this.props}/>} />
                <Route path={`${path}/employees/edit/:id`} />
              </Switch>
            </main>
          </Row>
        </Container>
      </>
    )
  }

}

