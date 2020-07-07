import React, { Component } from 'react'

export default class Home extends Component {

  componentDidMount() {
    document.title = 'Home' + process.env.REACT_APP_RESTAURANT_TITLE
  }

  render() {
    return(
      <h1 className="h2">Home</h1>
    )
  }

}