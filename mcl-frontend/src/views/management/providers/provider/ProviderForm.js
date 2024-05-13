import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import {
    CForm,
    CCol,
    CFormInput,
    CFormSelect,
    CButton
} from '@coreui/react'

const ProviderForm = () => {

    const navigate = useNavigate();

    const [providerData, setProviderData] = useState({
        providerName: '',
        providerAddress: '',
        comercialRegistry: '',
        providerId: ''
    });

   
    function handleChange(event){
        const {name, value} = event.target;
        setProviderData({
            ...providerData,
            [name]: value
        });
    }

    const handleSubmit = async() => {
        try{
            const response = await Axios.post('http://localhost:1337/api/addprovider', providerData);
            console.log(response.data);
        }
        catch (e){
            console.log(e);
        }
    }

    function handleCancel(event){
        navigate('/providers/provider');
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
        <CCol md={12}>
            <CFormInput type="text" id="providerName" name = "providerName" label="Name" value={supermarketData.supermarketName} onChange={handleChange} />
        </CCol>
        <CCol md={4}>
            <CFormInput type="text" id="providerAddress" name = "providerAddress" label="Address" value={supermarketData.supermarketAddress} onChange={handleChange} />
        </CCol>
        <CCol xs={6}>
            <CFormInput type="text" id="comercialRegistry" name = "comercialRegistry" label="Registry"  value={supermarketData.comercialRegistry} onChange={handleChange} />
        </CCol>
        <CCol md={6}>
            <CFormInput type="text" id="providerId" name = "providerId" label="ID" value={supermarketData.supermarketNit} onChange={handleChange} />
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

export default ProviderForm