import React from "react";
import { Divider, Typography } from "antd";
const ReceiverMessage = ({ messageInfo }) => {
  const { Text, Title } = Typography;
  return (
    <div className="animate__animated animate__backInLeft ">
      <Divider orientation="left">
        <Text style={{ fontSize: "xx-small" }} type="secondary">
          {messageInfo.Name.toUpperCase()}
        </Text>
      </Divider>
      <div
        style={{
          display: "flex",
          justifyContent: " flex-start",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          style={{
            borderRadius: "100%",
            marginRight: "20px",
            marginLeft: "20px",
          }}
          src={messageInfo.Photo}
          width="50px"
          height="50px"
          alt=""
        />
        <Title level={5}>{messageInfo.message}</Title>
      </div>
    </div>
  );
};

export default ReceiverMessage;
