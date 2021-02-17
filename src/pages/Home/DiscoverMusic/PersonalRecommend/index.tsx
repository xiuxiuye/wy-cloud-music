import React, { useContext } from 'react'
import { StoreContext } from '../../../../store/provider'
import { useHistory } from 'react-router-dom'
import Carousel from '../components/Carousel/index'
import images from './images'
import musicSheets from './music-sheets'
import latestSongs from './related-songs'
import './index.scss'

export default function PersonalRecommend () {
  const store = useContext(StoreContext) as any
  const history = useHistory()

  function handleClick (id: number) {
    history.push({ pathname: '/musicsheet/created', state: { id } })
  }

  function playSong (song: any) {
    if (!isSongExited(song.id)) {
      // 将当前播放歌曲添加到当前的播放列表
      updatePlayList(song)
      
    }
    setCurrentPlayingSong(song)
  }
  
  function isSongExited (id: number) {
    const songs = store.state.play.playList
    for (let i = 0; i < songs.length; i++) {
      if (id === songs[i].id) return true
    }
    return false
  }

  function setCurrentPlayingSong (song: any) {
    store.dispatch({ type: 'play/setCurrent', value: {...song, progress: 0} })
    store.dispatch({ type: 'play/setPlaying', value: true })
  }

  function updatePlayList (song: any) {
    store.dispatch({ type: 'play/setPlayList', value: [song, ...store.state.play.playList]})
  }

  function moreMusicSheets () {
    history.push({ pathname: '/recommend/discover/sheets' })
  }

  function moreLatestSongs () {
    history.push({ pathname: '/recommend/discover/latest' })
  }

  return (
    <div className="wyy-recommend-discover-music-personal">
      <Carousel images={images} />
      <div className="wyy-recommend-discover-music-personal-sheet">
        <div className={`wyy-recommend-discover-music-personal-title ${store.state.skin.current ? '' : 'wyy-recommend-discover-music-personal-title-dark'}`}>
          <span>推荐歌单</span>
          <span onClick={moreMusicSheets}>更多&gt;</span>
        </div>
        <div className="wyy-music-sheet-list">
          {musicSheets.map((el, index) => <div key={`personal-sheet-list-item-${index}`}
            className="wyy-music-sheet-list-item"
            onClick={() => handleClick(el.id)}>
            <div className="cover-wrapper">
              <img src={el.cover} style={{ filter: index === 0 ? 'blur(2px)' : '' }} alt="" title={el.title} />
              {index === 0 && <div className="daily-recommend-date" style={{ color: store.state.skin.colors.balanceColor }}>30</div>}
              <div className="play-icon"><span className="iconfont icon-caret-right" style={{ color: store.state.skin.colors.balanceColor }}></span></div>
            </div>
            <div className={`item-title ${store.state.skin.current ? '' : 'item-title-dark'}`} title={el.title}>{el.title}</div>
            <div className="play-count">
              <span className="iconfont icon-caret-right"></span>
              <span>{el.played > 99999 ? `${Math.round(el.played / 10000)}万` : el.played}</span>
            </div>
          </div>)}
        </div>
      </div>
      <div className="wyy-recommend-discover-music-personal-latest-songs">
        <div className={`wyy-recommend-discover-music-personal-title ${store.state.skin.current ? '' : 'wyy-recommend-discover-music-personal-title-dark'}`}>
          <span>最新音乐</span>
          <span onClick={moreLatestSongs}>更多&gt;</span>
        </div>
        <div className="wyy-recommend-discover-music-personal-latest-songs-content">
          {latestSongs.map((el, index) => <div key={index + 'relatedSheet'} className={`wyy-music-song-related-item  ${store.state.skin.current ? '' : 'wyy-music-song-related-item-dark'}`} onClick={() => playSong(el.songs[0])}>
            <div className="songCover" style={{ backgroundImage: `url(${el.cover})` }}>
              <div className="playBtn">
                <span className="iconfont icon-caret-right" style={{ color: store.state.skin.colors.balanceColor }}></span>
              </div>
            </div>
            <div className="wyy-music-song-related-item-content">
              <div>{el.songs[0] && el.songs[0].title}</div>
              <div>
                <span style={{ borderColor: store.state.skin.colors.balanceColor, color: store.state.skin.colors.balanceColor }}>SQ</span>
                <span style={{ borderColor: store.state.skin.colors.balanceColor, color: store.state.skin.colors.balanceColor }}>MV</span>
                {el.songs[0] && el.songs[0].singer}
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  )
}