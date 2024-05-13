import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Supermarket = React.lazy(()=> import('./views/management/supermarkets/supermarket/Supermarket'))
const Provider = React.lazy(()=> import('./views/management/providers/provider/Provider'))
const ProviderForm = React.lazy(()=> import('./views/management/providers/provider/ProviderForm'))
const ProviderEditForm = React.lazy(()=> import('./views/management/providers/provider/ProviderEditForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/supermarkets', name: 'Supermarkets', exact: true},
  { path: '/supermarkets/supermarket', name: 'Supermarket', element: Supermarket},
  { path: '/providers', name: 'Providers', exact: true},
  { path: '/providers/provider', name: 'Provider', element: Provider},
  { path: '/providers/providerForm', name: 'ProviderForm', element: ProviderForm},
  { path: '/providers/providerEditForm/:providerId', name: 'ProviderEditForm', element: ProviderEditForm}
]

export default routes
