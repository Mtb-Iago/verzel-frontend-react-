import { Link } from 'react-router-dom';
import styled from "styled-components";
import { ActiveMenu } from '../../../types/item';


export const HeaderHome = styled.div`
    height: auto ;
    background-color: ${props => props.theme.colors.backgroundBody};
    margin-bottom: 10px;
`;
export const HeaderNav = styled.div`
    display: flex;
    flex-direction: row;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 5px auto auto auto;
    padding: 5px;
    background-color: ${props => props.theme.colors.backgroundBody};
`;
export const HeaderImg = styled.div`
    width: 10rem;
    height: auto;

    img {
        width: 100%;
        height: auto;
    }
`;
export const HeaderDivLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const HeaderLinks = styled(Link)<ActiveMenu>`
    padding: 10px;
    font-size: 1.2rem;
    text-decoration: none;
    align-items: center;
    display:flex;
    color: ${(props) => props.theme.color};
    justify-content: center;
    color: ${(props) => props.$is_active_route ? props.theme.colors.accent :  props.theme.colors.navLinks};
    &:hover{
        transition: 0.4s;
        opacity: 0.5;
    }

`;
