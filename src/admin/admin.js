// import React, { Component } from 'react';
// import Adminmenu from "./adminmenu"
// import Adminusers from "./adminusers"
// class Admin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//         <div>
//         <Adminusers/>
//         <Adminmenu/>
//         </div>
//         );
//     }
// }

// export default Admin; 
import React, { Component } from 'react';
import {Redirect} from "react-router";
import {Link} from "react-router-dom"
import Adminmenu from "./adminmenu"
import Adminusers from "./adminusers"
import './admin.css'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
        <div>
        <Link to="/adminmenu">menu</Link>
        <Link to="/adminusers">users</Link>
        <Link to="/">logout</Link>
        </div>
        );
    }
}

export default Admin;