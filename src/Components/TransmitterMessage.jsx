import React from "react";
import { Divider, Typography } from "antd";
const TransmitterMessage = ({ messageInfo,user }) => {
  const { Text,Title  } = Typography;
  return (
    <div className="animate__animated animate__backInRight" style={{ marginTop: "10px",padding:"10px"}}>
      <Divider orientation="right">
        <Text style={{ fontSize: "xx-small" }} type="secondary">
          {messageInfo.Name}
        </Text>
      </Divider>
      <div style={{ display: "flex", justifyContent: " flex-end",alignItems:"center",flexWrap:"wrap" }}>
      <Title level={5}>{messageInfo.message}</Title>
        <img
          style={{ borderRadius: "100%", marginLeft:"20px"}}
          src={messageInfo.Photo}
          width="50px"
          height="50px"
          alt=""
        />
      </div>
    </div>
  );
};

export default TransmitterMessage;
