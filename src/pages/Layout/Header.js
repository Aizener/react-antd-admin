import React from 'react'
import { Button } from 'antd'
import MenuReducer from '../../store/MenuReducer'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

export default function Header() {
  const toggleCollapsed = () => {
    MenuReducer.dispatch({
      type: 'menu/change'
    })
  }
  return (
    <div>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(MenuReducer.getState().collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
    </div>
  )
}
