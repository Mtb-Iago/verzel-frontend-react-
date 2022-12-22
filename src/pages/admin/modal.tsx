import { ChangeEvent, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Button } from "style-components";
import api from "../../services/api";

export function MyVerticallyCenteredModal(props: any) {
    const token = localStorage.getItem('_tokenUserVerzel')

    const [id, setId] = useState()
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [brand, setBrand] = useState('')
    const [year, setYear] = useState('')
    const [photo, setPhoto] = useState('')
    const [price, setPrice] = useState('')
    const [msgResponse, setMsgResponse] = useState('')


    function updateVehicle() {
        const id_vehicle = props.id_vehicle

        api.get('vehicle/' + id_vehicle,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            }
        ).then((response) => {
            setId(id_vehicle)
            setName(response.data.name)
            setYear(response.data.year)
            setPrice(response.data.price)
            setBrand(response.data.brand)
            setModel(response.data.model)

        }).catch((err) => {
            console.log(err);

        })
    }

    const handleSubmitInsertVehicle = (e: any) => {
        e.preventDefault();
        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('model', model)
        formdata.append('brand', brand)
        formdata.append('year', year)
        formdata.append('price', price)
        formdata.append('photo', photo)

        api.post('admin/vehicle',
            formdata,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data',
                }
            }
        ).then((response) => {
            setMsgResponse(response.data.message)
        }).catch((err) => {
            setMsgResponse(err.response.data.message)
        })
    }

    const handleFileChange = (e: any) => {
        setPhoto(e.target.files[0])
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Inserir Veículo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center flex-column">
                <Form className='col-12 d-flex justify-content-center flex-column'>
                    <Form.Group className="mb-3 col-12" controlId="formBasicInput">
                        <Form.Label>Nome do veículo</Form.Label>
                        <Form.Control
                            className='inputs'
                            type="text"
                            value={name}
                            placeholder="insira um nome para o veículo"
                            onChange={({ target }) => setName(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Marca do veículo</Form.Label>
                        <Form.Control
                            className='inputs'
                            type="text"
                            value={brand}
                            placeholder="insira um nome para o veículo"
                            onChange={({ target }) => setBrand(target.value)} />
                    </Form.Group>


                    <Form.Group className="mb-3 col-12" controlId="formBasicInput">
                        <Form.Label>Modelo do veículo</Form.Label>
                        <Form.Control
                            className='inputs'
                            type="text"
                            value={model}
                            placeholder="insira um nome para o veículo"
                            onChange={({ target }) => setModel(target.value)} />
                    </Form.Group>


                    <Form.Group className="mb-3 col-12" controlId="formBasicInput">
                        <Form.Label>Ano do veículo</Form.Label>
                        <Form.Control
                            className='inputs'
                            type="text"
                            value={year}
                            placeholder="insira um nome para o veículo"
                            onChange={({ target }) => setYear(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-12" controlId="formBasicInput">
                        <Form.Label>Preço do veículo</Form.Label>
                        <Form.Control
                            className='inputs'
                            type="text"
                            value={price}
                            placeholder="insira um nome para o veículo"
                            onChange={({ target }) => setPrice(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 col-12" controlId="formFile">
                        <Form.Label>Foto</Form.Label>
                        <input multiple name="file" type="file" onChange={(e) => handleFileChange(e)} />
                    </Form.Group>

                    <Button className="btn btn-success btn-lg " onClick={handleSubmitInsertVehicle}>
                        Salvar
                    </Button>

                </Form>
                {msgResponse ?
                    <Alert className="text-center alert-info m-4">
                        {msgResponse}
                    </Alert>
                    : ''
                }

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}