import Axios from 'axios'
import React, { Component } from 'react'

export default class CreateIngredient extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    document.title = "Create Ingredient | " + process.env.REACT_APP_RESTAURANT_NAME
  }

  render(){
    return (
      <>
      CreateIngredient
      </>
    )
  }

}