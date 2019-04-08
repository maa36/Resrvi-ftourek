// import React from 'react'

// import InputMask from "react-input-mask"
// import axios from "axios"
// import Affichagemenu from "./affichagemenu"


// class Adminmenu extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             redirect: "main",
//             newPlat: {
//                 nom: "",
//                 image: "",
//                 prix: "",
//                 description: ""
//             },
//             affichePlat: []
//         };
//         this.changeNom = this.changeNom.bind(this);
//         this.changeImage = this.changeImage.bind(this);
//         this.changePrix = this.changePrix.bind(this);
//         this.changeDescription = this.changeDescription.bind(this);
//         this.send = this.send.bind(this);
//         /*this.affiche=this.affiche.bind(this);*/

//     }
//     delete(event, newPlat) {

//         let plat = newPlat.nom;
//         let p = "";
//         for (let i = 0; i < plat.length; i++) {
//             if (!(plat.charCodeAt(i) === 32))
//                 p = p + plat[i];
//         }


//         if (!/^[a-z]+$/i.test(p)) {
//             alert("put a correct name for the dish:" + p)
//             event.preventDefault();
//         }

//         else {
//             alert("delete plat reussi!")
//             axios.post("http://localhost:5000/delete", newPlat)
//                 .then(this.setState({ redirect: "suppression reussie" }))
//                 .catch(console.log("error"))

//         }
//     };
//     send(event, newPlat) {

//         let plat = newPlat.nom;
//         let p = "";
//         let j = 0;
//         for (let i = 0; i < plat.length; i++) {
//             if (!(plat.charCodeAt(i) === 32))
//                 p = p + plat[i];
//         }

//         let prix = newPlat.prix;
//         let pri = prix.substring(0, 2) + prix.substring(3, 6)

//         let image = newPlat.image;
//         var index = image.lastIndexOf(".");
//         var img = image.substring(index + 1);

//         if (!/^[a-z]+$/i.test(p)) {
//             alert("put a correct name for the dish" + p)
//             event.preventDefault();
//         }
//         else if (!(img === "jpg" || img === "jpeg" || img === "png" || img === "gif")) {
//             alert("put a correct image url for the dish:" + img)
//             event.preventDefault();
//         }

//         else if (!/^[0-9]+$/i.test(pri)) {
//             alert("put a correct price for the dish")
//             event.preventDefault();
//         }

//         else {
//             alert("ajout du plat reussi!")
//             axios.post("http://localhost:5000/ajoutplat", newPlat)
//                 .then(this.setState({ redirect: "ajout reussi" }))
//                 .catch(console.log("error"))

//         }
//     };

//     update(event, newPlat) {

//         /*let plat = newPlat.nom;
//         let p = "";
//         let j = 0;
//         for (let i = 0; i < plat.length; i++) {
//             if (!(plat.charCodeAt(i) === 32))
//                 p = p + plat[i];
//         }

//         let prix = newPlat.prix;
//         let pri = prix.substring(0, 2) + prix.substring(3, 6)

//         let image = newPlat.image;
//         var index = image.lastIndexOf(".");
//         var img = image.substring(index + 1);

//         if (!/^[a-z]+$/i.test(p)) {
//             alert("put a correct name for the dish" + p)
//             event.preventDefault();
//         }
//         else if (!(img === "jpg" || img === "jpeg" || img === "png" || img === "gif")) {
//             alert("put a correct image url for the dish:" + img)
//             event.preventDefault();
//         }

//         else if (!/^[0-9]+$/i.test(pri)) {
//             alert("put a correct price for the dish")
//             event.preventDefault();
//         }

//         else {*/

//         alert("update du plat reussi!")
//         axios.post("http://localhost:5000/update", newPlat)
//             .then(this.setState({ redirect: "update reussi" }))
//             .catch(console.log("error"))

//         /*}*/
//     };

//     changeNom(newNom) {
//         let newPlatcopy = Object.assign({}, this.state.newPlat);
//         newPlatcopy.nom = newNom;
//         this.setState({ newPlat: newPlatcopy });
//     }
//     changeImage(newImage) {
//         let newPlatcopy = Object.assign({}, this.state.newPlat);
//         newPlatcopy.image = newImage;
//         this.setState({ newPlat: newPlatcopy });
//     }
//     changePrix(newPrix) {
//         let newPlatcopy = Object.assign({}, this.state.newPlat);
//         newPlatcopy.prix = newPrix;
//         this.setState({ newPlat: newPlatcopy });
//     }
//     changeDescription(newDescription) {
//         let newPlatcopy = Object.assign({}, this.state.newPlat);
//         newPlatcopy.description = newDescription;
//         this.setState({ newPlat: newPlatcopy });
//     }

//     affiche(){
//     return this.state.affichePlat.map(function(Object,i){
//     return <Affichagemenu obj={Object} key={i} />;
//     })
//     }
//     componentDidMount = () => {
    
//         fetch("http://localhost:5000/affichage")
//           .then(res => res.json())
//           .then(
              
//             result => {
//               console.log(result);
//               this.setState({
//                 affichePlat: result
//               });
//             },
//             err => {
//               console.log("err");
//             }
//           );
//       };
//     // componentDidMount() {
//     //     axios.get("http://localhost:5000/affichage")
//     //         .then(response =>
//     //             {let menu =response.data;
//     //             this.setState({ affichePlat: menu });
//     //             console.log(this.state.affichePlat)}
//     //         )
//     //         .catch(console.log("error"))
//     // }
//     render() {
        
//         return (
//             <div className="all">
//                 <div className="auth">
//                     <div className="ajout">
//                         <h3>Modifier le menu</h3>
//                         <form action="">

//                             <div className="nom">
//                                 <label for="nom">Nom du plat :</label>
//                                 <input type="text" id="nom" placeholder="put the name of the dish here"
//                                     onChange={(event) => { this.changeNom(event.target.value) }} value={this.state.nom} />
//                             </div>

//                             <div className="nom">
//                                 <label for="image">Image du plat :</label>
//                                 <input type="text" id="image" placeholder="put the image url of the dish here"
//                                     onChange={(event) => { this.changeImage(event.target.value) }} value={this.state.image} />
//                             </div>
//                             <div className="nom">
//                                 <label for="prix">Prix du plat :</label>
//                                 <InputMask mask="**.*** DT" id="prix" placeholder="put the price of the dish here"
//                                     onChange={(event) => { this.changePrix(event.target.value) }} value={this.state.prix} />
//                             </div>

//                             <div className="nom">
//                                 <label for="description">Description du plat :</label>
//                                 <textarea id="description" placeholder="put the description of the dish here"
//                                     onChange={(event) => { this.changeDescription(event.target.value) }} value={this.state.description} />
//                             </div>
//                             <div className="buttons">
//                                 <button onClick={(event) => { this.send(event, this.state.newPlat) }}>Ajouter un plat</button>
//                                 <button onClick={(event) => { this.delete(event, this.state.newPlat) }}>Supprimer un plat</button>
//                                 <button onClick={(event) => { this.update(event, this.state.newPlat) }}>Modifier un plat</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="affichage">
//                 {this.affiche()}
//                 </div>
//             </div>
//         );
//     }
// }
// export default Adminmenu; 
import React from 'react'
import ReactDOM from "react-dom";
import InputMask from "react-input-mask"
import axios from "axios"
import Affichagemenu from "./affichagemenu"
import {Link} from "react-router-dom"
import { Redirect } from "react-router"
import {Input,Button} from "reactstrap" 
import './admin.css'


class Adminmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "main",
            newPlat: {
                nom: "",
                image: "",
                prix: "",
                description: ""
            },
            affichePlat: [],
            search:""
        };
        this.changeNom = this.changeNom.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changePrix = this.changePrix.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
        this.send = this.send.bind(this);
        /*this.affiche=this.affiche.bind(this);*/

    }
    delete(event, newPlat) {

        let plat = newPlat.nom;
        let p = "";
        for (let i = 0; i < plat.length; i++) {
            if (!(plat.charCodeAt(i) === 32))
                p = p + plat[i];
        }


        if (!/^[a-z]+$/i.test(p)) {
            alert("put a correct name for the dish:" + p)
            event.preventDefault();
        }

        else {
            alert("delete plat reussi!")
            axios.post("http://localhost:5000/delete", newPlat)
                .then(this.setState({ redirect: "suppression reussie" }))
                .catch(console.log("error"))

        }
    };
    send(event, newPlat) {

        let plat = newPlat.nom;
        let p = "";
        let j = 0;
        for (let i = 0; i < plat.length; i++) {
            if (!(plat.charCodeAt(i) === 32))
                p = p + plat[i];
        }

        let prix = newPlat.prix;
        let pri = prix.substring(0, 2) + prix.substring(3, 6)

        let image = newPlat.image;
        var index = image.lastIndexOf(".");
        var img = image.substring(index + 1);

        if (!/^[a-z]+$/i.test(p)) {
            alert("put a correct name for the dish" + p)
            event.preventDefault();
        }
        else if (!(img === "jpg" || img === "jpeg" || img === "png" || img === "gif")) {
            alert("put a correct image url for the dish:" + img)
            event.preventDefault();
        }

        else if (!/^[0-9]+$/i.test(pri)) {
            alert("put a correct price for the dish")
            event.preventDefault();
        }

        else {
            alert("ajout du plat reussi!")
            axios.post("http://localhost:5000/ajoutplat", newPlat)
                .then(this.setState({ redirect: "ajout reussi" }))
                .catch(console.log("error"))

        }
    };

    update(event, newPlat) {

        /*let plat = newPlat.nom;
        let p = "";
        let j = 0;
        for (let i = 0; i < plat.length; i++) {
            if (!(plat.charCodeAt(i) === 32))
                p = p + plat[i];
        }

        let prix = newPlat.prix;
        let pri = prix.substring(0, 2) + prix.substring(3, 6)

        let image = newPlat.image;
        var index = image.lastIndexOf(".");
        var img = image.substring(index + 1);

        if (!/^[a-z]+$/i.test(p)) {
            alert("put a correct name for the dish" + p)
            event.preventDefault();
        }
        else if (!(img === "jpg" || img === "jpeg" || img === "png" || img === "gif")) {
            alert("put a correct image url for the dish:" + img)
            event.preventDefault();
        }

        else if (!/^[0-9]+$/i.test(pri)) {
            alert("put a correct price for the dish")
            event.preventDefault();
        }

        else {*/

        alert("update du plat reussi!")
        axios.post("http://localhost:5000/update", newPlat)
            .then(this.setState({ redirect: "update reussi" }))
            .catch(console.log("error"))

        /*}*/
    };

    changeNom(newNom) {
        let newPlatcopy = Object.assign({}, this.state.newPlat);
        newPlatcopy.nom = newNom;
        this.setState({ newPlat: newPlatcopy });
    }
    changeImage(newImage) {
        let newPlatcopy = Object.assign({}, this.state.newPlat);
        newPlatcopy.image = newImage;
        this.setState({ newPlat: newPlatcopy });
    }
    changePrix(newPrix) {
        let newPlatcopy = Object.assign({}, this.state.newPlat);
        newPlatcopy.prix = newPrix;
        this.setState({ newPlat: newPlatcopy });
    }
    changeDescription(newDescription) {
        let newPlatcopy = Object.assign({}, this.state.newPlat);
        newPlatcopy.description = newDescription;
        this.setState({ newPlat: newPlatcopy });
    }

    // affiche(){
    // return this.state.affichePlat.map(function(Object,i){
    // return <Affichagemenu obj={Object} key={i} />;
    // })
    // }
    affiche(S) {
        return this.state.affichePlat.map(function (Object, i) {
            if ( Object.nom.toLowerCase().includes(S.toLowerCase()))
                return <Affichagemenu obj={Object} key={i} />;
        })
    }
    componentDidMount() {
        axios.get("http://localhost:5000/affichage")
            .then(response =>
                {let menu =response.data;
                this.setState({ affichePlat: menu });
                console.log(this.state.affichePlat)}
            )
            .catch(console.log("error"))
    }
    changeSearch(S) {
        this.setState({ search: S });
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
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="nav-link" to="/adminmenu">modifier le menu</Link>
                    <Link className="nav-link" to="/adminusers">modifier les utilisateurs</Link>
                    <Link className="nav-link" to="/">deconnexion</Link>
                    <div className="inpsearch"><Input type="text" id="search" placeholder="search by first name or last name"
                                onChange={(event) => { this.changeSearch(event.target.value) }} value={this.state.search} />
                    </div>
                </nav>
                </div>
                <div className="auth">
                        <h3 className="gerer">Modifier le menu</h3>
                        <form action="">
                        <div className="inscadmin">
                            <div className="labelandinput">
                                <label for="nom">Nom du plat :</label>
                                <Input type="text" id="nom" placeholder="put the name of the dish here"
                                    onChange={(event) => { this.changeNom(event.target.value) }} value={this.state.nom} />
                            </div>

                            <div className="labelandinput">
                                <label for="image">Image du plat :</label>
                                <Input type="text" id="image" placeholder="put the image url of the dish here"
                                    onChange={(event) => { this.changeImage(event.target.value) }} value={this.state.image} />
                            </div>
                            <div className="labelandinput">
                                <label for="prix">Prix du plat :</label>
                                <InputMask mask="**.*** DT" className="inpmask" id="prix" placeholder="put the price of the dish here"
                                    onChange={(event) => { this.changePrix(event.target.value) }} value={this.state.prix} />
                            </div>

                            <div className="labelandinput">
                                <label for="description">Description du plat :</label>
                                <Input type="textarea" id="description" placeholder="put the description of the dish here"
                                    onChange={(event) => { this.changeDescription(event.target.value) }} value={this.state.description} />
                            </div>
                            </div>
                            <div className="bout2">
                                <Button className="bou" onClick={(event) => { this.send(event, this.state.newPlat) }}>Ajouter un plat</Button>
                                <Button className="bou" onClick={(event) => { this.delete(event, this.state.newPlat) }}>Supprimer un plat</Button>
                                <Button className="bou" onClick={(event) => { this.update(event, this.state.newPlat) }}>Modifier un plat</Button>
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
export default Adminmenu;