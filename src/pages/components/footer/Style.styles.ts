import styled from "styled-components";

export const Footer = styled.div`
    background-color: #000;
    color: #FFF;
    -webkit-padding-before: 2rem;
    padding-block-start: 2rem;
    -webkit-padding-after: 2rem;
    padding-block-end: 2rem;
    margin-top: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export const rowOne = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    margin-top: -30px;

    .links {
        width: 70%;
        display: flex;
        margin-top: 10px;
    }
    .links div {
        display: flex;
        flex-direction: column;
        margin: 30px;
        width: 25%;
        display: flex;
    }
    .links a {
        text-decoration: none;
        color: #fff;
        margin: 20px;
        font-size: 13pt;
        &:hover{
            text-decoration: underline;
        }
    }
    .imgFooter {
        width: 28%;
        margin-top: 70px;
    }
`;

export const rowTwo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .iconsSocial {
        font-size: 25pt;
        margin: 10px;
    }
    a {
        color: #fff;
    }
    img {
        margin: 10px;
    }
`;

export const rowThree = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 35px;

    hr {
        width: 100%;
        color: #fff;
    }
    div {
        margin: 20px 0 10px 0 ;
    }
    div a{
        text-decoration: none;
        color: #fff;
        margin: 0px 20px;
    }
`;
