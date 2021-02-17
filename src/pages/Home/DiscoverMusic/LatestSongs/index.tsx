import React, { useContext, useState } from 'react'
import { StoreContext } from '../../../../store/provider'
import LatestSongs from './related-songs'
import util from '../../../../libs/util'
import './index.scss'

const songs = LatestSongs.reduce((pre, next) => {
  pre = pre.concat(next.songs)
  return pre
}, []).slice(0, 30)

songs.forEach((el: any, index: number) => {
  el.id = index
})

export default function MusicSheets () {
  const store = useContext(StoreContext) as any
  const [classifyIndex, setClassifyIndex] = useState(0)

  const classifies = ['华语', '欧美', '韩国', '日本']

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

  // 播放所有歌曲
  function playAllSongs () {
    store.dispatch({ type: 'play/setPlayList', value: songs})
    setCurrentPlayingSong(songs[0])
  }

  return (
    <div className={`wyy-recommend-discover-latest-songs ${store.state.skin.current ? '' : 'wyy-recommend-discover-latest-songs-dark'}`}>
      <div className="wyy-banner-wrapper">
        <div className="wyy-filter-banner"></div>
        <div className="wyy-banner-content">
          <img src={require('../../../../assets/image/banner.jpg')} alt=""/>
          <div className="wyy-banner-text-wrapper">
            <div>
              <span className="iconfont icon-crown"></span>
              <span>精品歌单</span>
            </div>
            <div>你的青春里有没有属于你的一首歌</div>
            <div>青春里的那首歌</div>
          </div>
        </div>
      </div>
      <div className="wyy-sub-nav">
        <div className="wyy-music-classify">
          {classifies.map((el, index) => <span key={index}
            className={classifyIndex === index ? 'active-classify' : ''}
            style={{
              color: classifyIndex === index ? store.state.skin.colors.balanceColor : ''
            }} onClick={() => setClassifyIndex(index)}>{el}</span>)}
        </div>
        <div className="wyy-sub-nav-btn play-all" style={{ backgroundColor: store.state.skin.colors.balanceColor }} onClick={playAllSongs}>
          <span className="iconfont icon-play-circle-fill"></span>
          <span>播放全部</span>
        </div>
        <div className="wyy-sub-nav-btn save-all">
          <span className="iconfont icon-Addadocument"></span>
          <span>收藏全部</span>
        </div>
      </div>
      <div className="wyy-music-songs-wrapper">
        {songs.map((el: any, index: number) => <div key={index + 'relatedSheet'} className="wyy-music-song-related-item" onClick={() => playSong(el)}>
          <span className="song-index">{index < 9 ? `0${index + 1}` : index + 1}</span>
          <div className="songCover" style={{ backgroundImage: `url(${LatestSongs[index % LatestSongs.length].cover})` }}>
            <div className="playBtn">
              <span className="iconfont icon-caret-right" style={{ color: store.state.skin.colors.balanceColor }}></span>
            </div>
          </div>
          <div className="wyy-music-song-related-item-content">
            <div>
              {el.title}
              <span style={{ borderColor: store.state.skin.colors.balanceColor, color: store.state.skin.colors.balanceColor }}>SQ</span>
              <span style={{ borderColor: store.state.skin.colors.balanceColor, color: store.state.skin.colors.balanceColor }}>MV</span>
            </div>
            <div>{el.singer}</div>
            <div>{el.title}</div>
            <div>{util.changeTimeFormat(el.duration)}</div>
          </div>
        </div>)}
      </div>
    </div>
  )
}
