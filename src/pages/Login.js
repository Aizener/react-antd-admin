import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import '../assets/scss/login.scss'
import LoginReducer from '../store/LoginReducer'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()
  const onFinish = user => {
    user.token = 'token'
    LoginReducer.dispatch({
      type: 'login/changeUser',
      user: user
    })
    navigate('/home')
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <h2>用户登录</h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          validateTrigger="onBlur"
        >
          <Form.Item
            label="用户名"
            name="username"
            labelCol={{span: 4}}
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            labelCol={{span: 4}}
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item style={{ marginBottom: '10px' }} name="remember" valuePropName="checked" wrapperCol={{ offset: 5, span: 19 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
