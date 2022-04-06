import React from 'react'
import './App.css'
import { HashRouter as Router, useRoutes } from 'react-router-dom'
import './utils/locale'
import routes from './router/routes'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const RouteTable = () => {
  return useRoutes(routes)
}

function App () {
  return (
    <Router>
      <RouteTable />
    </Router>
  )
}

export default App
