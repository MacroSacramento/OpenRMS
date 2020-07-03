import React, { Component } from 'react'
import { Col, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class AdminSideBar extends Component {
  render() {
    const { url } = this.props.match
    return (
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
    )
  }
}


