import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {connect} from 'react-redux'
import './menu.css'
class Reserver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      NbrPlat: 0,
      somme: 0 ,
      choix : '',
      choixOeuf : '',
      choixLégumes : '',
      choixFrittes : '',
      choixCanette : ''
    };

    console.log(props);
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  changeNbrePlat = event => {
    this.setState({
      NbrPlat: event.target.value
    });
  };
  incrementer = () => {
    this.setState({
      NbrPlat: this.state.NbrPlat + 1,
      somme: (this.state.NbrPlat + 1) *  Number(this.props.prix.substring(0,6)),
      choix :   (this.state.NbrPlat + 1) + ' ' + this.props.makla
    });
  };
  decrementer = () => {
    let nombre = this.state.NbrPlat;
    if (nombre > 0) {
      this.setState({
        NbrPlat:nombre - 1,
        somme: (this.state.NbrPlat - 1) * Number(this.props.prix.substring(0,6)),
        choix :   (this.state.NbrPlat -1) + ' ' + this.props.makla
      });
    }
  };

  checkOeuf =(e)=>{
  
    let chek=e.target.checked
    if(chek){
      this.setState({
        somme : this.state.somme + 0.5,
        choixOeuf :     '  + Oeuf'

      })
    }
    else {
      this.setState({
        somme : this.state.somme - 0.5,
        choixOeuf :   ' '
      })

    }
  }
  checkLegumes =(e)=>{
  
    let chek=e.target.checked
    if(chek){
      this.setState({
        somme : this.state.somme + 0.5,
        choixLégumes :  '  + legumes'

      })
    }
    else {
      this.setState({
        somme : this.state.somme - 0.5,
        choixLégumes :    ' '
      })

    }
  }
  checkFritte =(e)=>{
    console.log("hay")
    let chek=e.target.checked
    if(chek){
      this.setState({
        somme : this.state.somme + 1,
        choixFrittes :    '+ frites'

      })
    }
    else {
      this.setState({
        somme : this.state.somme - 1,
        choixFrittes :    ' '
      })

    }
  }
  checkCanette =(e)=>{
   
    let chek=e.target.checked
    if(chek){
      this.setState({
        somme : this.state.somme + 1.5,
        choixCanette :    ' + Canette '

      })
    }
    else {
      this.setState({
        somme : this.state.somme - 1.5,
        choixCanette :   ' '
      })

    }
  }
  initial =()=>{
    this.setState({
      NbrPlat :0,
      somme :0
    })
  }

  render() {
    return (
      <div>
        <Button color="danger" className="reserver" onClick={this.toggle}>
          Acheter
        </Button>
        <Modal className="ModalReserve"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="ModalNom" toggle={this.toggle}>
            Nom du Plat : {this.props.makla}{" "}
          </ModalHeader>
          <ModalBody>
            <h5>Prix : {this.props.prix}</h5>
            <h5>Nombre de plats</h5>
            <div >
              <i className="fas fa-plus-square" onClick={this.incrementer} />
              <input className="InputNbrePlat"
                type="text"
                onChange={this.changeNbrePlat}
                value={this.state.NbrPlat}
              />
              <i className="fas fa-minus-circle" onClick={this.decrementer} />
            </div>
            <h5>Les supplement</h5>
            <input type="checkbox" name="vehicle" onChange={this.checkOeuf} value="Bike"/> Oeuf : 0.5 DT<br/>
            <input type="checkbox" name="vehicle" value="Bike" onChange={this.checkLegumes} />Legumes : 0.5 DT<br/>
            <input type="checkbox" name="vehicle" value="Bike" onChange={this.checkFritte}/> Frite : 1 DT<br/>
            <input type="checkbox" name="vehicle" value="Bike" onChange={this.checkCanette}/> Canette : 1.5 DT<br/>
            <h5>Somme total : {this.state.somme} DT </h5>
            
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>{this.toggle();this.initial()}}>
              Fermer
            </Button>{" "}
            <Button color="secondary" onClick={() =>  {this.toggle();this.props.addResrvation( {"name" : this.props.makla,
          "id" : this.props.id ,
          "nombrePlat" : this.state.NbrPlat,
          "somme" : this.state.somme ,
          "Fritte" : this.state.choixFrittes, "Oeuf" : this.state.choixOeuf,"Légumes" : this.state.choixLégumes,"Canette" : this.state.choixCanette, } )}}>
              Confirmer
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addResrvation: newValue => {
      dispatch({ type: "CHANGE_RESRVATION", nouveauxRepas: newValue });
    },
    
  };
};


const ReserverPlat= connect(null,mapDispatchToProps)(Reserver)

export default ReserverPlat;