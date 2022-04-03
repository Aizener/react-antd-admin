import React from 'react'
import { Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { SubMenu } = Menu

const menus = [
  { path: '/home', title: '首页', icon: 'PieChartOutlined' },
  { path: '/about', title: '关于', icon: 'DesktopOutlined' },
  { path: '/multi', title: '多级菜单', icon: 'ApartmentOutlined', children: [
    { path: '/multi/page1', title: '第一级1', icon: 'MenuOutlined', children: [
      { path: '/multi/page1/one', title: '第一级1-1', icon: 'MenuOutlined' },
      { path: '/multi/page1/two', title: '第一级1-2', icon: 'MenuOutlined' },
    ] },
    { path: '/multi/page2', title: '第一级2', icon: 'MenuOutlined' },
  ] },
]

export default function Slider () {
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
            title={m.title}
            icon={React.createElement(Icon[m.icon])}
          >{resolveMenu(m.children)}</SubMenu>
        )
      } else {
        return <Menu.Item
          key={m.path}
          icon={React.createElement(Icon[m.icon])}
        >{m.title}</Menu.Item>
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
