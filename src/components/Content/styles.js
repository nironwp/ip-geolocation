import styled from 'styled-components';
import { DarkGray, White } from '../../colors';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const InfosSection = styled.div`
    width: 62%;
    height: 20%;
    top: 20%;
    border-radius: 15px;
    right: 20%;
    position: absolute;
    background-color: ${White};
    display: flex;
    justify-content: space-around;

    @media (max-width: 2460px){
        top: 40%;
        width: 80%;
        right: 10%;
    }

    @media (max-width: 1100px){
        justify-content: space-between;
        width: 90%;
        right: 5%;
        top: 38%;
    }

    @media (max-width:500px){
        flex-direction: column;
        height: 35%;
        top: 25%;
    }

    @media (max-height:667px){
        top: 28%;
        z-index: 99;
    }

    @media (max-height:450px){
        display: none;
    }
`;

export const Mapa = styled.div`
    height: 100%;
`;

export const TheIp = styled.div`
    margin-right: 8%;
    margin-left: 5%;
    h1{
        font-size:15px;
        font-family:"Rubik", sans-serif;
        color:${DarkGray};
        margin-top:10%;
    }

    h2{
        font-family:"Rubik",sans-serif;
        margin-top:5%;
        font-size:1.6em;


        @media (max-width: 1100px){
            font-size:1.2em;
            margin-right: 8%;
        }
    }

    @media (max-width:500px){
        h1{
            font-size: 15px;
            margin-top: 3%;
        }

        h2{
            font-size: .9em;
            margin-top: 2%;
        }
    }
`;

export const TheLocation = styled.div`
    margin-right: 8%;
    margin-left: 5%;

    h1{
        font-size:15px;
        font-family:"Rubik", sans-serif;
        color:${DarkGray};
        position: relative;
        margin-top:8%;
    }

    h2{
        font-family:"Rubik",sans-serif;
        margin-top:5%;
        font-size:1.5em;
    }

    @media (max-width:500px){
        h1{
            font-size: 15px;
            margin-top: 1%;
        }

        h2{
            font-size: .9em;
            margin-top: 2%;
        }
    }
`;

export const TheTimezone = styled.div`
    margin-right: 8%;
    margin-left: 5%;

    h1{
        font-size:15px;
        font-family:"Rubik", sans-serif;
        color:${DarkGray};
        margin-top:16%;
        position: relative;
    }

    h2{
        font-family:"Rubik",sans-serif;
        margin-top:5%;
        font-size:1.5em;
        position: relative;
    }

    @media (max-width:500px){
        h1{
            font-size: 15px;
            margin-top: 1%;
        }

        h2{
            font-size: .9em;
            margin-top: 2%;
        }
    }
`;

export const TheIsp = styled.div`
    margin-right: 5%;
    margin-left: 5%;
    h1{
        font-size:15px;
        font-family:"Rubik", sans-serif;
        color:${DarkGray};
        margin-top:10%;
    }

    h2{
        font-family:"Rubik",sans-serif;
        margin-top:5%;
        font-size:1.5em;
    }

    @media (max-width:500px){
        h1{
            font-size: 15px;
            margin-top: 1%;
        }

        h2{
            font-size: .9em;
            margin-top: 2%;
        }
    }
`;
