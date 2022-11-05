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