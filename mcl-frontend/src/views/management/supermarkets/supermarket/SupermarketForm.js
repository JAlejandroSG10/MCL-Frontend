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

const SupermarketForm = () => {

    const navigate = useNavigate();

    const [supermarketData, setSupermarketData] = useState({
        supermarketName: '',
        supermarketAddress: '',
        comercialRegistry: '',
        supermarketNit: '',
        cityId: 0
    });

    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() =>{

        const getDepartments = async () => {
            const response = await Axios({url: 'http://localhost:1337/api/listdepartments'});
            const lstDepartments = Object.keys(response.data).map(i=> response.data[i]);
            setDepartments(lstDepartments.flat());
        }

        const getCities = async(departmentId) => {
            const response = await Axios({url: `http://localhost:1337/api/listcities/${departmentId}`});
            const lstCities = Object.keys(response.data).map(i => response.data[i]);
            setCities(lstCities.flat());
        }
        
        getDepartments();
        if(selectedDepartment !== "")
            getCities(selectedDepartment);

        

    },[selectedDepartment]);

    function handleSelectDepartments(event){
        setSelectedDepartment(event.target.value);
    }

    function handleSelectCities(event){
        setSelectedCity(event.target.value);
        setSupermarketData({
            ...supermarketData,
            cityId: event.target.value
        })
    }

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
        <CCol xs={4}>
            <CFormSelect id="departmentOptions" label = "Department" value={ selectedDepartment} onChange={handleSelectDepartments} >
                <option value="">Select a department</option>
                {departments.map(opcion =>(
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))}
            </CFormSelect>
        </CCol>
        <CCol xs={4}>
            <CFormSelect id="cityOptions" label = "City" value={ selectedCity} onChange={handleSelectCities} >
                <option value="">Select a city</option>
                {cities.map(opcion =>(
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))}
            </CFormSelect>
        </CCol>
        </CCol>
        <CCol md={4}>
            <CFormInput type="text" id="supermarketAddress" name = "supermarketAddress" label="Address" value={supermarketData.supermarketAddress} onChange={handleChange} />
        </CCol>
        <CCol xs={6}>
            <CFormInput type="text" id="comercialRegistry" name = "comercialRegistry" label="Registry"  value={supermarketData.comercialRegistry} onChange={handleChange} />
        </CCol>
        <CCol md={6}>
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