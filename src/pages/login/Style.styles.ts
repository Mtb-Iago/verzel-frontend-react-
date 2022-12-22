import styled from "styled-components";

export const Login = styled.div`
    min-height: 80vh;
    justify-content: center;
    margin: auto;
    display: flex;
    flex-direction: column;
`;
export const Content = styled.div`
    

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    button {
        width: 100%;
    }
    .alert {
        margin-top: 20px;
    }
    .inputs {
        width: 100%;
    }
`;
export const Container = styled.div`
    justify-content: center;
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
`;