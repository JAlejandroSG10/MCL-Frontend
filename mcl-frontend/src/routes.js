import { element, exact } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Supermarket = React.lazy(()=> import('./views/management/supermarkets/supermarket/Supermarket'))
const SupermarketForm = React.lazy(() => import('./views/management/supermarkets/supermarket/SupermarketForm'))
const cliente = React.lazy(()=> import('./views/management/clientes/cliente/Cliente'))
const clienteForm = React.lazy(()=> import('./views/management/clientes/cliente/ClienteForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/supermarkets', name: 'Supermarkets', exact: true},
  { path: '/supermarkets/supermarket', name: 'Supermarket', element: Supermarket},
  { path: '/supermarkets/supermarketForm', name: 'SupermarketForm', element: SupermarketForm},
  { path: '/clientes', name: 'Clientes', exact: true},
  { path: '/clientes/cliente', name: 'Cliente', element: cliente},
  { path: '/clientes/clienteForm', name: 'ClienteForm', element: clienteForm}
]

export default routes
