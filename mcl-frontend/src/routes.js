import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Supermarket = React.lazy(()=> import('./views/management/supermarkets/supermarket/Supermarket'))
const SupermarketForm = React.lazy(() => import('./views/management/supermarkets/supermarket/SupermarketForm'))
const SupermarketEditForm = React.lazy(() => import('./views/management/supermarkets/supermarket/SupermarketEditForm'))
const Factura = React.lazy(()=> import('./views/management/facturas/factura/Factura'))
const FacturaForm = React.lazy(() => import('./views/management/facturas/factura/FacturaForm'))
const FacturaEditForm = React.lazy(() => import('./views/management/facturas/factura/FacturaEditForm'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/supermarkets', name: 'Supermarkets', exact: true},
  { path: '/supermarkets/supermarket', name: 'Supermarket', element: Supermarket},
  { path: '/supermarkets/supermarketForm', name: 'SupermarketForm', element: SupermarketForm},
  { path: '/supermarkets/supermarketEditForm/:supermarketId', name: 'SupermarketEditForm', element: SupermarketEditForm},
  { path: '/facturas', name: 'Facturas', exact: true},
  { path: '/facturas/factura', name: 'Factura', element: Factura},
  { path: '/facturas/facturaForm', name: 'FacturaForm', element: FacturaForm},
  { path: '/facturas/facturaEditForm/:facturaId', name: 'FacturaEditForm', element: FacturaEditForm}
]

export default routes
