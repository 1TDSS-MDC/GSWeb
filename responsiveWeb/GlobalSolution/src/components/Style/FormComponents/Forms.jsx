import { Container, WrapLogin, ContainerLogin } from "../Styled";


export default function Forms (props) {
    return(
        <Container>
            <ContainerLogin>
                <WrapLogin>{props.children}</WrapLogin>
        
            </ContainerLogin>

        </Container>
    );
};