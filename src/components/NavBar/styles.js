import styled from 'styled-components';
import { Black, White } from '../../colors';
import BackgroundPattern from "../../images/pattern-bg.png"
import ArrowPng from "../../images/icon-arrow.svg"

export const Container = styled.div`
    width: 100%;
    height: 30%;z-index:5;
    position: relative;
    margin: 0 auto;
    background-image: url(${BackgroundPattern});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    
`;

export const Title = styled.h1`
    display: flex;
    width: 25%;
    position: relative;
    top: 10%;
    font-weight: 500;
    font-size: 3em;
    font-family: 'Rubik', sans-serif;
    margin: 0 auto;
    color: ${White};

    @media (max-width:500px){
        width: 45%;
        font-size: 2em;
    }

    @media (max-width:767px){
        width: 60%;
        font-size: 2em;
    }
    @media (max-width:960px){
        width: 50%;
    }
    @media (max-width:2460px){
        z-index: -1;
    }
    @media (max-height:667px){
        font-size: 1.5em;
    }
    
`;

export const InputContainer = styled.div`
    width: 40%;
    position: relative;
    font-family: 'Rubik', sans-serif;
    margin: 0 auto;
    top: 20%;
    height: 45vh;
    
    @media (max-width:500px){
        width: 55%;
    }
    @media (max-width:767px){
        top: 40%;
    }

    @media (max-width:960px){
        top: 20%;
    }
    
`;

export const Form = styled.form`
    position: absolute;
    width: 50vw;
    height: 30vh;

    @media (max-width:500px){
        width: 70vw;
    }
`;

export const InputText = styled.input`
    width: 70%;
    height: 20%;
    border: 0;
    padding: 1rem;
    border-radius: 15px 0 0 15px;

    &::placeholder{
        font-size: 1.7em;
    }

    &:focus{
        border: 0;
    }
`;

export const InputSubmit = styled.input`
    width: 6%;
    height: 20%;
    border: 0;
    color: transparent;
    background-color: ${Black};
    border-radius: 0 15px 15px 0;
    background-image: url(${ArrowPng});
    background-repeat:no-repeat;
    background-position:center;
    background-size:35%;

    &:placeholder-shown{
        display: none;
    }
`;
