import { firebase } from "./FirebaseConfig";
import {message} from 'antd'
import "antd/dist/antd.css";
const{success,error}=message
const googleAuth = () => {
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(() => {
      success("Se ha iniciado sesión correctamente")
    })
    .catch((Error) => {
     error(`Se ha presentado un error al inicio de sesión`);
    });
};
const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      success(`Se ha cerrado sesión correctamente`);
    })
    .catch((Error) => {
      error(`Se ha presentado un Error cerrando sesión ${Error}`, 5);
    });
};

export {googleAuth,logout};
