const ChatContainerStyles = () => {
  return {
    background:"#32363E",
    borderRadius: "10px",
    maxHeight: "600px",
    width: "40vw",
    minWidth:"300px",
    margin: "auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,.25)",
    padding: "10px",
  };
};
const ChatBoxStyles = () =>{
  return   {
    boxShadow: "2px 2px 10px rgba(0,0,0,.25)",
    background:"white",
    overflowY: "scroll",
    overflowX:"hidden",
    maxHeight: "400px",
    minHeight: "300px",
    width: "auto",
  }
}

export {ChatContainerStyles,ChatBoxStyles};
