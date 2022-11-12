import { Link } from "react-router-dom";
import { useState } from "react";
import Forms from "./Style/FormComponents/Forms";
import './Style/SpanClass.css';
import {Form, FormTittle, Formdiv, FormInput, ContainerFormBtn, FormBtn, TextCenter, Txt1} from "./Style/Styled";

export default function Login (){
    

    const [usuario, setUsuario] = useState ({
        login: "",
        senha: "",
    })

    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    }


    const logar = async (e) => {
        e.preventDefault();
   

    const requestOptions = {
        method: "POST",
        Headers: {"Content-Type": "application/json"},
        body: JSON.stringify(usuario),
    };
    
    const response = await fetch(
        "http://localhost:8080/BazeProject/rest/usuario",
      requestOptions
    );

    const data = await response.json();

    if(data) {
        sessionStorage.setItem("validacao-usuario", data.login);

        window.location = "/home";
    } else {
        window.location = "/";
    }
};

    return(
        <Forms>
            <Form onSubmit={logar}>
                <FormTittle>Entrar</FormTittle>
                    
                <Formdiv>
                    <FormInput
                        className={usuario.login !== "" ? "has-val input" : "input"}
                        type="email" 
                        name="login"
                        value={usuario.login} 
                        onChange={handleChange}/>
                    <span className="focus-input" data-placeholder = "Email"></span>
                </Formdiv>

                <Formdiv>
                    <FormInput 
                        className={usuario.senha !== "" ? "has-val input" : "input"}
                        type="password"
                        value={usuario.senha}
                        name="senha"
                        onChange={handleChange} />
                    <span className="focus-input" data-placeholder = "Password"></span>
                </Formdiv>

                <ContainerFormBtn>
                    <FormBtn>Login </FormBtn>
                </ContainerFormBtn>

                <TextCenter>
                    <Txt1>Não possui conta? </Txt1>
                        <Link className="txt2" to= "/register">
                            Criar conta
                        </Link>
                </TextCenter>
            </Form>
        </Forms>
    )
}