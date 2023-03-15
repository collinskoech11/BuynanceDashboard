import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Primary',
  },
  {
    component: CNavItem,
    name: 'Buy Crypto',
    to: '/buy_crypto',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sell Crypto',
    to: '/sell_crypto',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'My Transaction History',
    to: '/my_orders/order',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Secondary',
  },
  {
    component: CNavItem,
    name: 'All Buy Orders',
    to: '/buy_orders',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Sell Orders',
    to: '/sell_orders',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,

  },
  {
    component: CNavItem,
    name: 'All Transactions History',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    to: '/buttons',
  },
  {
    component: CNavItem,
    name: 'Token Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    to:"/Notifications"
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: "FAQ's",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    to:"/faqs"
  },
  {
    component: CNavItem,
    name: "Terms and conditions",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    to:"/terms"
  },
  {
    component: CNavItem,
    name: 'Help',
    to:"/help",
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
