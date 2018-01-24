import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const containerStyle = {
    paddingTop: '3.5rem',
}

class Main extends Component {
    static displayName = 'MainContainer'
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        // user: PropTypes.object.isRequired,
        children: PropTypes.node.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    componentWillMount() {
        const { isAuthenticated, user } = this.props

        if (isAuthenticated && !user.id) {
            // this.props.dispatch(fetchUser())
        }

    }

    render() {
        return (
            <div style={containerStyle}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>

                <hr/>

                <main style={{ minHeight: '100vh'}}>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        // user: state.user,
    }
}

export default connect(mapStateToProps)(Main)