import React, { Component } from 'react'
import { fetchRepos } from '../../services/repos-api'

// stateful component
class ReposContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: []
        }
    }

    componentDidMount() {
        fetchRepos('vedovelli').then(res => window.console.log(res.data))
    }

    render () {
        return (
            <h1>Repos Container</h1>
        )
    }
}

export default ReposContainer