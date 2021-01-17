import { useState } from "react";
import Login from "./Login";
import ChatContainer from "./ChatContainer";
import { firebase } from "../Firebase/FirebaseConfig";
import "antd/dist/antd.css";
const SessionHandler = () => {
  const [SessionHandler, setSessionHandler] = useState(false);
  let user = firebase.auth().currentUser;
  firebase.auth().onAuthStateChanged((validation) => {
    if (validation) {
      setSessionHandler(true);
    } else {
      setSessionHandler(false);
    }
  });
  return SessionHandler ? <ChatContainer firebase={firebase} user={user}/> : <Login />;
};
export default SessionHandler;
