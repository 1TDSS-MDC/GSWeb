import { Link } from "react-router-dom";
import { useState } from "react";
import Forms from "./Style/FormComponents/Forms";
import './Style/SpanClass.css';
import {Form, FormTittle, Formdiv, FormInput, ContainerFormBtn, FormBtn, TextCenter, Txt1} from "./Style/Styled";

export default function Login (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    
    return(
        <Forms>
            <Form>
                <FormTittle>Entrar</FormTittle>
                    
                <Formdiv>
                    <FormInput
                        className={email !== "" ? "has-val input" : "input"}
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Email"></span>
                </Formdiv>

                <Formdiv>
                    <FormInput 
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <span className="focus-input" data-placeholder = "Password"></span>
                </Formdiv>

                <ContainerFormBtn>
                    <FormBtn>Login </FormBtn>
                </ContainerFormBtn>

                <TextCenter>
                    <Txt1>Não possui conta? </Txt1>
                        <Link Link className="text2" to= "/register">
                            Criar conta
                        </Link>
                </TextCenter>
            </Form>
        </Forms>
    )
}