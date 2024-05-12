import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

import {
    CForm,
    CCol,
    CFormInput,
    CButton
} from '@coreui/react'

const ClienteForm = () => {

    const { clientId } = useParams();
    const isAddMode = !clientId;
    const navigate = useNavigate();

    const [clientData, setClientData] = useState({});

    function handleChange(event){
        const {name, value} = event.target;
        setClientData({
            ...clientData,
            [name]: value
        });
    }

    const onSubmit = async() => {
        try{
            if(isAddMode){
                const response = await Axios.post('http://localhost:1337/api/createcliente', clientData);
                console.log(response.data);
            }else{
                const response = await Axios.put(`http://localhost:1337/api/updatecliente/${clientId}`, clientData);
                console.log(response.data);
            }
            navigate('/clientes/cliente');
        }
        catch (e){
            console.log(e);
        }
    }


    function handleCancel(event){
        navigate('/clientes/cliente');
    }


    useEffect(() => {

        const getClientById = async() => {
            try {
                const response = await Axios.get(`http://localhost:1337/api/getclientbyid/${clientId}`);
                const dataClient = response.data.data;
                if (dataClient) {
                    setClientData(dataClient)
                } else {
                    console.error('No se pudo obtener la información del cliente.');
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        }

        if (!isAddMode) {
            getClientById();   
        }
    }, []);

    return(
        <CForm className="row g-3" onSubmit={onSubmit}>
            <h2>{isAddMode ? 'Add User' : 'Edit User'}</h2>
        {!isAddMode && (
            <CCol md={12}>
                <CFormInput type="number" id="clientId" name="clientId" label="Id" value={clientData.clientId} onChange={handleChange} readOnly/>
            </CCol>
        )}
        <CCol md={12}>
            <CFormInput type="text"  id="clientFirstName" name = "clientFirstName" label="Fisrt Name" value={clientData.clientFirstName} onChange={handleChange} />
        </CCol>
        <CCol md={4}>
            <CFormInput type="text"  id="clientLastName" name = "clientLastName" label="Last Name" value={clientData.clientLastName} onChange={handleChange} />
        </CCol>
        <CCol xs={12}>
            <CButton color="primary" type="submit">Save</CButton>
        </CCol>
        <CCol xs={12}>
            <CButton color="secondary" onClick={handleCancel}>Cancel</CButton>
        </CCol>
    </CForm>
    )
}

export default ClienteForm