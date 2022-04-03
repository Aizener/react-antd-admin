import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Page1() {
  return (
    <div style={{ background: 'green', padding: '15px' }}>
      Page1
      <Outlet />
    </div>
  )
}
