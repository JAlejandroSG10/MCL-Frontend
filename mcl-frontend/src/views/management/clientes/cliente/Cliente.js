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
    const getClientes = async(clientId) =>{
      const response = await Axios({
        url: `http://localhost:1337/api/listCliente:/${clientId}`
      });
      const lstClientes = Object.keys(response.data).map(i=> response.data[i]);
      //console.log(lstClientes);
      setClienteData(lstClientes.flat());
    }

    getClientes();
  },[]);

  function handleCreateCliente (event){
    navigate('/Clientes/ClienteForm');
  }

  function handleEdit (ClienteId){
    navigate('/Clientes/ClienteForm');
  }

  const handleDisable = async(ClientId) =>{
    try{
      var url = "http://localhost:1337/api/disableCliente/"+ClientId;
      const response = await Axios.put(url);
      window.location.reload();
    }catch(e){
      console.log(e);
    }

  }


  const columns = [
    {
      title: 'Ide',
      dataIndex: 'clientId'
    },{
      title:'Name',
      dataIndex: 'clientName'
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
                <CTableDataCell key={columnIndex}> {Cliente[column.dataIndex]} </CTableDataCell>
                
              ))}
            </CTableRow>
          ))}
          <CButton color='primary' onClick={handleUpdate}>Update</CButton>
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Cliente
