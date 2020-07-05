import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

class AdminRestaurantOrderList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurantData: {},
      orders: []
    }
  }

  componentDidMount() {
    console.log(this.props.match.params)
    Axios.get(`/api/admin/restaurants`, {
      params: { _id: this.props.match.params.id }
    })
      .then((res) => console.log(res.data))
  }

  render() {
    return (
      <>
      </>
    )
  }

}

export default withRouter(AdminRestaurantOrderList)
