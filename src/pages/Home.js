import React from 'react'
import '../assets/scss/Home.scss'
import { Card, Calendar, Transfer } from 'antd'
import * as Icon from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { Line } from '@ant-design/charts'

export default function Home() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    const cards = [{
      title: '拜访人数', icon: 'TeamOutlined', color: '#40c9c6', items: [
        { title: '今日访问', label: '10人' },
        { title: '总共访问', label: '100人' }
      ]
    }, {
      title: '组件数量', icon: 'CodeSandboxOutlined', color: '#36a3f7', items: [
        { title: '通用组件', label: '12个' },
        { title: '所有组件', label: '33个' }
      ]
    }, {
      title: 'Star数量', icon: 'GithubOutlined', color: '#f4516c', items: [
        { title: '关注数量', label: '100☆' },
      ]
    }, {
      title: '留言数量', icon: 'CommentOutlined', color: '#34bfa3', items: [
        { title: '今日留言', label: '33' },
        { title: '总共留言', label: '215' }
      ]
    }]
    setCards(cards)
  }, [])

  const data = [
    { name: 'Vue', year: 2017, value: 321 },
    { name: 'Vue', year: 2018, value: 777 },
    { name: 'Vue', year: 2019, value: 1212 },
    { name: 'Vue', year: 2020, value: 1333 },
    { name: 'Vue', year: 2021, value: 1585 },
    { name: 'Vue', year: 2022, value: 2119 },
    { name: 'React', year: 2017, value: 500 },
    { name: 'React', year: 2018, value: 812 },
    { name: 'React', year: 2019, value: 1321 },
    { name: 'React', year: 2020, value: 1530 },
    { name: 'React', year: 2021, value: 1689 },
    { name: 'React', year: 2022, value: 1921 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    legend: {
      position: 'top-right'
    },
    point: {
      shape: (item) => {
        if (item.name === 'Vue') {
          return 'circle';
        }
        return 'diamond'
      }
    },
    yAxis: {
      grid: {
        alternateColor: '#eee'
      }
    },
    annotations: [{
      type: 'region',
      start: ['0%', '0%'],
      end: ['20%', '10%'],
      top: true,
      style: {
        fill: '#5468ff',
        fillOpacity: 1,
        opacity: 1,
      },
    }, {
      type: 'text',
      position: ['10%', '5%'],
      content: 'Vue和React今年来关注数对比（纯属胡扯）',
      style: {
        fill: '#fff',
        fontSize: 12,
        textAlign: 'center',
        textBaseline: 'middle'
      },
    }],
    seriesField: 'name',
    smooth: true,
  }

  const todoList = ['学习React语法并完成官网教程', '学习Antd库，并尝试运用', '使用React/Redux/Ract-Router-Dom/Antd来搭建后台模板']
  const mockData = todoList.map((item, idx) => ({ key: idx, title: item}))
  const [targetKeys, setTargetKeys] = useState([])
  useEffect(() => {
    setTargetKeys([0, 1])
  }, [])
  const onChange = targetKeys => {
    setTargetKeys(targetKeys)
  }
  return (
    <>
      <div className="cards">
        {
          cards.map((card, cardIdx) => (
            <Card
              key={cardIdx}
              title={card.title}
              style={{ width: '25%' }}
              bodyStyle={{ padding: '10px' }}
              extra={
                React.createElement(Icon[card.icon], {
                  style: { fontSize: '22px', color: card.color }
                })
              }
            >
              {
                card.items.map((item, itemIdx) => (
                  <p className="card-title" key={itemIdx}>
                    <span>{item.title}</span>
                    <span>{item.label}</span>
                  </p>
                ))
              }
            </Card>
          ))
        }
      </div>
      <div className="line-charts">
        <Line {...config} />
      </div>
      <div className="bottom">
        <div className='bottom-item'>
          <Calendar fullscreen={false} locale={{
            lang: {
              locale: 'zh-cn',
              year: '年',
              month: '月'
            }
          }} />
        </div>
        <div className="bottom-item">
          <Transfer
            dataSource={mockData}
            titles={['代办事项', '完成事项']}
            targetKeys={targetKeys}
            onChange={onChange}
            listStyle={{
              flex: 1,
              height: '321px'
            }}
            render={item => item.title}
          />
        </div>
      </div>
    </>
  )
}
