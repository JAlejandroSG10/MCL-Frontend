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
        providerPhone: '',
        providerTaxStatus: ''
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
            <CFormInput type="text" id="providerName" name = "providerName" label="Name" value={providerData.providerName} onChange={handleChange} />
        </CCol>
        <CCol md={4}>
            <CFormInput type="text" id="providerAddress" name = "providerAddress" label="Address" value={providerData.providerAddress} onChange={handleChange} />
        </CCol>
        <CCol xs={6}>
            <CFormInput type="text" id="providerPhone" name = "providerPhone" label="Phone"  value={providerData.providerPhone} onChange={handleChange} />
        </CCol>
        <CCol md={6}>
            <CFormInput type="text" id="providerTaxStatus" name = "providerTaxStatus" label="Tax Status" value={providerData.providerTaxStatus} onChange={handleChange} />
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