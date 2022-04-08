import React, { useState } from 'react'
import style from '../assets/scss/theme.module.scss'
import Store from '../store/PersistedStore'

export default function Theme() {
  const ThemeStore = Store.getState().ThemeReducer
  const themes = ThemeStore.themes
  const idx = themes.findIndex(theme => theme.value === ThemeStore.current)
  const [active, setActive] = useState(idx)

  return (
    <div className={style.theme}>
      <h2 className={style.title}>请选择网站主题</h2>
      <div className={style.theme_list}>
        {
          themes.map((item, idx) => (
            <div
              key={idx}
              className={`${style.theme_item} ${idx === active && style.active}`}
              onClick={() => {
                setActive(idx)
                Store.dispatch({ type: 'theme/change', payload: item.value })
              }}
            >{item.title}</div>
          ))
        }
      </div>
    </div>
  )
}
