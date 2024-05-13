import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilSpeedometer,
  cilFastfood,
  cilNoteAdd,
  cibAboutMe,
  cilAddressBook
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },{
    component: CNavTitle,
    name: 'Management'
  },
  {
    component: CNavGroup,
    name: 'Supermarket',
    to: '/supermarket',
    icon: <CIcon icon={cilFastfood} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Supermarket',
        to: '/supermarkets/supermarket',
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Cliente',
    to: '/Cliente/Cliente',
    icon: <CIcon icon={cibAboutMe} customClassName="nav-icon"/>,
    items: [
      {
        component: CNavItem,
        name: 'Cliente',
        to: '/clientes/cliente',
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Factura',
    to: '/factura',
    icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Factura',
        to: '/facturas/factura'
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Provider',
    to: '/provider',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Provider',
        to: '/providers/provider'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
