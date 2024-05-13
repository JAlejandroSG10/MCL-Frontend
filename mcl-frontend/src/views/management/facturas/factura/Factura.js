import React, { useEffect, useState } from 'react';
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
} from '@coreui/react';

const Factura = () => {

  const [facturaData, setFacturaData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getFacturas = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listfactura'
      });
      const lstFacturas = Object.keys(response.data).map(i=> response.data[i]);
      setFacturaData(lstFacturas.flat());
    }

    getFacturas();
  },[]);

  function handleCreateFactura(event){
    navigate('/facturas/FacturaForm');
  }

  function handleEdit(facturaId){
    navigate(`/facturas/FacturaEditForm/${facturaId}`);
  }


  const handleDisable = async(facturaId) =>{
    try{
      var url = "http://localhost:1337/api/disablefactura/"+facturaId;
      const response = await Axios.put(url);
      window.location.reload();
    }
    catch(e){
      console.log(e);
    }
  }

  const columns = [
    {
      title: 'codeFactura',
      dataIndex: 'codeFactura'
    },
    {
      title: 'item',
      dataIndex: 'item'
    },
    {
      title: 'costoTotal',
      dataIndex: 'costoTotal'
    },
    {
      title: 'impuestos',
      dataIndex: 'impuestos'
    },
    {
      title: 'Options',
      render:(facturaId) =>(
        <div>
          <CButton color='primary' onClick={() => handleEdit(facturaId)}>Edit</CButton>
          <CButton color='danger' onClick={() => handleDisable(facturaId)}>Delete</CButton>
        </div>
      ),
    }
  ]

  return (
    <div>
    <CButton onClick={handleCreateFactura}> Nueva Factura </CButton>
    <CTable>
      <CTableHead>
        <CTableRow>
          {columns.map((column, index) => (
            <CTableHeaderCell key= {index}>{column.title}</CTableHeaderCell>
          ))}
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {facturaData.map((factura, index) => (
          <CTableRow key={index}>
            {columns.map((column, columnIndex) => (
              <CTableDataCell key={columnIndex}> 
                {column.title === 'Options' ? column.render(factura.facturaId) : factura[column.dataIndex]}
              </CTableDataCell>
            ))}
          </CTableRow>
        ))}
        
      </CTableBody>
    </CTable>
  </div>
  )
}

export default Factura
