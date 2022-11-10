import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;

`
export const ContainerLogin = styled.div`
    width: 100%;
    min-width: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 101px;
    background-color: #585C72;
`
export const WrapLogin = styled.div`
    width: 390px;
    background-color: #30323D;
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
`
export const Form = styled.form`
    width: 100%;
`
export const FormTittle = styled.span`
    font-family: Nunito, sans-serif;
    display: block;
    font-size: 30px;
    color: #fff;
    line-height: 1.2;
    text-align: center;
`
export const Formdiv = styled.div`
    width: 100%;
    position: relative;
    border-bottom: 2x solid #adadda;
    margin-bottom: 37px;
`
export const FormInput = styled.input`
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    border: none;
    display: block;
    width: 100%;
    height: 45px;
    background-color: transparent;
    padding: 0 5px;
    font-family: Nunito, sans-serif;



`
export const FocusInput = styled.span`
position: absolute;
display: block;
width: 100%;
height: 100%;
top: 0;
left: 0;
pointer-events: none;
color: #adadda;
font-family: Nunito, sans-serif;

&{
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: #fff;
}

&:after{
    font-family: Nunito, sans-serif;
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

`
export const ContainerFormBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;

`
export const FormBtn = styled.button`
    font-size: 15px;
    border: none;
    border-radius: 10px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color:#777E99;

    &:hover {
        cursor: pointer;
    `
export const TextCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
export const Txt1 = styled.span`
    font-size: 15px;
    color: #ffe;
    line-height: 1.5;
    padding-right: 5px;
`
export const Navegation = styled.nav`
    width: 100%;
    background: #111;
    color: #eee;
    height: 80px;
    position: fixed;
`
export const NavContainer = styled.div`
    width: 84%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.h1`
    font-size: 2rem;
`
export const NavItens = styled.ul`
    display: flex;
    list-style: none;
    text-transform: uppercase;
`
export const LiNave = styled.li`
    padding: 10px;
`

export const Produto = styled.section`
    width: 100%;
    padding: 50px;
    background-color: white;
`
export const ProdutoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Items = styled.div`
    width: 650px;
    
`
export const Item = styled.div`
    display: flex;
    padding: 10px;
    margin: 15px 0;
    font-size: 1.2rem;
`
export const SContainer = styled.div`
    text-align: center;
`
export const H2show = styled.h2`
    font-size: 2.5rem;
`
export const Pshow = styled.p`
font-size: 1.2rem;
    padding: 7px 0;
`
export const Features = styled.section`
    width: 100%;
    background: #222;
    color: #eee;
    padding: 50px;
`
export const Headline = styled.div`
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding-bottom: 50px;
    letter-spacing: 2px;
`
export const FeatureContainer = styled.div`
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
`
export const Feature = styled.div`
    display: flex;
    flex-direction: column;
    background: #333;
    padding: 20px;
    border-radius: 5px;
`
export const FeatureSpan = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`
export const Galeria = styled.section`
    width: 80%;
    margin: auto;
    padding: 50px;
    background: #333;
`
export const GaleriaContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    justify-items: center;
`
export const GaleriaImg = styled.img`
    display: inline-block;
    width: 90%;
    height: 90%;
    border-radius: 5px;
    border:  2px solid #333;
`
export const Footer = styled.footer`
    background: #222;
    color: #eee;
    padding: 30px;
    text-align: center;
`

