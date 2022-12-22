import styled from "styled-components";

export const SectionOne = styled.section`
    margin: 0;
    display: unset;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    inset-block-start: 0 !important;
    inset-inline-start: 0 !important;
    z-index: 1020;
    line-height: 1;
    text-align: start;
    color: var(--text);
    min-height: 90px;
    display: flex;
    flex-direction: column;
    padding-block-end: 0.25rem;
`;
export const ButtonSearch = styled.div`
    background-color: ${props => props.theme.colors.backgroundBlueLigth};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .container {
        display: flex;
        flex-direction: row;
        justify-content: baseline;
        flex: 1;
        width: 100%;
        position: absolute;
        left: 50%;
        top: 28%;
        transform: translate(-50% , -50%);
        justify-content: center;
        align-items: center;
    }
    .search-input {
        width: 80%;
        border-radius: 5px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border: none;
        color: ${props => props.theme.colors.navLinks};
        outline: none;
        font-size: 16px;
        padding: 16px;
    }
    .search-button {
        text-align: center;
        height: 53.5px;
        width: 40px;
        outline: none;
        cursor: pointer;
        border: none;
        border-radius: 0 5px 5px 0 ;
        border-left: none;
        background: ${props => props.theme.colors.backgroundBody};
        font-size: 20px;
        margin-left: -1px;
        color: ${props => props.theme.colors.navLinks};
    }
`;
export const ButtonRedirect = styled.div`
    display: flex;
    flex-direction: row;
    width: 100% !important;
    height: 3.4375rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #0a448b;

    button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        border: none;
        background: transparent;
        cursor: pointer;

    }
    img {
        width: 150px;
        height: auto;
    }
    p {
        max-width: 100%;
        font-size: 1.25rem;
        color: ${props => props.theme.colors.backgroundBody};
        display: flex;
        align-items: center;
    }
`;

export const Home = styled.div`
    width: 80%;
    height: fit-content !important;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 20px auto auto auto;
    background-color: ${props => props.theme.colors.backgroundBody};
    /* background-color: #797A81; */
    padding: 10px;
    .textNewCar {
        width: 100%;
        display: flex;
        max-height: 30px;
        color: ${props => props.theme.colors.navLinks};
        margin-bottom: 20px;
    }
    .help-button {
        width: 9.625rem;
        min-height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset-inline-end: 1rem;
        inset-block-end: 1rem;
        border: 0;
        border-radius: 1.5rem;
        -webkit-padding-before: 0.5rem;
        padding-block-start: 0.5rem;
        -webkit-padding-after: 0.5rem;
        padding-block-end: 0.5rem;
        -webkit-padding-end: 1rem;
        padding-inline-end: 1rem;
        -webkit-padding-start: 1rem;
        padding-inline-start: 1rem;
        z-index: 1020;
        font-size: 1rem;
        color: #fff;
        background-color: #000;
        cursor: pointer;
    }

`;
export const ButtonsHeaderContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;

    .buttonsFilter {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 50%;
    }
    .buttonsFilterSpace {
        width: 48%;
        margin: 0;
        display: flex;
        justify-content: space-between;
    }
    .buttonsFilterSpace > button {
        background: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 12pt;
    }
    .buttonsFilterSpace > button:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .buttonsFilterSpace > button:nth-child(2),
    span {
        font-weight: 400;
        color: ${props => props.theme.colors.navLinks};
        margin-left: 20px;
    }
    .buttonsFilterSpace > button:nth-child(2) {
        &:hover {
            text-decoration: underline;
            color: #000;
            font-weight: 500 ;
        }
    }
    .buttonOrderList {
        width: 40%;
        display: flex;
        align-items: flex-end;
        justify-content: end;
        margin: 0;
        span {
            font-weight: 500;
        }

        button {
            border: none;
            background: none;
            color: ${props => props.theme.colors.accent};
            cursor: pointer;
            font-weight: bolder;
            display: flex;
            align-items: center;
            flex-direction: row;
        }
    }
`;