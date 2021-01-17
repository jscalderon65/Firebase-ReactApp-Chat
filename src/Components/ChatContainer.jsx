import { useState, useRef } from "react";
import { useForm } from "my-customhook-collection";
import { logout } from "../Firebase/FirebaseAuth";
import { useFirestore, sendMessage } from "../Firebase/useFirestore";
import {
  ChatContainerStyles,
  ChatBoxStyles,
} from "../Styles/ChatContainerStyles";
import { Button } from "antd";
import MessagesForm from "./MessagesForm";
import TransmitterMessage from "./TransmitterMessage";
import ReceiverMessage from "./ReceiverMessage";
import { FireTwoTone } from "@ant-design/icons";

const ChatContainer = ({ user, firebase }) => {
  const [spinIcon, setSpin] = useState(false);
  const divScrollHandler = useRef();
  const containerStyles = ChatContainerStyles();
  const chatBoxStyles = ChatBoxStyles();
  const { messages } = useFirestore(divScrollHandler);
  const [{ message }, handleInputChange] = useForm({
    message: "",
  });
  const onSubmitHandler = (e) => {
    sendMessage(
      e,
      firebase,
      user,
      message,
      divScrollHandler,
      handleInputChange
    );
  };
  return (
    <div style={containerStyles}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <FireTwoTone
          twoToneColor="#FFCB2B"
          style={{ fontSize: "40px" }}
          onClick={() => {
            setSpin(!spinIcon);
          }}
          spin={spinIcon}
        />
        <Button type="primary" danger size="large" onClick={logout}>
          Salir
        </Button>
      </div>
      <div style={chatBoxStyles}>
        {messages &&
          messages.map((messageInfo) => {
            return messageInfo.User === user.uid ? (
              <TransmitterMessage
                key={messageInfo.id}
                messageInfo={messageInfo}
              />
            ) : (
              <ReceiverMessage key={messageInfo.id} messageInfo={messageInfo} />
            );
          })}
        <br />
        <div ref={divScrollHandler}></div>
      </div>
      <MessagesForm
        onSubmitHandler={onSubmitHandler}
        message={message}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};
export default ChatContainer;
