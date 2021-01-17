import { useEffect, useState } from "react";
import { firebase } from "./FirebaseConfig";
const useFirestore = (ScrollDown) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const unSubscribe = firebase
      .firestore()
      .collection("Messages-test")
      .onSnapshot(
        (snapshot) => {
          setLoading(false);
          setMessages(
            snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
          );
          ScrollDown.current.scrollIntoView({ behavior: "smooth" });
        },
        (err) => {
          setError(err);
        }
      );
    return () => unSubscribe();
  }, [setMessages]);
  return { error, loading, messages };
};
const sendMessage = (
  e,
  firebase,
  user,
  message,
  divScrollHandler,
  handleInputChange
) => {
  e.preventDefault();
  firebase
    .firestore()
    .collection("Messages-test")
    .doc(JSON.stringify(new Date()))
    .set({
      Name: user.displayName,
      Photo:user.photoURL,
      User: user.uid,
      timeStamp: new Date(),
      message,
    })
    .then(() => {
      handleInputChange({ target: { name: "message", value: "" } });
      divScrollHandler.current.scrollIntoView({ behavior: "smooth" });
    });
};

export { useFirestore, sendMessage };
