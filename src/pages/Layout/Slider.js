import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import routes from '../../router/routes'
import PersistedStore from '../../store/PersistedStore'

const { SubMenu } = Menu

const getCuurentThemeStyle = () => {
  const themeReducer = PersistedStore.getState().ThemeReducer
  const theme = themeReducer.themes.find(theme => theme.value === themeReducer.current)
  return theme.style
}

export default function Slider () {
  const [theme, setTheme] = useState(getCuurentThemeStyle().antdTheme)
  useEffect(() => {
    const unsubscribe = PersistedStore.subscribe(() => {
      setTheme(getCuurentThemeStyle().antdTheme)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  const generateMenus = (routes, path = '/') => {
    const menus = []
    routes.forEach(item => {
      const menuItem = {
        path: path + item.path,
        title: item.title,
        icon: item.icon
      }
      if (item.children) {
        menuItem.children = generateMenus(item.children, path + item.path + '/')
      }
      menus.push(menuItem)
    })
    return menus
  }

  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleClickMenuItem = e => {
    navigate(e.key)
  }

  const resolveMenu = menus => {
    return menus.map(m => {
      if (m.children) {
        return (
          <SubMenu
            key={m.path}
            title={t(m.title)}
            icon={React.createElement(Icon[m.icon])}
          >{resolveMenu(m.children)}</SubMenu>
        )
      } else {
        return <Menu.Item
          key={m.path}
          icon={React.createElement(Icon[m.icon])}
        >{t(m.title)}</Menu.Item>
      }
    })
  }

  return (
    <Menu
      mode="inline"
      theme={theme}
      onClick={handleClickMenuItem}
    >
      { resolveMenu(generateMenus(routes[0].children)) }
    </Menu>
  )
}
