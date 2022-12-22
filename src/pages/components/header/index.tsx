import { useEffect, useState } from 'react'
import { BsPerson, BsArrowBarRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { isAuthenticated, TOKEN_KEY } from '../../../services/auth';
import * as H from './Style.styles';

const Header = (props: any) => {
    const pathname = useLocation().pathname
    const [isAuthenticate, setIsAuthenticate] = useState(isAuthenticated)

    const handleLogout = () => {
        setIsAuthenticate(false)
        localStorage.clear();
    };

    useEffect(() => {
        if (!localStorage.getItem(TOKEN_KEY)) {
            return setIsAuthenticate(false)
        }
    }, [])

    return (
        <H.HeaderHome>
            <H.HeaderNav>
                <H.HeaderImg>
                    <img src="https://www.verzel.com.br/static/media/logo_verzel.0335b665.svg" alt="" />
                </H.HeaderImg>
                <H.HeaderDivLinks>
                    <H.HeaderLinks $is_active_route={pathname === '/' ? true : false} to="/">
                        Comprar Carro
                    </H.HeaderLinks>
                    <H.HeaderLinks $is_active_route={false} to="#">
                        Vender Carro
                    </H.HeaderLinks>
                    <H.HeaderLinks $is_active_route={false} to="#">
                        App Kavak
                    </H.HeaderLinks>
                    <H.HeaderLinks $is_active_route={false} to="#">
                        Sobre nós
                    </H.HeaderLinks>

                    {isAuthenticate ?
                        <H.HeaderLinks $is_active_route={false} to={'/'} onClick={handleLogout}>
                            Logout <BsArrowBarRight style={{ marginTop: 3, marginRight: 3, fontSize: 22 }} />
                        </H.HeaderLinks>
                        :
                        <H.HeaderLinks $is_active_route={pathname === '/login' ? true : false} to="/login">
                            <BsPerson style={{ marginTop: 3, marginRight: 3, fontSize: 22 }} /> Cadastra-se
                        </H.HeaderLinks>}


                </H.HeaderDivLinks>
            </H.HeaderNav>
        </H.HeaderHome >
    );
}

export default Header;