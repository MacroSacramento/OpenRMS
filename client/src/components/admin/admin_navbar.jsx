import React, { Component } from "react"

export default class AdminNav extends Component {
  render() {
    return (
      <nav className="flex-md-nowrap p-0 shadow navbar navbar-expand-false navbar-dark bg-dark sticky-top fixed-top">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/admin">{process.env.REACT_APP_RESTAURANT_NAME}</a>
        <input className="form-control-dark w-10 form-control" placeholder="Search" />
        <div className="px-3 navbar-nav text-nowrap nav-item">
          <a className="nav-link" href="#" role="button">Sign Out</a>
        </div>
      </nav>
    )
  }
}