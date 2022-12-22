import styled from "styled-components";
import { ActiveFilter } from "../../../types/item";

export const Container = styled.section`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    /* flex-wrap: wrap; */
    align-items: flex-start;
    gap: 20px;
    position: sticky;
`;

export const FilterDiv = styled.div<ActiveFilter>`
    display: ${props => props.$is_active_filter ? 'none' : 'block'};
    min-width: 24%;
    height: 40vh;
    min-height: 80vh;

    .item {
        color: ${props => props.theme.colors.navLinks};
        border: none;
        border-radius: 0;
        border-top: 1px solid ${props => props.theme.colors.navLinks};
        outline: none;
        box-shadow: none;
    }
    .buttonInput {
        background-color: ${props => props.theme.colors.backgroundBody};
        color: ${props => props.theme.colors.navLinks};
        border: 1px solid ${props => props.theme.colors.navLinks};
    }
    .btnYear {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 10px auto;
        padding: 0;
        align-items: center;
        gap: 10px;
    }
    .accordion-button:not(.collapsed) {
        color: var(--bs-accordion-btn-color);
        border: none;
        border-radius: 0;
        background: none;
        -webkit-appearance: none;
        outline: none;
        box-shadow: none;
    }
`;

export const CarsDiv = styled.div`
    width: inherit;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
`;
export const divCardsCars = styled.div`
    max-width: 23%;
    border-radius: 5px;
    min-height: auto;
    background-color: ${props => props.theme.colors.backgroundBody};
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    box-shadow: 0 1px 5px 0 rgb(70 70 70 / 15%), 0 2px 2px 0 rgb(70 70 70 / 15%), 0 3px 2px -2px rgb(70 70 70 / 15%);
    cursor: pointer;
    &:hover{
        transition: 0.4s;
        box-shadow: 0 3px 5px 0 rgb(70 70 70 / 25%), 0 2px 2px 0 rgb(70 70 70 / 25%), 0 3px 2px -2px rgb(70 70 70 / 25%);
    }
    .btnCheckCar {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }
    img {
        max-width: 100%;
        margin: -24px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .badge {
        position: relative;
        top: 0.4rem;
        width: 33%;
        right: 30%;
        background: yellow;
        color: #000;
        border-radius: 6px;
    }
    .descriptionCar {
        text-align: initial;
        margin-top: 1rem;
        padding: 15px;
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    }
    .descriptionCar span:first-child {
        font-size: 14pt;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .subDescription {
       
        color: ${props => props.theme.colors.navLinks};
    }
    .priceVehicle span:nth-child(1) {
        font-size: 18pt;
        color: ${props => props.theme.colors.accent};
    }
    .priceVehicle small {
        margin-left: 10px;
        font-size: 11pt;
        color: ${props => props.theme.colors.navLinks};
        text-decoration: line-through;
    }
`;
