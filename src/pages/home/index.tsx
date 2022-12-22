import { useEffect, useState } from 'react';
import { BsSearch, BsBoxArrowInRight, BsFilter, BsArrowDown, BsInfoCircle } from 'react-icons/bs';
import * as H from './Style.styles';

import Header from '../components/header';
import Cards from '../components/cards';
import Footer from '../components/footer';

const Home = () => {
    const [isFilterVisible, setfilterVisible] = useState(true)
   
    useEffect(() => {
        document.title = "Verzel Inicio"
     }, []);
    return (
        <div>
            <Header />
            <H.SectionOne>
                <H.ButtonSearch>
                    <div className='container'>
                        <input type="text" className="search-input" placeholder="Busque por marca..." />
                        <button className="search-button">
                            <BsSearch />
                        </button>
                    </div>
                </H.ButtonSearch>

                <H.ButtonRedirect>
                    <button>
                        <div className='imgCar'>
                            <img src="https://images.kavak.services/br/assets/images/catalogue/jpg/top-banner-promo-sm.jpg" alt="" />
                        </div>
                        <div className='contentSubTitle'>
                            <p>
                                Seminovos em oferta &nbsp; <BsBoxArrowInRight />
                            </p>
                        </div>
                    </button>
                </H.ButtonRedirect>
            </H.SectionOne>
            <H.Home>
                <div className='textNewCar'>
                    <span>CARROS USADOS</span>
                </div>
                <H.ButtonsHeaderContent>
                    <div className='buttonsFilter'>
                        <div className='buttonsFilterSpace'>
                            <button
                                onClick={() => {
                                   setfilterVisible(!isFilterVisible)
                                }}
                            >
                                <BsFilter /> &nbsp; {isFilterVisible ? 'Mostrar Filtros': 'Ocultar Filtros'}</button>
                            <button>Remover Filtros</button>
                        </div>
                        <span>3.370 Resultados</span>
                    </div>
                    <div className="buttonOrderList">
                        <span>Ordenar:</span> <button>Relevancia <BsArrowDown /></button>
                    </div>
                </H.ButtonsHeaderContent>

                <Cards isFilterVisible={isFilterVisible} />
                <button className='help-button'><BsInfoCircle size={20} /> &nbsp; Ajuda</button>
            </H.Home>
            <Footer />
        </div>
    );
}

export default Home;