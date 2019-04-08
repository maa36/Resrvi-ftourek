import React from "react";
// import ReactDOM from "react-dom";
import InputMask from "react-input-mask";
import axios from "axios";
import "./home.css";
import { Input, Button } from "reactstrap";
import { push } from "react-router-redirect";


class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPerson: {
        firstName: "",
        lastName: "",
        email: "",
        CIN: "",
        telephone: "",
        password: ""
      }
    };
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeCIN = this.changeCIN.bind(this);
    this.changeTelephone = this.changeTelephone.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.send = this.send.bind(this);
  }
  send(event, newPerson) {
    let tel = newPerson.telephone;
    let mytel =
      tel.substring(1, 4) +
      tel.substring(5, 7) +
      tel.substring(8, 11) +
      tel.substring(12, 15);
    if (!/^[a-z]+$/i.test(newPerson.firstName)) {
      alert("put a correct first name");
      event.preventDefault();
    } else if (!/^[a-z]+$/i.test(newPerson.lastName)) {
      alert("put a correct last name");
      event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(newPerson.email)) {
      alert("put a correct email");
      event.preventDefault();
    } else if (newPerson.CIN.length !== 8 || !/^[0-9]+$/i.test(newPerson.CIN)) {
      alert("put a correct CIN");
      event.preventDefault();
    } else if (!/^[0-9]+$/i.test(mytel)) {
      alert("put a correct telephone number");
      event.preventDefault();
    } else {
      axios
        .post("http://localhost:5000/inscrit", newPerson)
        .then(res => console.log(res.data),
        alert("votre inscrit est valide"))
        
        .catch(console.log("error"));
    }
  }
  changeFirstName = newFirstName => {
    let newPersoncopy = Object.assign({}, this.state.newPerson);
    newPersoncopy.firstName = newFirstName;
    this.setState({ newPerson: newPersoncopy });
  };
  changeLastName(newLastName) {
    let newPersoncopy = Object.assign({}, this.state.newPerson);
    newPersoncopy.lastName = newLastName;
    this.setState({ newPerson: newPersoncopy });
  }
  changeEmail(newEmail) {
    let newPersoncopy = Object.assign({}, this.state.newPerson);
    newPersoncopy.email = newEmail;
    this.setState({ newPerson: newPersoncopy });
  }
  changeCIN(newCIN) {
    console.log(newCIN.length);
    let newPersoncopy = Object.assign({}, this.state.newPerson);
    newPersoncopy.CIN = newCIN;
    this.setState({ newPerson: newPersoncopy });
  }
  changeTelephone(newTelephone) {
    let newPersoncopy = Object.assign({}, this.state.newPerson);
    newPersoncopy.telephone = newTelephone;
    this.setState({ newPerson: newPersoncopy });
  }
  changePassword(newPassword) {
    let newPersoncopy = Object.assign({}, this.state.newPerson);
    newPersoncopy.password = newPassword;
    this.setState({ newPerson: newPersoncopy });
  }
  render() {
    return (
      <div className="inscription mr-sm-2">
        <div className="bloc-formulaire inscriptionForm">
          <h3>inscription</h3>
          <form action="">
            <label for="firstName">Prenom :</label>
            <Input
              type="text"
              id="firstName"
              // placeholder="put your first name here"
              onChange={event => {
                this.changeFirstName(event.target.value);
              }}
              value={this.state.firstName}
              required
            />
            <label for="lastName">Nom :</label>
            <Input
              type="text"
              id="lastName"
              // placeholder="put your last name here"
              onChange={event => {
                this.changeLastName(event.target.value);
              }}
              value={this.state.lastName}
            />
            <label for="email">Email :</label>
            <Input
              type="text"
              id="email"
              // placeholder="put your adress mail here"
              onChange={event => {
                this.changeEmail(event.target.value);
              }}
              value={this.state.email}
            />
            <label for="CIN">CIN :</label>
            <Input
              id="CIN"
              // placeholder="put your CIN here"
              onChange={event => {
                this.changeCIN(event.target.value);
              }}
              value={this.state.CIN}
            />
            <label for="telephone">Telephone :</label>
            <InputMask
              className="inputMusk"
              mask="+216 ** *** ***"
              id="telephone"
              // placeholder="put your telephone here"
              onChange={event => {
                this.changeTelephone(event.target.value);
              }}
              value={this.state.telephone}
            />
            <label for="password">Mot de passe :</label>
            <Input
              type="password"
              id="password"
              // placeholder="put your password here"
              onChange={event => {
                this.changePassword(event.target.value);
              }}
              value={this.state.password}
            />
            <Button
              className="buttonSignIn"
              onClick={event => {
                this.send(event, this.state.newPerson);
              }}
            >
              S'inscrire
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
export default Inscription;
