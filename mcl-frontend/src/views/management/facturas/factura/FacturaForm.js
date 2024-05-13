import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
    CForm,
    CCol,
    CFormInput,
    CButton
} from '@coreui/react'

const FacturaForm = () => {
    const navigate = useNavigate();

    const [facturaData, setFacturaData] = useState({
        codeFactura: '',
        item: '',
        costoTotal:'',
        impuestos: '',
    });

    function handleChange(event){
        const {name, value} = event.target;
        setFacturaData({
            ...facturaData,
            [name]: value
        });
    }

    function handleCancel(event){
        navigate('/facturas/factura');
    }

    const handleSubmit = async()=>{
        try{
            const response = await Axios.post('http://localhost:1337/api/createfactura', facturaData);
            console.log(response.data);
            navigate('/facturas/factura');
        }
        catch (e){
            console.log(e);
        }
    }

    return(
        <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={12}>
                <CFormInput type="text" id="codeFactura" name="codeFactura" label="codigo de factura" value={facturaData.codeFactura} onChange={handleChange} />
            </CCol>
            <CCol md={12}>
                <CFormInput type="text" id="item" name="item" label="item" value={facturaData.item} onChange={handleChange} />
            </CCol>
            <CCol xs={4}>
                <CFormInput type="text" id="costoTotal" name="costoTotal" label="costoTotal" value={facturaData.costoTotal} onChange={handleChange} />
            </CCol>
            <CCol md={12}>
                <CFormInput type="text" id="impuestos" name="impuestos" label="impuestos" value={facturaData.impuestos} onChange={handleChange} />
            </CCol>
            <CCol xs={6}>
                <CButton color="primary" type="submit" >Save</CButton>
            </CCol>
            <CCol xs={6}>
                <CButton color="secondary" onClick={handleCancel}>Cancel</CButton>
            </CCol>
        </CForm>
    )
}

export default FacturaForm