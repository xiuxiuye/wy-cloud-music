import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { StoreContext } from '../../../store/provider'
import MusicSheetHeader from './components/MusicSheetHeader'
import MusicSheetContent from './components/MusicSheetContent'
import './index.scss'

interface MusicSheets {
  [propName: string]: object;
}

const musicSheets: MusicSheets = {}
const files = require.context('../../../assets/musicSheets', true, /\.js$/)
files.keys().forEach(key => {
  const sheet = files(key).default
  musicSheets[sheet.id] = sheet
})

export default function MusicSheet (props: any) {
  const [ musicSheet, setMusicSheet ] = useState({})
  const location = useLocation()
  const store = useContext(StoreContext) as any
  
  useEffect(() => {
    setMusicSheet(musicSheets[(location as any).state.id])
  }, [location])
  return (
    <div className={`wyy-music-sheet ${store.state.skin.current ? 'dark-scrollbar' : 'scrollbar'}`}>
      <MusicSheetHeader musicSheet={musicSheet} />
      <MusicSheetContent musicSheet={musicSheet} />
    </div>
  )
}
