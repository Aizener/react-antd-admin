import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import './utils/locale'
import routes from './router/routes'

import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Layout from './pages/Layout/Index'
import Home from './pages/Home'
import About from './pages/About'
import Multi from './pages/Multi'
import Page1 from './pages/MultiPage/Page1'
import Page2 from './pages/MultiPage/Page2'
import Page11 from './pages/MultiPage/Page11'
import Page12 from './pages/MultiPage/Page12'
import International from './pages/International'
import Authorization from './pages/Authorization'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')


const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token')
  console.log(token)
  if (token) {
    return children
  } else {
    return <Navigate to='/login' replace />
  }
}

const RouteTable = () => {
  return useRoutes(routes)
}

function App () {
  return (
    <Router>
      <RouteTable />
    </Router>
  )
  // render() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={
  //           <RequireAuth>
  //             <Layout />
  //           </RequireAuth>
  //         }>
  //           <Route index path="home" element={<Home />} />
  //           <Route path="about" element={<About />} />
  //           <Route path="multi" element={<Multi />}>
  //             <Route path="page1" element={<Page1 />}>
  //               <Route path="one" element={<Page11 />} />
  //               <Route path="two" element={<Page12 />} />
  //             </Route>
  //             <Route path="page2" element={<Page2 />} />
  //           </Route>
  //           <Route path="international" element={<International />} />
  //           <Route path="authorization" element={<Authorization />} />
  //         </Route>
  //         <Route path="/login" element={<Login />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </Router>  
  //   )
  // }
}

export default App
