import React from 'react'
import { Button, Popover } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons'
import MenuReducer from '../../store/MenuReducer'
import LoginReducer from '../../store/LoginReducer'

export default function Header() {
  const userInfo = LoginReducer.getState().userInfo
  console.log(userInfo)
  const toggleCollapsed = () => {
    MenuReducer.dispatch({
      type: 'menu/change'
    })
  }
  return (
    <div className="header">
      <Button type="primary" onClick={toggleCollapsed}>
        {React.createElement(MenuReducer.getState().collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <div className="header-right">
        <UserOutlined style={{
          fontSize: '20px'
        }} />
        <Popover content={
          <div>
            <Button ghost type="primary" onClick={() => {
              console.log('logout')
            }}>登出</Button>
          </div>
        } title="当前身份：管理员">
          <span className="user-box">欢迎您，{ userInfo.username }</span>
        </Popover>
      </div>
    </div>
  )
}
