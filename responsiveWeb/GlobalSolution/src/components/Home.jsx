import './Style/SpanClass.css';
import bikeDesenho from './img/bikeDesenho.png';
import bikePipa from './img/bikePipa.jpg';
import bikeSombra from './img/bikeSombra.jpg';
import bikeVR  from  './img/bikeVR.jpg';
import bikeArvore from './img/bikeArvore.jpg';
import bikeCiclista from './img/bikeCiclista.jpg';
import useScript from './Style/Scripts';
import {Link} from 'react-router-dom'
import { Navegation,NavContainer,Logo,NavItens,LiNave, SContainer, H2show, Pshow, Features, Headline, FeatureContainer, Feature, FeatureSpan, Produto, ProdutoContainer, Items, Item , Galeria, GaleriaContainer, GaleriaImg, Footer} from "./Style/Styled"


export default function Home (){

    useScript('https://kit.fontawesome.com/64d58efce2.js');
    
    return(
        
        <div>
            <Navegation>
                <NavContainer>
                    <Logo>Nome</Logo>
                    <NavItens>
                        <LiNave><a href="#showcase">Inicio</a></LiNave>
                        <LiNave><a href="#features">Sobre</a></LiNave>
                        <Link className='nav-login' to="/"><a>Login</a></Link>
                    </NavItens>
                </NavContainer>
            </Navegation>

            <header id="showcase">
                <SContainer>
                    <H2show>Lorem ipsum dolor sit amet.</H2show>
                    <Pshow>Focada no desenvolvimento de softwares que ajudam o meio ambiente</Pshow>
                    <a className="show" href="" class= "btn">Saiba Mais</a>
                </SContainer>
            </header>
            
            /* About */
            <Features id="features">
                <Headline>O que fazemos</Headline>
                    <FeatureContainer>
                        <Feature>
                            <i class ="fas fa-code fa-3x" ></i>
                            <FeatureSpan> A sustentabilidade é a prioridade </FeatureSpan>
                            <p>A sustentabilidade a cada dia torna-se mais necessária no combate ao esgotamento dos recursos</p>
                        </Feature>
                        <Feature>
                            <i class="fas fa-tachometer-alt fa-3x"></i>
                            <FeatureSpan> A saúde também é importante </FeatureSpan>
                            <p>Devemos presar por uma sociedade com mais saúde e aptididão física, para que seja possivel ter uma melhor qualidade de vida</p>
                        </Feature>
                        <Feature>
                            <i class ="fas fa-layer-group fa-3x" ></i>
                            <FeatureSpan> Diminuir a poluição é o caminho </FeatureSpan>
                            <p>Quanto antes mudarmos o nosso estilo de vida, e nos adaptarmos a meios mais verdes, poderemos disfrutar de um mundo mais limpo</p>
                        </Feature>
                    </FeatureContainer>
            </Features>

            /* Produto */
            <Produto>
                <Headline>Nosso Produto</Headline>
                <ProdutoContainer>
                    <Items>
                        <Item>
                            <i class="fas fa-map-marked fa-2x color-primary"></i>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio expedita provident nam hic beatae
                            voluptate!</p>
                        </Item>
                        <Item>
                            <i class="fas fa-users fa-2x color-primary"></i>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio expedita provident nam hic beatae
                            voluptate!</p>
                        </Item>
                        <Item>
                            <i class="fas fa-glass-cheers fa-2x color-primary"></i>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio expedita provident nam hic beatae
                            voluptate!</p>
                        </Item>
                    </Items>
                </ProdutoContainer>
            </Produto>

            /*Galeria*/ 
            <Galeria>
                <Headline>Galeria</Headline>
                <GaleriaContainer>
                    <GaleriaImg  src= {bikeDesenho}/>
                    <GaleriaImg  src= {bikePipa}/>
                    <GaleriaImg  src= {bikeSombra}/>
                    <GaleriaImg  src= {bikeVR}/>
                    <GaleriaImg  src= {bikeCiclista}/>
                    <GaleriaImg  src= {bikeArvore}/>
                </GaleriaContainer>
            </Galeria>


            <Footer>
                <p>Copyright 2022 - Todos os direitos reservados.</p>
                <p>Feito por @MDC</p>
            </Footer>
        
        </div>
        
    )
}