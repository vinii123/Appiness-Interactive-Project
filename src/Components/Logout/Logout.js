import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        console.log("tokenremove");
    }
    render() {
        return (
            <div>
                <h1>Your are successfully logged out.</h1>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        )
    }
}
