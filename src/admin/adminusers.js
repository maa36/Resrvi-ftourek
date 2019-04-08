// import React from 'react'
// import InputMask from "react-input-mask"
// import axios from "axios"
// import Affichageusers from "./affichageusers"


// class Adminusers extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             redirect: "main",
//             newPerson: {
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 CIN: "",
//                 telephone: "",
//                 password: ""
//             },
//             Persons:[]
//         };
//         this.changeFirstName = this.changeFirstName.bind(this);
//         this.changeLastName = this.changeLastName.bind(this);
//         this.changeEmail = this.changeEmail.bind(this);
//         this.changeCIN = this.changeCIN.bind(this);
//         this.changeTelephone = this.changeTelephone.bind(this);
//         this.changePassword = this.changePassword.bind(this);
//         this.send = this.send.bind(this);
//         /*this.affiche=this.affiche.bind(this);*/

//     }
//     delete(event, newPerson) {

//         let first = newPerson.firstName;
//         let fir = "";
//         for (let i = 0; i < first.length; i++) {
//             if (!(first.charCodeAt(i) === 32))
//                 fir = fir + first[i];
//         }

//         let last = newPerson.lastName;
//         let las = "";
//         for (let i = 0; i < last.length; i++) {
//             if (!(last.charCodeAt(i) === 32))
//                 las = las + last[i];
//         }

//         if (!/^[a-z]+$/i.test(newPerson.fir)) {
//             alert("put a correct first name")
//             event.preventDefault();
//         }
//         else if (!/^[a-z]+$/i.test(newPerson.lastName)) {
//             alert("put a correct last name")
//             event.preventDefault();
//         }

//         else {
//             alert("delete plat reussi!")
//             axios.post("http://localhost:5000/deleteperson", newPerson)
//                 .then(this.setState({ redirect: "suppression reussie" }))
//                 .catch(console.log("error"))

//         }
//     };
//     send(event, newPerson) {
//         let tel = newPerson.telephone;
//         let mytel = tel.substring(1, 4) + tel.substring(5, 7) + tel.substring(8, 11) + tel.substring(12, 15);

//         let first = newPerson.firstName;
//         let fir = "";
//         for (let i = 0; i < first.length; i++) {
//             if (!(first.charCodeAt(i) === 32))
//                 fir = fir + first[i];
//         }

//         let last = newPerson.lastName;
//         let las = "";
//         for (let i = 0; i < last.length; i++) {
//             if (!(last.charCodeAt(i) === 32))
//                 las = las + last[i];
//         }

//         if (!/^[a-z]+$/i.test(newPerson.fir)) {
//             alert("put a correct first name")
//             event.preventDefault();
//         }
//         else if (!/^[a-z]+$/i.test(newPerson.lastName)) {
//             alert("put a correct last name")
//             event.preventDefault();
//         }
//         else if (!/\S+@\S+\.\S+/.test(newPerson.email)) {
//             alert("put a correct email")
//             event.preventDefault();
//         }
//         else if (newPerson.CIN.length !== 8 || !/^[0-9]+$/i.test(newPerson.CIN)) {
//             alert("put a correct CIN")
//             event.preventDefault();
//         }
//         else if (!/^[0-9]+$/i.test(mytel)) {
//             alert("put a correct telephone number")
//             event.preventDefault();
//         }
//         else {
//             event.preventDefault();
//             alert("inscription reussie !")
//             axios.post("http://localhost:5000/inscrit", newPerson)
//                 .then(this.setState({ redirect: "inscription reussie" }))
//                 .catch(console.log("error"))
//         }
        
          
//     };

//     update(event, newPerson) {
//         let tel = newPerson.telephone;
//         let mytel = tel.substring(1, 4) + tel.substring(5, 7) + tel.substring(8, 11) + tel.substring(12, 15);

//         let first = newPerson.firstName;
//         let fir = "";
//         for (let i = 0; i < first.length; i++) {
//             if (!(first.charCodeAt(i) === 32))
//                 fir = fir + first[i];
//         }

//         let last = newPerson.lastName;
//         let las = "";
//         for (let i = 0; i < last.length; i++) {
//             if (!(last.charCodeAt(i) === 32))
//                 las = las + last[i];
//         }

//         if (!/^[a-z]+$/i.test(newPerson.fir)) {
//             alert("put a correct first name")
//             event.preventDefault();
//         }
//         else if (!/^[a-z]+$/i.test(newPerson.lastName)) {
//             alert("put a correct last name")
//             event.preventDefault();
//         }
//         else if (!/\S+@\S+\.\S+/.test(newPerson.email)) {
//             alert("put a correct email")
//             event.preventDefault();
//         }
//         else if (newPerson.CIN.length !== 8 || !/^[0-9]+$/i.test(newPerson.CIN)) {
//             alert("put a correct CIN")
//             event.preventDefault();
//         }
//         else if (!/^[0-9]+$/i.test(mytel)) {
//             alert("put a correct telephone number")
//             event.preventDefault();
//         }
       
     

//         else {
//         alert("update du plat reussi!")
//         axios.post("http://localhost:5000/updateperson", newPerson)
//             .then(this.setState({ redirect: "update reussi" }))
//             .catch(console.log("error"))

//         }
//     };

//     changeFirstName(newFirstName) {
//         let newPersoncopy = Object.assign({}, this.state.newPerson);
//         newPersoncopy.firstName = newFirstName;
//         this.setState({ newPerson: newPersoncopy });
//     }
//     changeLastName(newLastName) {
//         let newPersoncopy = Object.assign({}, this.state.newPerson);
//         newPersoncopy.lastName = newLastName;
//         this.setState({ newPerson: newPersoncopy });
//     }
//     changeEmail(newEmail) {
//         let newPersoncopy = Object.assign({}, this.state.newPerson);
//         newPersoncopy.email = newEmail;
//         this.setState({ newPerson: newPersoncopy });
//     }
//     changeCIN(newCIN) {
//         let newPersoncopy = Object.assign({}, this.state.newPerson);
//         newPersoncopy.CIN = newCIN;
//         this.setState({ newPerson: newPersoncopy });
//     }
//     changeTelephone(newTelephone) {
//         let newPersoncopy = Object.assign({}, this.state.newPerson);
//         newPersoncopy.telephone = newTelephone;
//         this.setState({ newPerson: newPersoncopy });
//     }
//     changePassword(newPassword) {
//         let newPersoncopy = Object.assign({}, this.state.newPerson);
//         newPersoncopy.password = newPassword;
//         this.setState({ newPerson: newPersoncopy });
//     }

//     affiche(){
//     return this.state.Persons.map(function(Object,i){
//     return <Affichageusers user={Object} key={i} />;
//     })
//     }
//     componentDidMount = () => {
    
//         fetch("http://localhost:5000/affichageusers")
//           .then(res => res.json())
//           .then(
              
//             result => {
//               console.log(result);
//               this.setState({
//                 Persons: result
//               });
//             },
//             err => {
//               console.log("err");
//             }
//           );
//       };
    
//     // componentDidMount() {
//     //     fetch("http://localhost:5000/affichageusers)
//     //   .then(res => res.json())
//     //   .then(
//     //     result => {
//     //       console.log(result);
//     //       this.setState({
//     //         Persons: result
//     //       });
//     //     },
//     //     err => {
//     //       console.log("err");
//     //     })
//     // }
//     // //   );
//     //     axios.get("http://localhost:5000/affichageusers")
//     //         .then(response =>
//     //             {let list =response.data;
//     //             this.setState({ Persons: list });
//     //             console.log(this.state.Persons)}
//     //         )
//     //         .catch(console.log("error"))
//     render() {
//         /*let redirect=this.state.redirect
//         if (redirect==="inscription reussie")
//         {
//         return (<Redirect to="/testins" />)
//         }
//         else if (redirect==="main")*/
//         return (
//             <div className="all">
//                 <div className="auth">
//                 <div className="auth">
//                     <div className="inscription">
//                         <h3>S'inscrire</h3>
//                         <form action="">
//                             <label for="firstName">firstName</label>
//                             <input type="text" id="firstName" placeholder="put your first name here"
//                                 onChange={(event) => { this.changeFirstName(event.target.value) }} value={this.state.firstName} />
//                             <label for="lastName">lastName</label>
//                             <input type="text" id="lastName" placeholder="put your last name here"
//                                 onChange={(event) => { this.changeLastName(event.target.value) }} value={this.state.lastName} />
//                             <label for="email">email</label>
//                             <input type="text" id="email" placeholder="put your adress mail here"
//                                 onChange={(event) => { this.changeEmail(event.target.value) }} value={this.state.email} />
//                             <label for="CIN">carte d'identité nationale</label>
//                             <input id="CIN" placeholder="put your CIN here"
//                                 onChange={(event) => { this.changeCIN(event.target.value) }} value={this.state.CIN} />
//                             <label for="telephone">telephone</label>
//                             <InputMask mask="+216 ** *** ***" id="telephone" placeholder="put your telephone here"
//                                 onChange={(event) => { this.changeTelephone(event.target.value) }} value={this.state.telephone} />
//                             <label for="password">password</label>
//                             <input type="password" id="password" placeholder="put your password here"
//                                 onChange={(event) => { this.changePassword(event.target.value) }} value={this.state.password} />

//                             <button onClick={(event) => { this.send(event, this.state.newPerson) }}>Ajouter un utilisateur</button>
//                             <button onClick={(event) => { this.delete(event, this.state.newPerson) }}>Supprimer un utilisateur</button>
//                             <button onClick={(event) => { this.update(event, this.state.newPerson) }}>Modifier un utilisateur</button>
//                         </form>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="affichage">
//                 {this.affiche()}
//                 </div>
//             </div>
//         );
//     }
// }
// export default Adminusers; 
import React from 'react'
import ReactDOM from "react-dom";
import InputMask from "react-input-mask"
import axios from "axios"
import Affichageusers from "./affichageusers"
import { Link } from "react-router-dom"
import { Redirect } from "react-router"
import { Input, Button } from "reactstrap"
import './admin.css'


class Adminusers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "main",
            newPerson: {
                firstName: "",
                lastName: "",
                email: "",
                CIN: "",
                telephone: "",
                password: ""
            },
            Persons: [],
            search: ""
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeCIN = this.changeCIN.bind(this);
        this.changeTelephone = this.changeTelephone.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.send = this.send.bind(this);
        /*this.affiche=this.affiche.bind(this);*/

    }
    delete(event, newPerson) {

        let first = newPerson.firstName;
        let fir = "";
        for (let i = 0; i < first.length; i++) {
            if (!(first.charCodeAt(i) === 32))
                fir = fir + first[i];
        }

        let last = newPerson.lastName;
        let las = "";
        for (let i = 0; i < last.length; i++) {
            if (!(last.charCodeAt(i) === 32))
                las = las + last[i];
        }

        if (!/^[a-z]+$/i.test(newPerson.fir)) {
            alert("put a correct first name")
            event.preventDefault();
        }
        else if (!/^[a-z]+$/i.test(newPerson.lastName)) {
            alert("put a correct last name")
            event.preventDefault();
        }

        else {
            alert("delete user reussi!")
            axios.post("http://localhost:5000/deleteperson", newPerson)
                .then(this.setState({ redirect: "suppression reussie" }))
                .catch(console.log("error"))

        }
    };
    send(event, newPerson) {
        let tel = newPerson.telephone;
        let mytel = tel.substring(1, 4) + tel.substring(5, 7) + tel.substring(8, 11) + tel.substring(12, 15);

        let first = newPerson.firstName;
        let fir = "";
        for (let i = 0; i < first.length; i++) {
            if (!(first.charCodeAt(i) === 32))
                fir = fir + first[i];
        }

        let last = newPerson.lastName;
        let las = "";
        for (let i = 0; i < last.length; i++) {
            if (!(last.charCodeAt(i) === 32))
                las = las + last[i];
        }

        if (!/^[a-z]+$/i.test(newPerson.fir)) {
            alert("put a correct first name")
            event.preventDefault();
        }
        else if (!/^[a-z]+$/i.test(newPerson.lastName)) {
            alert("put a correct last name")
            event.preventDefault();
        }
        else if (!/\S+@\S+\.\S+/.test(newPerson.email)) {
            alert("put a correct email")
            event.preventDefault();
        }
        else if (newPerson.CIN.length !== 8 || !/^[0-9]+$/i.test(newPerson.CIN)) {
            alert("put a correct CIN")
            event.preventDefault();
        }
        else if (!/^[0-9]+$/i.test(mytel)) {
            alert("put a correct telephone number")
            event.preventDefault();
        }
        else {
            event.preventDefault();
            alert("inscription reussie !")
            axios.post("http://localhost:5000/inscrit", newPerson)
                .then(this.setState({ redirect: "inscription reussie" }))
                .catch(console.log("error"))
        }


    };

    update(event, newPerson) {
        let tel = newPerson.telephone;
        let mytel = tel.substring(1, 4) + tel.substring(5, 7) + tel.substring(8, 11) + tel.substring(12, 15);

        let first = newPerson.firstName;
        let fir = "";
        for (let i = 0; i < first.length; i++) {
            if (!(first.charCodeAt(i) === 32))
                fir = fir + first[i];
        }

        let last = newPerson.lastName;
        let las = "";
        for (let i = 0; i < last.length; i++) {
            if (!(last.charCodeAt(i) === 32))
                las = las + last[i];
        }

        if (!/^[a-z]+$/i.test(newPerson.fir)) {
            alert("put a correct first name")
            event.preventDefault();
        }
        else if (!/^[a-z]+$/i.test(newPerson.lastName)) {
            alert("put a correct last name")
            event.preventDefault();
        }
        else if (!/\S+@\S+\.\S+/.test(newPerson.email)) {
            alert("put a correct email")
            event.preventDefault();
        }
        else if (newPerson.CIN.length !== 8 || !/^[0-9]+$/i.test(newPerson.CIN)) {
            alert("put a correct CIN")
            event.preventDefault();
        }
        else if (!/^[0-9]+$/i.test(mytel)) {
            alert("put a correct telephone number")
            event.preventDefault();
        }



        else {
            alert("update user reussi!")
            axios.post("http://localhost:5000/updateperson", newPerson)
                .then(this.setState({ redirect: "update reussi" }))
                .catch(console.log("error"))

        }
    };

    changeFirstName(newFirstName) {
        let newPersoncopy = Object.assign({}, this.state.newPerson);
        newPersoncopy.firstName = newFirstName;
        this.setState({ newPerson: newPersoncopy });
    }
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
    changeSearch(S) {
        this.setState({ search: S });
    }


    affiche(S) {
        return this.state.Persons.map(function (Object, i) {
            if (Object.firstName.toLowerCase().includes(S.toLowerCase()) || Object.lastName.toLowerCase().includes(S.toLowerCase()))
                return <Affichageusers user={Object} key={i} />;
        })
    }
    componentDidMount() {
        axios.get("http://localhost:5000/affichageusers")
            .then(response => {
                let list = response.data;
                this.setState({ Persons: list });
                console.log(this.state.Persons)
            }
            )
            .catch(console.log("error"))
    }
    render() {
        /*let redirect=this.state.redirect
        if (redirect==="inscription reussie")
        {
        return (<Redirect to="/testins" />)
        }
        else if (redirect==="main")*/
        return (

            <div className="bloc">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="nav-link" to="/adminmenu">modifier le menu</Link>
                    <Link className="nav-link" to="/adminusers">modifier les utilisateurs</Link>
                    <Link className="nav-link" to="/">deconnexion</Link>
                    <div className="inpsearch"><Input type="text" id="search" placeholder="search by first name or last name"
                        onChange={(event) => { this.changeSearch(event.target.value) }} value={this.state.search} />
                    </div>
                </nav>
                <div className="auth">
                    <h3 className="gerer">Gere les comptes !</h3>
                    <form action="">
                        <div className="inscadmin">
                            <div className="labelandinput">
                                <label for="firstName">firstName :</label>
                                <Input type="text" id="firstName" placeholder="put your first name here"
                                    onChange={(event) => { this.changeFirstName(event.target.value) }} value={this.state.firstName} />
                            </div>
                            <div className="labelandinput">
                                <label for="lastName">lastName :</label>
                                <Input type="text" id="lastName" placeholder="put your last name here"
                                    onChange={(event) => { this.changeLastName(event.target.value) }} value={this.state.lastName} />
                            </div>
                            <div className="labelandinput">
                                <label for="email">email :</label>
                                <Input type="text" id="email" placeholder="put your adress mail here"
                                    onChange={(event) => { this.changeEmail(event.target.value) }} value={this.state.email} />
                            </div>
                            <div className="labelandinput">
                                <label for="CIN">CIN :</label>
                                <Input id="CIN" placeholder="put your CIN here"
                                    onChange={(event) => { this.changeCIN(event.target.value) }} value={this.state.CIN} />
                            </div>
                            <div className="labelandinput">
                                <label for="telephone">telephone :</label>
                                <InputMask mask="+216 ** *** ***" className="inpmask" id="telephone" placeholder="put your telephone here"
                                    onChange={(event) => { this.changeTelephone(event.target.value) }} value={this.state.telephone} />
                            </div>
                            <div className="labelandinput">
                                <label for="password">password</label>
                                <Input type="password" id="password" placeholder="put your password here"
                                    onChange={(event) => { this.changePassword(event.target.value) }} value={this.state.password} />
                            </div>
                        </div>
                        <div className="bout">
                            <Button className="bou" onClick={(event) => { this.send(event, this.state.newPerson) }}>Ajouter un utilisateur</Button>
                            <Button className="bou" onClick={(event) => { this.delete(event, this.state.newPerson) }}>Supprimer un utilisateur</Button>
                            <Button className="bou" onClick={(event) => { this.update(event, this.state.newPerson) }}>Modifier un utilisateur</Button>
                        </div>
                    </form>

                </div>
                <div className="affichage">
                    {this.affiche(this.state.search)}
                </div>
            </div>
        );
    }
}
export default Adminusers;