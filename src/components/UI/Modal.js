import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Backdropped, Wrapper } from "./ModalStyles";
const Backdrop = (props) => {
  return <Backdropped />;
};
const ModalOverlay = (props) => {
  return (
    <Wrapper>
      <div className="content">{props.children}</div>
    </Wrapper>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
