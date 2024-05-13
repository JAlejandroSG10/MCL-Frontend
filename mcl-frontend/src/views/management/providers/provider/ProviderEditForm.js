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

const ProviderEditForm = () => {

    const navigate = useNavigate();
    const { providerId } = useParams();

    const [providerData, setProviderData] = useState({
        providerName: '',
        providerAddress: '',
        comercialRegistry: '',
        providerId: ''
    });


    useEffect(() =>{
        const getProviders = async() =>{
            const response = await Axios({
              url: 'http://localhost:1337/api/listproviders/supermarketNit'
            });
            const listProviders = Object.keys(response.data).map(i=> response.data[i]);
            setProviderData(lstSupermarkets.flat());
          } 
    });


    function handleChange(event){
        const {name, value} = event.target;
        setProviderData({
            ...providerData,
            [name]: value
        });
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await Axios.put(`http://localhost:1337/api/updateprovider/${providerId}`, providerData);
            console.log(response.data);
            navigate('/providers/provider');
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


export default ProviderEditForm;