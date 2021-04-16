import React from "react";
import { Typography, Tooltip,Divider } from "antd";
const ReceiverMessage = ({ messageInfo }) => {
  const { Text, Title } = Typography;
  return (
    <>
    <Divider/>
    <div
      style={{
        display: "flex",
        justifyContent: " flex-start",
        padding: "10px",
      }}
      className="animate__animated animate__backInLeft"
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexFlow: "column",
          justifyContent: "flex-start",
        }}
      >
        <Tooltip placement="topLeft" title={messageInfo.Name.toUpperCase()}>
          <Text
            style={{ fontSize: "xx-small",textAlign:"center",cursor:"pointer"  }}
            type="secondary"
          >
            {messageInfo.Name.length >= 15
              ? `${messageInfo.Name.substr(0, 15).toUpperCase()}...`
              : messageInfo.Name.toUpperCase()}
          </Text>
        </Tooltip>
        <img
          style={{
            borderRadius: "100%",
          }}
          src={messageInfo.Photo}
          width="50px"
          height="50px"
          alt=""
        />
      </div>
      <div
        style={{
          flex: "1",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          alignSelf: "center",
          textAlign: "justify",
          padding:"10px",
        }}
      >
        <Title style={{ textAlign: "justify"}} level={5}>
          {messageInfo.message}
        </Title>
      </div>
    </div>
    </>
  );
};

export default ReceiverMessage;
