import React from "react";
import classes from "./Window.module.css";
import ReactDOM from "react-dom";

const portal = document.getElementById("overlays");
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Window(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}{" "}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </>
  );
}
export default Window;
