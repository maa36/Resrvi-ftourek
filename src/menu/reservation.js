import React, { Component } from "react";
import { connect } from "react-redux";
import "./menu.css";
import { Card, CardText, CardBody,Button, CardSubtitle } from "reactstrap";
import { push } from "react-router-redirect";


class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sommeTotal: 0,
      platTotal: ""
    };
  }

  componentWillMount() {
    if(this.props.total.length>1){
    let sommeFinale = this.props.total.reduce((sum, current) => sum.somme + current.somme)
    this.setState({sommeTotal: sommeFinale});}
  
  else {
    this.setState({
sommeTotal : this.props.total.somme
    })
  }
}

  retour =()=>{
    push("/")
  }





  render() {
    return (
      <div>
        <div className="affichageFacture">
          <div>
            <h4>Facture : </h4>
          </div>
          <div>
            {this.props.total.map((p, i) => (
              <Card>
                <CardBody>
                  <CardSubtitle>
                    {" "}
                    Plat : {this.state.platTotal}
                    {p.nombrePlat} {p.name}
                  </CardSubtitle>
                  <CardSubtitle> {p.Fritte} </CardSubtitle>
                  <CardSubtitle> {p.Oeuf} </CardSubtitle>
                  <CardSubtitle> {p.Légumes} </CardSubtitle>
                  <CardSubtitle> {p.Canette} </CardSubtitle>
                </CardBody>
                <CardBody>
                  <CardText>Somme : {p.somme} DT</CardText>
                </CardBody>
              </Card>
            ))}
          </div>
          <div>
          <h3>Somme total : {this.state.sommeTotal}</h3>
        <Button
              // className="buttonSignIn"
              onClick={this.retour}
            >Retour</Button>
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

const ReservationClient = connect(mapStateToProps)(Reservation);
export default ReservationClient;
