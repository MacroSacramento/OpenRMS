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
      .then(res => document.title = `${res.data.name}` + process.env.REACT_APP_RESTAURANT_TITLE)
    Axios.post('')
  }

  render() {
    return (
      <>
      edit
      </>
    )
  }

}

export default withRouter(RestaurantEdit)