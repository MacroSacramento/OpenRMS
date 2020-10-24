import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

class RestaurantOrderList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurantData: {},
      orders: []
    }
  }

  componentDidMount() {
    console.log(this.props.match.params)
    Axios.get(`/api/admin/restaurants`,
      {
        params: { _id: this.props.match.params.id }
      })
      .then((res) => {
        document.title = `${res.data.name} Orders | ` + process.env.REACT_APP_RESTAURANT_NAME
        this.setState({ orders: res.data.orders })
      })
  }

  render() {
    return (
      <>
      </>
    )
  }

}

export default withRouter(RestaurantOrderList)
