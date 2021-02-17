import React, { useContext } from 'react'
import { StoreContext } from '../../../../store/provider'
import SongDetails from './components/SongDetails'
import SongComments from './components/SongComments'
import SongRelations from './components/SongRelations'
import './index.scss'

function MusicDetails () {
  const store = useContext(StoreContext) as any
  const details = store.state.play.details

  function hidePlayingDetails () {
    store.dispatch({ type: 'play/setDetails', value: false })
  }

  return (
    <div className="wyy-music-details" style={{
        width: details ? '100%' : '0',
        height: details ? '100%' : '0',
        visibility: details ? 'visible' : 'hidden',
        backgroundColor: store.state.skin.colors.contentBGColor
      }}>
      <div className={`wyy-music-details-shrink-btn ${store.state.skin.current ? '' : 'wyy-music-details-dark-shrink-btn'}`} onClick={hidePlayingDetails}>
        <span className="iconfont icon-shrink"></span>
      </div>
      <div className={`wyy-music-details-content-wrapper ${store.state.skin.current ? 'scrollbar' : 'dark-scrollbar wyy-music-details-dark-content-wrapper'}`}>
        <SongDetails />
        <div className="wyy-music-song-extras">
          <SongComments />
          <SongRelations />
        </div>
      </div>
    </div>
  )
}

export default MusicDetails
