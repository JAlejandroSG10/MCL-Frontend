import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell
} from '@coreui/react'

const Cliente = () => {

  const [ClienteData, setClienteData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getClientes = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listcliente'
      });
      const lstClientes = Object.keys(response.data).map(i=> response.data[i]);
      //console.log(lstClientes);
      setClienteData(lstClientes.flat());
    }

    getClientes();
  },[]);

  function handleCreateCliente (event){
    navigate('/clientes/clienteForm');
  }

  function handleEdit (clientId){
    navigate(`/clientes/clienteEditForm/${clientId}`);
  }

  const handleDisable = async(clientId) =>{
    try{
      var url = "http://localhost:1337/api/disablecliente/"+clientId;
      const response = await Axios.put(url);
      window.location.reload();
    }catch(e){
      console.log(e);
    }

  }


  const columns = [
    {
      title: 'Id',
      dataIndex: 'clientId'      
    },
    {
      title: 'First Name',
      dataIndex: 'clientFirstName'
    },
    {
      title:'Last Name',
      dataIndex: 'clientLastName'
    },
    {
      title: 'Phone',
      dataIndex: 'clientPhone'
    },
    {
      title: 'Email',
      dataIndex: 'clientEmail'
    },
    {
      title: 'Address',
      dataIndex: 'clientAddress'
    },
    {
      title:'Options',
      render:(clientId) =>(
        <div>
          <CButton color='primary' onClick={() => handleEdit(clientId)}>Edit</CButton>
          <CButton color='danger' onClick={() => handleDisable(clientId)}>Delete</CButton>
        </div>
      ),
    }
  ]

  return (
    <div>
      <CButton onClick={handleCreateCliente}> New Cliente </CButton>
      <CTable>
        <CTableHead>
          <CTableRow>
            {columns.map((column, index) => (
              <CTableHeaderCell key= {index}>{column.title}</CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {ClienteData.map((Cliente, index) => (
            <CTableRow key={index}>
              {columns.map((column, columnIndex) => (
                <CTableDataCell key={columnIndex}> 
                  {column.title === 'Options' ? column.render(Cliente.clientId) : Cliente[column.dataIndex]} 
                </CTableDataCell>
              ))}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Cliente
