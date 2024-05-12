import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import {
    CForm,
    CCol,
    CFormInput,
    CButton
} from '@coreui/react'

const SupermarketForm = () => {

    const navigate = useNavigate();

    const [supermarketData, setSupermarketData] = useState({
        supermarketName: '',
        supermarketAddress: '',
        comercialRegistry: '',
        supermarketNit: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        setSupermarketData({
            ...supermarketData,
            [name]: value
        });
    }

    const handleSubmit = async() => {
        try{
            const response = await Axios.post('http://localhost:1337/api/createsupermarket', supermarketData);
            console.log(response.data);
        }
        catch (e){
            console.log(e);
        }
    }

    function handleCancel(event){
        navigate('/supermarkets/supermarket');
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
        <CCol md={12}>
            <CFormInput type="text" id="supermarketName" name = "supermarketName" label="Name" value={supermarketData.supermarketName} onChange={handleChange} />
        </CCol>
        <CCol md={4}>
            <CFormInput type="text" id="supermarketAddress" name = "supermarketAddress" label="Address" value={supermarketData.supermarketAddress} onChange={handleChange} />
        </CCol>
        <CCol xs={4}>
            <CFormInput type="text" id="comercialRegistry" name = "comercialRegistry" label="Registry"  value={supermarketData.comercialRegistry} onChange={handleChange} />
        </CCol>
        <CCol md={4}>
            <CFormInput type="text" id="supermarketNit" name = "supermarketNit" label="Nit" value={supermarketData.supermarketNit} onChange={handleChange} />
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

export default SupermarketForm