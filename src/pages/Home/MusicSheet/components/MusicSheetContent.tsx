import React, { useState, useContext } from 'react'
import MusicSheetList from './MusicSheetList'
import { StoreContext } from '../../../../store/provider'

interface MusicSheetHeaderProps {
  musicSheet: any;
}

export default function MusicSheetContent ({ musicSheet }: MusicSheetHeaderProps) {
  const store = useContext(StoreContext) as any
  const [currentNav, setCurrentNav] = useState(0)
  const navs = ['歌曲列表', '评论（120938）', '收藏者']
  
  return (
    <div className="wyy-music-sheet-content">
      <div className={`wyy-music-sheet-content-nav ${store.state.skin.current ? '' : 'wyy-music-sheet-content-nav-dark'}`}>
        {navs.map((el, index) => <span key={index} className={currentNav === index ? 'wyy-music-sheet-content-nav-active' : ''} onClick={() => setCurrentNav(index)}>{el}</span>)}
      </div>
      <MusicSheetList musicSheet={musicSheet} />
    </div>
  )
}
