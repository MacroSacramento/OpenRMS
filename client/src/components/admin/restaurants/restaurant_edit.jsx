import Axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class RestaurantEdit extends Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {
    const { id } = this.props.match.params
    Axios.get('/api/admin/restaurants', { params: { _id: id } })
      .then(res => console.log(res.data.orders))
    Axios.post('')
  }

  render() {
    return (
      <>
      </>
    )
  }

}

export default withRouter(RestaurantEdit)