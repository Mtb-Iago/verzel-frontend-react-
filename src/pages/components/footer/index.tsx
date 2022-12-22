import * as F from './Style.styles';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <F.Footer>
            <F.Container>
                <F.rowOne>
                    <div className='imgFooter'>
                        <img src="https://www.verzel.com.br/static/media/logo_verzel.0335b665.svg" alt="" />
                    </div>
                    <div className='links'>
                        <div>
                            <a href="#">Comprar carro</a>
                            <a href="#">Vender carro</a>
                            <a href="#">App Kavak</a>
                            <a href="#">Onde estamos</a>
                        </div>
                        <div>
                            <a href="#">Preguntas frequentes</a>
                            <a href="#">Blog</a>
                            <a href="#">Guia de preços</a>
                            <a href="#">Carreiras</a>
                        </div>
                        <div>
                            <a href="#">Contato</a>
                            <a href="#">Imprensa</a>
                            <a href="#"><small>BR</small> Brasil</a>
                        </div>
                    </div>
                </F.rowOne>
                <F.rowTwo>
                    <a href="#"><FaFacebookSquare className='iconsSocial' /></a>
                    <a href="#"><FaInstagramSquare className='iconsSocial' /></a>
                    <a href="#"><FaLinkedinIn className='iconsSocial' /></a>
                    <a href="#"><img src="https://images.kavak.services/br/assets/images/general/svg/app-store.svg" width={120} alt="" /></a>
                    <a href='#'><img src="https://images.kavak.services/br/assets/images/general/svg/google-play.svg" width={120} alt="" />
                    </a>
                </F.rowTwo>
                <F.rowThree>
                    <hr />
                    <div>
                        <span>Copyright © 2022 KAVAK. Todos os direitos reservados.</span>
                        <a href="#">&nbsp; · &nbsp;Política de Privacidade</a>
                        <a href="#">&nbsp; · &nbsp;Termos e condições</a>
                        <a href="#">&nbsp; · &nbsp;Definições de cookies</a>
                    </div>
                    <div>
                        <span>KAVAK TECNOLOGIA E COMERCIO DE VEICULOS LTDA., inscrita no CNPJ sob o nº 36.740.390/0001-83, com sede na Estrada dos Alpes, nº 855, Galpão A, Módulo 1, Jardim Belval, Barueri/SP, CEP 06.423-080</span>
                    </div>
                </F.rowThree>
            </F.Container>
        </F.Footer>
    );
}

export default Footer;