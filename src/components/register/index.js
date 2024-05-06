import React from "react";
import "./index.css";
import Input from "../input";



function Register(){
   const handleSubmit =(event)=>{
event.preventDefaut();
alert("Formulário Enviado");
   };
    return(
        <div className="registerContainer">
          <form onSubmit={handleSubmit}>
          <Input className="registerInput" type="text" placeholder="Nome"/>
          <Input  className="registerInput"type="email" placeholder="E-mail"/>
        
            </form>  
        </div>
    )
}

export default Register;