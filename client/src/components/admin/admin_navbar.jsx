import React, { Component } from "react"
import { Navbar, Nav, Form } from 'react-bootstrap'

export default class AdminNav extends Component {
    render() {
        return (
            <Navbar className="flex-md-nowrap p-0 shadow" expand="false" variant="dark" sticky="top" fixed="top" bg="dark">
                <Navbar.Brand className="col-sm-3 col-md-2 mr-0" href="#">OpenRMS</Navbar.Brand>
                <Form.Control type="text" className="form-control-dark w-100" placeholder="Search" />
                <Nav className="px-3">
                    <Nav.Item className="text-nowrap">
                        <Nav.Link href="#">Sign Out</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}