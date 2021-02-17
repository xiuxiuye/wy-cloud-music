import React, { useContext } from 'react'
import { StoreContext } from '../../../../../store/provider'
import { useHistory } from 'react-router-dom'
import MusicSheets from './assets/music-sheets'
import RelatedSongs from './assets/related-songs'

export default function SongRelations () {
  const store = useContext(StoreContext) as any
  const history = useHistory()

  function goToMusicSheet (id: number) {
    store.dispatch({ type: 'play/setDetails', value: false })
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

  return (
    <div className="wyy-music-song-relations">
      <div className="wyy-music-song-related">
        <span className="wyy-music-song-extras-title">包含这首歌的歌单</span>
        {MusicSheets.map((el, index) => <div key={index + 'relatedSheet'} className="wyy-music-song-related-item" onClick={() => goToMusicSheet(el.id)}>
          <img src={el.cover} alt=""/>
          <div className="wyy-music-song-related-item-content">
            <div>{el.title}</div>
            <div>播放：{el.played}万</div>
          </div>
        </div>)}
      </div>
      <div className="wyy-music-song-related">
        <span className="wyy-music-song-extras-title">相似歌曲</span>
        {RelatedSongs.map((el, index) => <div key={index + 'relatedSheet'} className="wyy-music-song-related-item" onClick={() => playSong(el.songs[0])}>
          <div className="songCover" style={{ backgroundImage: `url(${el.cover})` }}>
            <div className="playBtn">
              <span className="iconfont icon-caret-right" style={{ color: store.state.skin.colors.balanceColor }}></span>
            </div>
          </div>
          <div className="wyy-music-song-related-item-content">
            <div>{el.songs[0] && el.songs[0].title}</div>
            <div>{el.songs[0] && el.songs[0].singer}</div>
          </div>
        </div>)}
      </div>
    </div>
  )
}
