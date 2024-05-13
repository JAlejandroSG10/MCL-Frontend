import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Supermarket = React.lazy(()=> import('./views/management/supermarkets/supermarket/Supermarket'))
const SupermarketForm = React.lazy(() => import('./views/management/supermarkets/supermarket/SupermarketForm'))
const SupermarketEditForm = React.lazy(() => import('./views/management/supermarkets/supermarket/SupermarketEditForm'))

const Factura = React.lazy(()=> import('./views/management/facturas/factura/Factura'))
const FacturaForm = React.lazy(() => import('./views/management/facturas/factura/FacturaForm'))
const FacturaEditForm = React.lazy(() => import('./views/management/facturas/factura/FacturaEditForm'))

const cliente = React.lazy(()=> import('./views/management/clientes/cliente/Cliente'))
const clienteForm = React.lazy(()=> import('./views/management/clientes/cliente/ClienteForm'))
const Provider = React.lazy(()=> import('./views/management/providers/provider/Provider'))
const ProviderForm = React.lazy(()=> import('./views/management/providers/provider/ProviderForm'))
const ProviderEditForm = React.lazy(()=> import('./views/management/providers/provider/ProviderEditForm'))

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
  { path: '/facturas/facturaEditForm/:facturaId', name: 'FacturaEditForm', element: FacturaEditForm},

  { path: '/clientes', name: 'clientes', exact: true},
  { path: '/clientes/cliente', name: 'cliente', element: cliente},
  { path: '/clientes/clienteForm', name: 'clienteForm', element: clienteForm},
  { path: '/clientes/clienteEditForm/:clientId', name: 'clienteForm', element: clienteForm},
  { path: '/providers', name: 'Providers', exact: true},
  { path: '/providers/provider', name: 'Provider', element: Provider},
  { path: '/providers/providerForm', name: 'ProviderForm', element: ProviderForm},
  { path: '/providers/providerEditForm/:providerId', name: 'ProviderEditForm', element: ProviderEditForm}
]

export default routes
