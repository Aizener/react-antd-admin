import React from 'react'
import { Button } from 'antd'
import NotFound404 from '../assets/imgs/404.png'
import '../assets/scss/404.scss'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh'
    }}>
      <img
        src={NotFound404}
        alt="img not found."
        style={{
          width: '500px'
        }}
      />
      <div className="text">
        <h2 className="tip">啊哦，找不到页面啦o(╥﹏╥)o</h2>
        <div className="reson">
          <p>当您看到这个页面，</p>
          <p>说明该资源可能已经不存在或者没有权限访问，</p>
          <p>也有可能是访问的链接出错。</p>
        </div>
        <Button className="back-home" type="primary" onClick={() => {
          navigate('/home')
        }}>回到首页</Button>
      </div>
    </div>
  )
}
