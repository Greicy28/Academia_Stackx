import React from "react";
import "./index.css";

function Modal ({onClose,children,isOpen}){
    if(!isOpen){
        return null;
    }
    return(
        <div className="ModalBackground">
          <div className="ModalContent">
            <span className="close"onClick={onClose}>Fechar</span>
            {children}
            </div>  
        </div>
    )
}

export default Modal;
