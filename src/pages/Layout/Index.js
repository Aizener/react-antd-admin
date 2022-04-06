import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import LayoutHeader from './Header'
import LayoutSlider from './Slider'
import MenuReducer from '../../store/MenuReducer'
import '../../assets/scss/layout.scss'

const { Header, Sider, Content } = Layout

export default function Index() {
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(MenuReducer.getState().collapsed)
  useEffect(() => {
    MenuReducer.subscribe(() => {
      setCollapsed(MenuReducer.getState().collapsed)
    })
  }, [])
  return (
    <Layout>
      <Sider collapsed={collapsed}><LayoutSlider /></Sider>
      <Layout>
        <Header><LayoutHeader /></Header>
        <Content style={{padding: '15px'}}><Outlet /></Content>
      </Layout>
      { pathname === '/' && <Navigate to="/home" replace /> }
    </Layout>
  )
}
