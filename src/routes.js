import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/new_buy_order', name: 'Buy', element: Dashboard },
  { path: '/new_sell_order', name: 'Sell', element: Dashboard },
  { path: '/my_orders/order', name: 'myOrders', element: Dashboard },
]

export default routes
