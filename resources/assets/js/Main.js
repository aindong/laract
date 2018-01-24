import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Welcome to Laract</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About Laract</h2>
    </div>
)

const Blog = () => (
    <div>
        <h2>Laract Blog</h2>
    </div>
)

const ContactUs = () => (
    <div>
        <h2>Contact Us</h2>
    </div>
)

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>

                    <hr/>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/contact-us" component={ContactUs} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main