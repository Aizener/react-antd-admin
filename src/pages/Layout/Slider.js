import React from 'react'
import { Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const { SubMenu } = Menu

const menus = [
  { path: '/home', title: 'home', icon: 'PieChartOutlined' },
  { path: '/about', title: 'about', icon: 'DesktopOutlined' },
  { path: '/multi', title: 'nested', icon: 'ApartmentOutlined', children: [
    { path: '/multi/page1', title: 'nested1', icon: 'MenuOutlined', children: [
      { path: '/multi/page1/one', title: 'nested11', icon: 'MenuOutlined' },
      { path: '/multi/page1/two', title: 'nested12', icon: 'MenuOutlined' },
    ] },
    { path: '/multi/page2', title: 'nested2', icon: 'MenuOutlined' },
  ] },
  { path: '/international', title: 'i18n', icon: 'GlobalOutlined' },
]

export default function Slider () {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleClickMenuItem = e => {
    navigate(e.key)
  }

  const resolveMenu = menu => {
    return menu.map(m => {
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
      theme="dark"
      onClick={handleClickMenuItem}
    >
      { resolveMenu(menus) }
    </Menu>
  )
}
