import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import LayoutHeader from './Header'
import LayoutSlider from './Slider'
import MenuReducer from '../../store/MenuReducer'

const { Header, Sider, Content } = Layout

export default function Index() {
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
        <Header style={{
          padding: '0 15px',
          background: '#fff',
          boxShadow: '0 2px 5px #ccc'
        }}><LayoutHeader /></Header>
        <Content style={{padding: '15px'}}><Outlet /></Content>
      </Layout>
    </Layout>
  )
}
