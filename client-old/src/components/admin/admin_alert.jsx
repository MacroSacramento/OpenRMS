import React, { Component } from 'react'

export default class AdminAlert extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: this.props.show,
      text: this.props.text
    }
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleSuccessClose = this.handleSuccessClose.bind(this)
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      show: nextProps.show,
      text: nextProps.text
    }
  }

  render() {
    console.log(this.state)
    if (this.state.show === true) {
      return (
        <div className="alert alert-success alert-dismissibile fade show" role="alert">
          <button type="button" className="close" onClick={() => this.handleSuccessClose()} data-dismiss="alert">
            <span aria-hidden="true">&times;</span><span className="sr-only">Close alert</span>
          </button>
          <h4>{this.state.text}</h4>
        </div>
      )
    } else {
      return "";
    }
  }

  handleSuccess(show, text = "") {
    this.setState({
        show: show,
        text: text
    });
  }

  handleSuccessClose() {
    this.handleSuccess(false)
  }

}