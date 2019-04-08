import React, { Component } from 'react';
import {Redirect} from "react-router";
import {Link} from "react-router-dom"
import './admin.css'


class Affichageusers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div  className="usermap">
               <div className="composantimg" ><img src="http://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" alt=""></img></div>
               <div className="composant"><h5>firstName : </h5><p>{this.props.user.firstName}</p></div>
               <div className="composant"><h5>lastName: </h5><p>{this.props.user.lastName}</p></div>
               <div className="composant"><h5>email : </h5><p>{this.props.user.email}</p></div>
               <div className="composant"><h5>CIN : </h5><p>{this.props.user.CIN}</p></div>
               <div className="composant"><h5>telephone: </h5><p>{this.props.user.telephone}</p></div>
               
            </div>
        );
    }
}

export default Affichageusers;
