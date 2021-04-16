import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
const MessagesForm = ({ onSubmitHandler, message, handleInputChange }) => {
  return (
    <>
      <br/>
      <form onSubmit={onSubmitHandler} style={{ display: "flex" }}>
        <input
          type="text"
          name="message"
          autoComplete="off"
          className="form-control"
          value={message}
          onChange={handleInputChange}
          style={{ height: "40px", background:"#32363E",color:"white"}}
          placeholder="Escribe algo..."
          required
        />
        {message.trim() ? (
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            <SendOutlined />
          </Button>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default MessagesForm;
