import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Page extends Component {
    static displayName = "HomePage"
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <h2>About Laract</h2>
            </div>
        )
    }
}

export default Page