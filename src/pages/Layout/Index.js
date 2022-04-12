import React, { useState, useEffect, createContext } from 'react'
import { Layout } from 'antd'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import LayoutHeader from './Header'
import LayoutSlider from './Slider'
import MenuReducer from '../../store/MenuReducer'
import PersistedStore from '../../store/PersistedStore'
import { themes } from '../../store/ThemeReducer'
import '../../assets/scss/layout.scss'

const { Header, Sider, Content } = Layout

export default function Index() {
  const theme = themes.find(theme => theme.value === PersistedStore.getState().ThemeReducer.current)
  const [currentTheme, setCurrentTheme] = useState(theme)
  useEffect(()=>{
    const unsubscribe = PersistedStore.subscribe(() =>{
      const theme = themes.find(theme => theme.value === PersistedStore.getState().ThemeReducer.current)
      setCurrentTheme(theme)
    })
    return () => {
      unsubscribe()
    }  
  })
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(MenuReducer.getState().collapsed)
  useEffect(() => {
    MenuReducer.subscribe(() => {
      setCollapsed(MenuReducer.getState().collapsed)
    })
  }, [])
  return (
    <Layout style={currentTheme.style}>
      <Sider collapsed={collapsed}><LayoutSlider /></Sider>
      <Layout>
        <Header><LayoutHeader /></Header>
        <Content style={{padding: '15px'}}><Outlet /></Content>
      </Layout>
      { pathname === '/' && <Navigate to="/home" replace /> }
    </Layout>
  )
}
