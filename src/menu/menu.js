import React, { Component } from "react";
import { push } from "react-router-redirect";
import "./menu.css";
import {connect} from "react-redux"
 import Reserver from "./reserver";
import axios from "axios"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      redirect: false,
      search: ""
    };
  }
  componentDidMount = () => {
    
    fetch("http://localhost:5000/affichage")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            menu: result
          });
        },
        err => {
          console.log("err");
        }
      );
  };

  

  SearchPlat = event => {
    this.setState({
      search: event.target.value
    });
    
  };
  Déconnexion =()=>{
    push("/")
  }
  Confirmation =()=>{
    push("/reservation")
    console.log(this.props.total)
    axios.post('http://localhost:5000/reservation', this.props.total)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    }
  
  // console.log(props.match.params.mail)
  render() {
    return (
      <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="navbar-brand" href="#">
            <i className="fas fa-user" /> {this.props.match.params.firstName}{" "}
            {this.props.match.params.lastName}
          </a>
          </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={this.Déconnexion}>
                  Déconnexion<span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                onChange={this.SearchPlat}
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>

        <div className="PrincipaleBloc">
          <div className="ListeMenu">
            {this.state.menu
              .filter(el =>
                el.nom.toLowerCase().includes(this.state.search.toLowerCase())
              )
              .map((p, i) => (
                <div className="CardMenu">
      <Card className="cardmenu">
        <CardImg className="imagemenu" src={p.image} alt="makla" />
        <CardBody>
          <CardTitle>nom du plat : {p.nom}</CardTitle>
          <CardSubtitle>Prix : {p.prix} </CardSubtitle>
          <CardText>{p.description}</CardText>
          <Reserver  id={p._id} prix={p.prix} makla={p.nom} />
        </CardBody>
      </Card>
      </div>
                

              ))}
          </div>
        <div className="LinkConfirmation">
        <button class="btn btn-primary" type="submit" onClick={this.Confirmation}>confirmer</button>
        {/* <Link to="/reservation" >confirmer </Link> */}

        </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state
  };
};
const menu = connect(mapStateToProps)(Menu);

export default menu;
