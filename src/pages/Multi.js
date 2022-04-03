import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Multi() {
  return (
    <div className='multi' style={{
      color: '#fff',
      padding: '15px',
      boxShadow: '0 0 5px #ccc',
      background: 'tomato'
    }}>
      <p>这是顶层菜单</p>
      <Outlet />
    </div>
  )
}
