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

const Supermarket = () => {

  const navigate = useNavigate();
  const [SupermarketData, setSupermarketData] = useState([]);

  useEffect(()=>{
    const getSupermarkets = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listsupermarket'
      });
      const lstSupermarkets = Object.keys(response.data).map(i=> response.data[i]);
      setSupermarketData(lstSupermarkets.flat());
    }

    getSupermarkets();
  },[]);

  function handleCreateSupermarkets (event){
    navigate('/supermarkets/SupermarketForm');
  }

  function handleEdit(supermarketNit){
    //navigate(`/restaurants/RestaurantEditForm`);
  }

  const handleDisable = async(supermarketNit) =>{
    try{
      var url = "http://localhost:1337/api/disablesupermarket/"+supermarketNit;
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
      dataIndex: 'supermarketName'
    },
    {
        title: 'Address',
        dataIndex: 'supermarketAddress'
    },
    {
        title: 'ComercialRegistry',
        dataIndex: 'comercialRegistry'
      },
    {
      title: 'NIT',
      dataIndex: 'supermarketNit'
    },
    {
      title: 'Options',
    }
  ]
  return(
    <div>
      <CButton onClick={handleCreateSupermarkets}> New Supermarket </CButton>
      <CTable>
        <CTable>
          <CTableHead>
            <CTableRow>
              {columns.map((column, index) => (
                <CTableHeaderCell key = {index}>{column.title}</CTableHeaderCell>
              ))}
            </CTableRow>
          </CTableHead>
          <CTableBody>
              {SupermarketData.map((supermarket, index) => (
                <CTableRow key = {index}>
                  {columns.map((column, columnIndex) => (
                    <CTableDataCell key={columnIndex}> {supermarket[column.dataIndex]} </CTableDataCell>
                  ))} 
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
      </CTable>
    </div>
  )
}
export default Supermarket