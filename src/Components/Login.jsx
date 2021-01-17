import React from "react";
import { Button } from "antd";
import { googleAuth } from "../Firebase/FirebaseAuth";
const Login = () => {
  return (
    <div>
      <Button type="primary" size="large" onClick={googleAuth}>
        Ingresar con Google
      </Button>
    </div>
  );
};

export default Login;
