import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AdminSideBar extends Component {
  render() {
    const { url } = this.props.match
    return (
      <>
        <div className="d-none d-md-block bg-light sidebar col-md-2 sidebar-sticky flex-column nav-item">
          <NavLink exact to={`${url}`} className="nav-link"><span data-feather="home"></span>Dashboard</NavLink>
          <NavLink to={`${url}/orders`} className="nav-link"><span data-feather="archive"></span>Orders</NavLink>
          <NavLink to={`${url}/restaurants`} className="nav-link"><span data-feather="map"></span>Restaurants</NavLink>
          <NavLink to={{ pathname: `${url}/employees`, state: { showSuccessAlert: false } }} className="nav-link"><span data-feather="users"></span>Employees</NavLink>
          <NavLink to={`${url}/recipes`} className="nav-link"><span data-feather="clipboard"></span>Recipes</NavLink>
          <NavLink to={`${url}/ingredients`} className="nav-link"><span data-feather="clipboard"></span>Ingredients</NavLink>˝
      </div>
        
      </>
    )
  }
}


