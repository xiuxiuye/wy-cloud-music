import React, { useContext } from 'react'
import { StoreContext } from '../../../../store/provider'
import util from '../../../../libs/util'

interface MusicSheetHeaderProps {
  musicSheet: any;
}

export default function MusicSheetList ({ musicSheet }: MusicSheetHeaderProps) {
  const store = useContext(StoreContext) as any

  function handleDoubleClick (song: any) {
    if (!isSongExited(song.id)) {
      // 将当前播放列表替换为当前歌单
      updatePlayList(musicSheet.songs)
      
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

  function updatePlayList (songs: Array<any>) {
    store.dispatch({ type: 'play/setPlayList', value: [...songs]})
  }

  return (
    <div className={`wyy-music-sheet-list ${store.state.skin.current ? '' : 'wyy-music-sheet-list-dark'}`}>
      <div className="wyy-music-sheet-list-header wyy-music-sheet-list-header-row">
        <div></div>
        <div>音乐标题</div>
        <div>歌手</div>
        <div>专辑</div>
        <div>时长</div>
      </div>
      <div className="wyy-music-sheet-list-body">
        {
          Array.isArray(musicSheet.songs) && musicSheet.songs.map((song: any, index: number) => 
          <div className={`wyy-music-sheet-list-body-row ${store.state.play.current.id === song.id ? 'wyy-music-sheet-list-body-row-active' : ''}`} key={song.id} onDoubleClick={() => handleDoubleClick(song)}>
            <div>
              {store.state.play.current.id === song.id ? <span className="iconfont icon-shengyin" style={{ color: store.state.skin.colors.balanceColor }}></span> : <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>}
              <span className={`iconfont ${musicSheet.id === -1 ? 'icon-heart-fill' : 'icon-heart'}`} style={{ color: musicSheet.id === -1 ? store.state.skin.colors.balanceColor : '' }}></span>
              <span className="iconfont icon-download"></span>
            </div>
            <div>
              <span style={{ color: store.state.play.current.id === song.id ? store.state.skin.colors.balanceColor : '' }}>{song.title}</span>
              <span style={{ color: store.state.skin.colors.balanceColor, borderColor: store.state.skin.colors.balanceColor }}>SQ</span>
              <span style={{ color: store.state.skin.colors.balanceColor, borderColor: store.state.skin.colors.balanceColor }}>MV</span>
            </div>
            <div>{song.singer}</div>
            <div>{song.title}</div>
            <div>{util.changeTimeFormat(song.duration)}</div>
          </div>)
        }
      </div>
    </div>
  )
}
