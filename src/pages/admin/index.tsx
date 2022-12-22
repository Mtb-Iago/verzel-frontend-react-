import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { Button } from 'reactstrap';
import api from '../../services/api';
import { ListVehicles } from '../../types/item';
import Header from '../components/header';
import { MyVerticallyCenteredModal } from './modal';
import * as A from './Style.styles';



const Admin = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [msgDelete, setMsgDelete] = React.useState('');
    const [update, setUpdate] = React.useState(false);
    const [id_vehicle, SetIdVehicle] = React.useState();
    const [vehicles, setVehicles] = useState<ListVehicles>()
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
            setMsgDelete('')
        }).catch((e) => {
            console.log(e);
        })
        console.log('effect');

    }, [modalShow, msgDelete])

    const handleButtonDelete = (e: any) => {
        const token = localStorage.getItem('_tokenUserVerzel')
        api.delete('admin/vehicle/'+e,{
            headers: {
            Authorization: 'Bearer ' + token
        }
        }).then((response) => {
            setMsgDelete(response.data.message)
        }).catch((err) => {
            console.log(err.data);
        })
        
    }

    const handleButtonUpdate = (e: any) => {
        setModalShow(true)
        setUpdate(true)
        SetIdVehicle(e)
    }
    return (
        <A.Div>
            <Header></Header>
            <A.Admin>
                <h1>Veículos</h1>
                <Button className='btn btn-success btn-lg d-flex m-5 align-items-start justify-content-start' variant="primary" onClick={() => setModalShow(true)}>
                    Inserir veículos
                </Button>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Ano</th>
                            <th>preço</th>
                            <th className='col-1'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles?.map((vehicle, index) => {
                            return (
                                <tr key={index}>
                                    <td>{vehicle.id}</td>
                                    <td width={110}><img src={vehicle.photo} alt="" width={100} height={100} /></td>
                                    <td>{vehicle.name}</td>
                                    <td>{vehicle.brand}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.year}</td>
                                    <td>{vehicle.price}</td>
                                    <td className='d-flex col-12 justify-content-center align-items-center'>
                                        <div className='col-6'>
                                            <Button onClick={() =>handleButtonUpdate(vehicle.id)} className='btn btn-sx btn-success'><BsPencil></BsPencil></Button>
                                        </div>
                                        <div className='col-6'>
                                            <Button onClick={() =>handleButtonDelete(vehicle.id)}  className='btn btn-sx btn-danger'><BsTrash></BsTrash></Button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </A.Admin>
            <MyVerticallyCenteredModal
                show={modalShow}
                update={update}
                id_vehicle={id_vehicle}
                onHide={() => setModalShow(false)}
            />
        </A.Div >
    );
}

export default Admin;