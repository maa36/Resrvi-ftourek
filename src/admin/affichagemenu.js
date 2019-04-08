// import React, { Component } from 'react';
// import {Redirect} from "react-router";
// import {Link} from "react-router-dom"
// class Affichagemenu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//             <div className="objmap">
//                <div className="composantimg"><img src={this.props.obj.image} alt=""></img></div>
//                <div className="composant"><h4>Plat : </h4><p>{this.props.obj.nom}</p></div>
//                <div className="composant"><h4>Prix : </h4><p>{this.props.obj.prix}</p></div>
//                <div className="composantdesc"><h4 className="h_composantdesc">Description : </h4><p>{this.props.obj.description}</p></div>
//             </div>
//         );
//     }
// }

// export default Affichagemenu;

import React, { Component } from 'react';
import {Redirect} from "react-router";
import {Link} from "react-router-dom"
import './admin.css'
class Affichagemenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="objmap">
               <div className="composantimg"><img src={this.props.obj.image} alt=""></img></div>
               <div className="composant2"><h5>Plat : </h5><p>{this.props.obj.nom}</p></div>
               <div className="composant2"><h5>Prix : </h5><p>{this.props.obj.prix}</p></div>
               <div className="composant2"><p>{this.props.obj.description}</p></div>
            </div>
        );
    }
}

export default Affichagemenu;