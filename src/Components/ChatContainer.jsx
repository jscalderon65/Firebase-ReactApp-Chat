import { useState, useRef } from "react";
import { useForm } from "my-customhook-collection";
import { logout } from "../Firebase/FirebaseAuth";
import { useFirestore, sendMessage } from "../Firebase/useFirestore";
import {
  ChatContainerStyles,
  ChatBoxStyles,
} from "../Styles/ChatContainerStyles";
import { Button, Spin } from "antd";
import MessagesForm from "./MessagesForm";
import TransmitterMessage from "./TransmitterMessage";
import ReceiverMessage from "./ReceiverMessage";
import { FireTwoTone, GithubOutlined } from "@ant-design/icons";

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
    messages?
    <div style={containerStyles} className="animate__animated animate__fadeIn">
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
        <GithubOutlined    style={{ fontSize: "40px",color:"white" }}
          onClick={() => {
            window.open("https://github.com/jscalderon65/Firebase-ReactApp-Chat");
          }}
          spin={spinIcon}/>
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
    </div>:<Spin size="large"/>
  );
};
export default ChatContainer;
