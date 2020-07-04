import Axios from 'axios'
import Feather from 'feather-icons'
import React, { Component } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default class AdminRestaurants extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      deleteRestaurant: {}
    }
  }

  componentDidMount() {
    document.title = "Restaurants - OpenRMS Admin"
    Axios.get(`/api/admin/restaurants/`)
      .then(res => {
        this.setState({ restaurants: res.data })
      })
  }

  componentDidUpdate() {
    Feather.replace()
  }

  render() {
    const { url } = this.props.match
    const restaurantList = this.state.restaurants.map((restaurant) => {
      return (
        <tr key={ restaurant._id } id={ restaurant._id }>
          <td>{ restaurant.name }</td>
          <td>{ restaurant.id }</td>
          <td>{ restaurant.address }</td>
          <td>{ restaurant.phoneNumber }</td>
          <td className="text-center">
            <NavLink to={`${url}/restaurants/${ restaurant._id }/orders/`}>
              <span data-feather="edit"></span>
            </NavLink>
          </td>
          <td className="text-center">
            <NavLink to={`${url}/restaurants/employees/${ restaurant._id }`}>
              <span data-feather="edit"></span>
            </NavLink>
          </td>
          <td className="text-center">
            <NavLink to={`${url}/restaurants/edit/${ restaurant._id }`}>
              <span data-feather="edit"></span>
            </NavLink>
          </td>
          <td className="text-center">
            {/* <button onClick={() => this.handleDelete({ id: restaurant._id, name: restaurant.name })}> */}
              <span data-feather="trash-2"></span>
            {/* </button> */ }
          </td>
        </tr>
      )
    })

    return (
      <>
        <div className="w-100">
          <h2 className="h2 d-inline-block">Restaurants</h2>
          <NavLink to={`${url}/employees/create`}>
            <Button type="button" size="sm" variant="dark" className="float-right mt-1 align-middle">
              <span className="feather-16" data-feather="shopping-bag"></span><span className="pl-1">Create Restaurant</span>
            </Button>
          </NavLink>
        </div>
        <table className="table table-responsive-md table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th className="text-center">Orders</th>
              <th className="text-center">Employees</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {restaurantList}
          </tbody>
        </table>
      </>
    )
  }
}