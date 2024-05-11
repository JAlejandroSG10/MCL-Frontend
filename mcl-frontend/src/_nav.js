import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilSpeedometer,
  cilFastfood,
  cibAboutMe
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
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
