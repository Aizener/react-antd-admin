import React from 'react'
import { Radio } from 'antd'
import { useTranslation } from 'react-i18next'
import '../assets/scss/international.scss'
import {
  GlobalOutlined
} from '@ant-design/icons'

export default function International() {
  const { t, i18n } = useTranslation()
  const onChange = e => {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div className="international">
      <h2>
        <GlobalOutlined />
        {t('i18nObj.intro')}
      </h2>
      <Radio.Group onChange={onChange} defaultValue="zh">
        <Radio.Button value="zh">中文</Radio.Button>
        <Radio.Button value="en">English</Radio.Button>
      </Radio.Group>
      <p>{t('i18nObj.base')}</p>
    </div>
  )
}
