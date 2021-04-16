import React from "react";
import { Typography, Tooltip,Divider } from "antd";
const TransmitterMessage = ({ messageInfo, user }) => {
  const { Text, Title } = Typography;
  return (
    <>
    <Divider/>
    <div
      className="animate__animated animate__backInRight"
      style={{
        display: "flex",
        justifyContent: " flex-end",
        padding: "10px",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "flex-end",
          height: "100%",
          alignItems: "center",
          alignSelf: "center",
          padding:"10px",
        }}
      >
        <Title style={{ textAlign: "justify" ,wordBreak: "break-all"}} level={5}>
          {messageInfo.message}
        </Title>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexFlow: "column",
          justifyContent: "flex-start",
        }}
      >
        <Tooltip placement="topRight" title={messageInfo.Name.toUpperCase()}>
          <Text
            style={{ fontSize: "xx-small", textAlign: "center",cursor:"pointer"  }}
            type="secondary"
          >
            {messageInfo.Name.length >= 15
              ? `${messageInfo.Name.substr(0, 15).toUpperCase()}...`
              : messageInfo.Name.toUpperCase()}
          </Text>
        </Tooltip>
        <img
          style={{ borderRadius: "100%" }}
          src={messageInfo.Photo}
          width="50px"
          height="50px"
          alt=""
        />
      </div>
    </div>
    </>
  );
};

export default TransmitterMessage;
