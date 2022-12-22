import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import api from '../../services/api';
import { TOKEN_KEY } from '../../services/auth';
import Header from '../components/header';
import * as L from './Style.styles';

const Login = () => {
    let history = useHistory();
    const [nameRegister, setNameRegister] = useState("");
    const [email, setEmail] = useState("");
    const [emailRegister, setEmailRegister] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [user, setUser] = useState({})
    const [msgRetorno, setMsgRetorno] = useState("");
    const [statusRetornoErro, setStatusRetornoErro] = useState();
    const [msgRetornoRegister, setMsgRetornoRegister] = useState("");
    const [statusRetornoErroRegister, setStatusRetornoErroRegister] = useState();

    useEffect(() => {
        document.title = "Verzel Login"
     }, []);

    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        const user = { email, password };

        api.post('login',
            user
        ).then((response) => {
            setUser(response.data.user)
            localStorage.setItem('_tokenUserVerzel', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            
            if(response.data.user.roles === "admin") {
                return history.push("/admin"); 
            }
            history.push("/");
        }).catch((err) => {
            setMsgRetornoRegister(err.response.data.message);
            setStatusRetornoErroRegister(err.response.data.error);
        })
    };

    const handleSubmitRegister = (e: any) => {
        e.preventDefault();
        const user = { name: nameRegister, email: emailRegister, password: passwordRegister };

        api.post('admin/user',
            user
        ).then((response) => {
            setMsgRetornoRegister(response.data.message);
        }).catch((err) => {
            setMsgRetornoRegister(err.response.data.message);
            setStatusRetornoErroRegister(err.response.data.error);
        })
    };

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        const loggedInUserToken = localStorage.getItem(TOKEN_KEY);
        if (loggedInUser && loggedInUserToken) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    return (

        <L.Login>
            <Header>
            </Header>
            <L.Container>
                <L.Content>
                    <h1>LOGIN</h1>
                    <Form className='col-8'>
                        <Form.Group className="mb-3 col-12" controlId="formBasicInput">
                            <Form.Label>Email de usuário</Form.Label>
                            <Form.Control
                                className='inputs'
                                type="text"
                                value={email}
                                placeholder="insira um email de usuário"
                                onChange={({ target }) => setEmail(target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                className='inputs'
                                type="password"
                                value={password}
                                placeholder="insira uma senha"
                                onChange={({ target }) => setPassword(target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={handleSubmitLogin}>
                            Entrar
                        </Button>

                    </Form>
                    {msgRetorno ?
                        statusRetornoErro ?
                            <Alert className='col-8 text-muted text-center alert alert-danger'>
                                {msgRetorno}
                            </Alert>
                            :
                            <Alert className='col-8 text-muted text-center alert alert-success'>
                                {msgRetorno}
                            </Alert> :
                        ''
                    }
                </L.Content>
                
                <L.Content>
                    <h1>Cadastra-se</h1>
                    <Form className='col-8'>
                        <Form.Group className="mb-3 col-12" controlId="formBasicInput">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                className='inputs'
                                type="text"
                                value={nameRegister}
                                placeholder="insira seu nome"
                                onChange={({ target }) => setNameRegister(target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3 col-12" controlId="formBasicInput">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className='inputs'
                                type="text"
                                value={emailRegister}
                                placeholder="insira um email de usuário"
                                onChange={({ target }) => setEmailRegister(target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                className='inputs'
                                type="password"
                                value={passwordRegister}
                                placeholder="insira uma senha"
                                onChange={({ target }) => setPasswordRegister(target.value)} />
                        </Form.Group>
                        
                        <Button variant="primary" type='button' onClick={handleSubmitRegister}>
                            Registre-se
                        </Button>

                    </Form>
                    {msgRetornoRegister ?
                        statusRetornoErroRegister ?
                            <Alert className='col-8 text-muted text-center alert alert-danger'>
                                {msgRetornoRegister}
                            </Alert>
                            :
                            <Alert className='col-8 text-muted text-center alert alert-success'>
                                {msgRetornoRegister}
                            </Alert> :
                        ''
                    }
                </L.Content>
            </L.Container>
        </L.Login>
    );
}

export default Login;