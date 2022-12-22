import React, { useState, useEffect } from 'react'
import * as C from './Style.styles';
import Accordion from 'react-bootstrap/Accordion';
import { Button, Input } from 'reactstrap';
import api from '../../../services/api';
import { ListVehicles } from '../../../types/item';



const Cards = (props: { isFilterVisible: boolean }) => {
    const [vehicles, setVehicles] = useState<ListVehicles>()
    const isFilterVisible = props.isFilterVisible

    useEffect(() => {
        api.get('vehicle').then((response) => {
            const data = response.data.map((e: any) => {
                return {
                    id: e.id,
                    name: e.name,
                    photo: e.photo,
                    brand: e.brand,
                    price: e.price,
                    model: e.model,
                    year: e.year
                }
            })
            setVehicles(data)

        }).catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <C.Container>
            <C.FilterDiv $is_active_filter={isFilterVisible}>
                <Accordion>
                    <Accordion.Item className='item' eventKey="0">
                        <Accordion.Header>Promoção</Accordion.Header>
                        <Accordion.Body>
                            <Button className='buttonInput'>Promoção Black Friday</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='item' eventKey="1">
                        <Accordion.Header>Compre um carro online</Accordion.Header>
                        <Accordion.Body>
                            <Button className='buttonInput'>Promoção Black Friday</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='item' eventKey="2">
                        <Accordion.Header>Localização - Estado e loja</Accordion.Header>
                        <Accordion.Body className='btnYear'>
                            <Button className='buttonInput'>Minas Gerais</Button>
                            <Button className='buttonInput'>Rio de Janeiro</Button>
                            <Button className='buttonInput'>São Paulo</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='item' eventKey="3">
                        <Accordion.Header>Marca e modelo</Accordion.Header>
                        <Accordion.Body>
                            <Input type='search' placeholder='Buscar por marca...' />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='item' eventKey="4">
                        <Accordion.Header>Ano</Accordion.Header>
                        <Accordion.Body className='btnYear'>
                            <Button className='buttonInput'>2022</Button>
                            <Button className='buttonInput'>2021</Button>
                            <Button className='buttonInput'>2020</Button>
                            <Button className='buttonInput'>2019</Button>
                            <Button className='buttonInput'>2018</Button>
                            <Button className='buttonInput'>2017</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='item' eventKey="5">
                        <Accordion.Header>Cor</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='item' eventKey="6">
                        <Accordion.Header>Assentos</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='item' eventKey="7">
                        <Accordion.Header>Combustível</Accordion.Header>
                        <Accordion.Body>
                            <Button className='buttonInput'>Diesel</Button>
                            <Button className='buttonInput'>Flex</Button>
                            <Button className='buttonInput'>Gasolina</Button>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </C.FilterDiv>
            <C.CarsDiv>
                {!vehicles?.[0] ? 'Veículos não cadastrados' : ''}
                {vehicles?.map((vehicle, index) => {
                    return (
                        <C.divCardsCars className='col-sm-6 col-car ng-star-inserted col-lg-4 col-xl-3'>
                            <button className='btnCheckCar'>
                                <div className='imgCar'>
                                    <div className='badge'>
                                        Promoção
                                    </div>
                                    <img src={vehicle.photo} alt="" />
                                </div>
                                <div className="descriptionCar">
                                    <span>{vehicle.name}</span>
                                    <div className='subDescription'>
                                        {vehicle.year} - 101.480 km - Minas gerais
                                    </div>
                                    <div className='priceVehicle'>
                                        <span>R$ {vehicle.price}</span> <small>R$ {Number(vehicle.price) + 2000}</small>
                                    </div>
                                </div>
                            </button>
                        </C.divCardsCars>
                    )
                })}
            </C.CarsDiv>
        </C.Container>
    );
}

export default Cards;