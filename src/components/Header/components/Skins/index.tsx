import React, { useState, useContext } from 'react'
import ThemeSkins from './ThemeSkins'
import { StoreContext } from '../../../../store/provider'
import './index.scss'

export default function Skins () {
  const [currentNav, setCurrentNav] = useState(0)
  const store = useContext(StoreContext) as any

  return (
    <div className={`wyy-skins ${store.state.skin.current ? '' : 'wyy-skins-dark'}`}>
      <div className="wyy-skins-tabs">
        <span onClick={() => setCurrentNav(0)} className={currentNav === 0 ?'wyy-skins-tabs-current' : ''}>主题</span>
        <span onClick={() => setCurrentNav(1)} className={currentNav === 1 ?'wyy-skins-tabs-current' : ''}>纯色</span>
      </div>
      <ThemeSkins />
    </div>
  )
}
