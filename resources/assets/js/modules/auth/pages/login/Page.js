import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

// import components
import Form from './components/Form'

class Page extends Component {
    static displayName = 'LoginPage'

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        login: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            credentials: {
                email: '',
                password: '',
                remember: false
            }
        }
    }

    handleChange = (name, value) => {
        this.setState({ credentials: {...this.state.credentials, [name]: value } })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { credentials } = this.state

        this.props.login(credentials)
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        const props = {
            email: this.state.credentials.email,
            password: this.state.credentials.password,
            remember: this.state.credentials.remember,
            // errors: [],
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
        }

        return (<div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="mx-auto">
                            <span className="anchor"/>
                            <div className="card has-shadow" style={{ width: '30rem'}}>
                                <div className="card-body">
                                    <Form {...props} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

    }
}

export default Page