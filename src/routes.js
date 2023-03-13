import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const BuyOrders = React.lazy(() => import('./views/orders/BuyOrders'))
const SellOrders = React.lazy(() => import('./views/orders/SellOrders'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard},
  { path: '/buy_crypto', name: 'Buy', element: Dashboard },
  { path: '/sell_order', name: 'Sell', element: Dashboard },
  { path: '/sell_orders', name: 'Sells', element: SellOrders },
  { path: '/buy_orders', name: 'Buys', element: BuyOrders },
  { path: '/my_orders/order', name: 'myOrders', element: Dashboard },
]

export default routes
