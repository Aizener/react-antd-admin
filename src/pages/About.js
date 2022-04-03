import React from 'react'
import { Tag, Space } from 'antd'
import * as Icon from '@ant-design/icons'
import '../assets/scss/About.scss'
import IconFont from '../utils/IconFont'

export default function About() {
  const tags = [
    { title: 'Github', icon: 'GithubOutlined', color: '#333', url: 'https://github.com/Aizener' },
    { title: '个人博客', icon: <Space><IconFont type="icon-blogger"></IconFont></Space>, color: '#cd201f', url: 'http://yangxiang.cc'}
  ]

  const handleTurnPage = url => {
    window.open(url)
  }
  return (
    <div className="about">
      {
        tags.map(tag => (
          <Tag
          icon={
            typeof tag.icon === 'string'
              ? React.createElement(Icon[tag.icon])
              : tag.icon
            }
          key={tag.title}
          color={tag.color}
          onClick={() => {
            handleTurnPage(tag.url)
          }}>{tag.title}</Tag>
        ))
      }
    </div>
  )
}
