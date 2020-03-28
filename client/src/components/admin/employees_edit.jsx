import React, { Component } from 'react'

export default class EditEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <h1>hi</h1>
        )
    }

}