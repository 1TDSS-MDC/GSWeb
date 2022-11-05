import { Link } from "react-router-dom";
import { useState } from "react";
import Forms from "./Style/FormComponents/Forms";
import './Style/SpanClass.css';
import {Form, FormTittle, Formdiv, FormInput, ContainerFormBtn, FormBtn, TextCenter, Txt1} from "./Style/Styled";

export default function Login (){
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [password, setPassword] = useState("");
    return(
        <Forms>
            <Form>
                <FormTittle>Registre-se</FormTittle>
                    
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
                        className={nome !== "" ? "has-val input" : "input"}
                        type="email" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Nome"></span>
                </Formdiv>

                <Formdiv>
                    <FormInput
                        className={cpf !== "" ? "has-val input" : "input"}
                        type="cpf" 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Cpf"></span>
                </Formdiv>

                <Formdiv>
                    <FormInput
                        className={rg !== "" ? "has-val input" : "input"}
                        type="rg" 
                        value={email} 
                        onChange={(e) => setRg(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "RG"></span>
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
                    <FormBtn>Register </FormBtn>
                </ContainerFormBtn>

                <TextCenter>
                    <Txt1> Possui conta? </Txt1>
                        <Link Link className="text2" to= "/">
                            Log in
                        </Link>
                </TextCenter>
            </Form>
        </Forms>
    )
}