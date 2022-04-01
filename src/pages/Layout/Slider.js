import React from 'react'
import { Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { SubMenu } = Menu

const menus = [
  { path: '/home', title: '首页', icon: 'PieChartOutlined' },
  { path: '/about', title: '关于', icon: 'DesktopOutlined' },
  { path: '/more', title: '而更多', icon: 'DesktopOutlined', children: [
    { path: '/page1', title: 'Page1', icon: 'PieChartOutlined' },
    { path: '/about2', title: '关于2', icon: 'DesktopOutlined' },
  ] },
]

export default function Slider () {
  const navigate = useNavigate()
  const handleClickMenuItem = e => {
    console.log(e)
    navigate(e.key)
  }

  const resolveMenu = menu => {
    return menu.map(m => {
      if (m.children) {
        return (
          <SubMenu key={m.path} title={m.title} icon={React.createElement(Icon[m.icon])}>
            {resolveMenu(m.children)}
          </SubMenu>
        )
      } else {
        return <Menu.Item key={m.path} icon={React.createElement(Icon[m.icon])}>{m.title}</Menu.Item>
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
