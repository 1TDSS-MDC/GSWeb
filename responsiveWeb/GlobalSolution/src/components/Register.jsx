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
    const [tel, setTel] = useState("");
    const [endereco, setEndereco] = useState("");
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
                        type="nome" 
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
                        value={rg} 
                        onChange={(e) => setRg(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "RG"></span>
                </Formdiv>

                <Formdiv>
                    <FormInput
                        className={tel !== "" ? "has-val input" : "input"}
                        type="tel" 
                        value={tel} 
                        onChange={(e) => setTel(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Telefone"></span>
                </Formdiv>

                <Formdiv>
                    <FormInput
                        className={endereco !== "" ? "has-val input" : "input"}
                        type="endereco" 
                        value={tel} 
                        onChange={(e) => setEndereco(e.target.value)}/>
                    <span className="focus-input" data-placeholder = "Endereço"></span>
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
                        <Link Link className="txt2" to= "/">
                            Log in
                        </Link>
                </TextCenter>
            </Form>
        </Forms>
    )
}