import React, { Component } from 'react'

export default class AdminAlert extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      alert: {
        show: false,
        text: ''
      }
    }
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleSuccessClose = this.handleSuccessClose.bind(this)
    this.successAlert = this.successAlert.bind(this)
  }

  successAlert() {
    console.log(this.state.alert)
    if (this.state.alert.show === true) {
      return (
        <div className="alert alert-success alert-dismissibile fade show" role="alert">
          <button type="button" className="close" onClick={() => this.handleSuccessClose()} data-dismiss="alert">
            <span aria-hidden="true">&times;</span><span className="sr-only">Close alert</span>
          </button>
          <h4>{this.state.alert.text}</h4>
        </div>
      )
    }
  }

  handleSuccess(show, text = "") {
    this.setState({
      alert: {
        show: show,
        text: text
      }
    });
  }

  handleSuccessClose() {
    this.handleSuccess(false)
  }

}