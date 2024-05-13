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

const Provider = () => {

  const navigate = useNavigate();
  const [providerData, setProviderData] = useState([]);

  useEffect(()=>{
    const getProviders = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listproviders'
      });
      const lstProviders = Object.keys(response.data).map(i=> response.data[i]);
      setProviderData(lstProviders.flat());
    }

    getProviders();
  },[]);

  function handleCreateProviders (event){
    navigate('/providers/ProviderForm');
  }

  function handleEdit(providerId){
    navigate(`/providers/ProviderEditForm/${providerId}`);
  }

  const handleDisable = async(providerId) =>{
    try{
      var url = "http://localhost:1337/api/deleteprovider/"+providerId;
      const response = await Axios.put(url);
      window.location.reload();
    }
    catch(e){
      console.log(e);
    }
  }

  

  const columns = [
    {
      title: 'Name',
      dataIndex: 'providerName'
    },
    {
        title: 'Address',
        dataIndex: 'providerAddress'
    },
    {
        title: 'Phone',
        dataIndex: 'providerPhone'
      },
    {
      title: 'TaxStatus',
      dataIndex: 'providerTaxStatus'
    },
    
    {
      title: 'Options',
      render:(providerId) =>(
        <div>
          <CButton color='primary' onClick={() => handleEdit(providerId)}>Edit</CButton>
          <CButton color='danger' onClick={() => handleDisable(providerId)}>Delete</CButton>
        </div>
      ),
    }
  ]
  return(
    <div>
    <CButton onClick={handleCreateProviders}> New Provider </CButton>
    <CTable>
      <CTableHead>
        <CTableRow>
          {columns.map((column, index) => (
            <CTableHeaderCell key= {index}>{column.title}</CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {providerData.map((provider, index) => (
          <CTableRow key={index}>
            {columns.map((column, columnIndex) => (
              <CTableDataCell key={columnIndex}> 
                {column.title === 'Options' ? column.render(provider.providerId) : provider[column.dataIndex]}
              </CTableDataCell>
            ))}
          </CTableRow>
        ))}
        
      </CTableBody>
    </CTable>
  </div>
  )
}

export default Provider