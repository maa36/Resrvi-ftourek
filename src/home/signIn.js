import React, { Component } from "react";
import { push } from "react-router-redirect";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const axios = require("axios");

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: "principale"
    };
  }

  ChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  ChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  ConfirmeCompte = event => {
    event.preventDefault();
    console.log("hey");

    axios
      .post(
        "http://localhost:5000/login/" +
          this.state.email +
          "/" +
          this.state.password,
        {}
      )
      .then(function(response) {
        if (response.data.length === 1) {
          const result = response.data[0];

          if (result.role != "admin") {
            push(
              "/menu/" +
                result.email +
                "/" +
                result.firstName +
                "/" +
                result.lastName
            );
          } else {
            push("/admin");
          }
        } else {
          alert("verifier votre compte");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="sign-in">
        <div className="bloc-formulaire">
          <h3 className="mr-sm-2">Se Connecter</h3>

          <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Email :
              </Label>
              <Input
                type="email"
                onChange={this.ChangeEmail}
                name="email"
                id="exampleEmail"
                placeholder=""
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">
                Mot de passe :
              </Label>
              <Input
                type="password"
                onChange={this.ChangePassword}
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            <Button className="buttonSignIn" onClick={this.ConfirmeCompte}>
              Connecter
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignIn;
