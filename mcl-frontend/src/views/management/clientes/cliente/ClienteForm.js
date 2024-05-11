import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import {
    CForm,
    CCol,
    CFormInput,
    CFormSelect,
    CButton
} from '@coreui/react'

const ClienteEditForm = () => {

    const { ClienteId } = useParams();
    const [ClienteData, setClienteData] = useState({
        clientId: '',
        clienteName: ''
    });

    useEffect(() =>{});

    function handleChange(event){
        const {name, value} = event.target;
        setClienteData({
            ...ClienteData,
            [name]: value
        });
    }

    const handleSubmit = async() => {
        try{
            const response = await Axios.put(`http://localhost:1337/api/updateCliente/${ClienteId}`, ClienteData);
            console.log(response.data);
        }
        catch (e){
            console.log(e);
        }
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
        <CCol md={12}>
            <CFormInput type="text" id="clientIde" name = "clientIde" label="Identification" value={ClienteData.clientId} onChange={handleChange} />
        </CCol>
        <CCol md={12}>
            <CFormInput type="text" id="ClientName" name = "ClientName" label="Name" value={ClienteData.clienteName} onChange={handleChange} />
        </CCol>
        
        <CCol xs={12}>
            <CButton color="primary" type="submit">Save</CButton>
        </CCol>
        <CCol xs={12}>
            <CButton color="primary" type="cancel">Cancel</CButton>
        </CCol>
    </CForm>
    )
}

export default ClienteEditForm