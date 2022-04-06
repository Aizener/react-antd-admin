import React from 'react'
import { Button, Popover } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons'
import MenuReducer from '../../store/MenuReducer'
import UserReducer from '../../store/UserReducer'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const userInfo = UserReducer.getState().userInfo
  const navigate = useNavigate()
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
            <Button type="primary" onClick={() => {
              console.log('logout')
            }}>个人信息</Button>
            <Button type="text" style={{
              color: "#1890ff"
            }} onClick={() => {
              UserReducer.dispatch({
                type: 'user/logout'
              })
              navigate('/login')
            }}>登出</Button>
          </div>
        } title="当前身份：管理员">
          <span className="user-box">欢迎您，{ userInfo.username }</span>
        </Popover>
      </div>
    </div>
  )
}
