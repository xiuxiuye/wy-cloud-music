import React, { useContext } from 'react'
import { StoreContext } from '../../../../store/provider'

interface MusicSheetHeaderProps {
  musicSheet: any;
}

export default function MusicSheetHeader ({ musicSheet }: MusicSheetHeaderProps) {
  const store = useContext(StoreContext) as any


  // 播放所有歌曲
  function playAllSongs () {
    const songs = musicSheet.songs
    store.dispatch({ type: 'play/setPlayList', value: songs})
    setCurrentPlayingSong(songs[0])
  }

  function setCurrentPlayingSong (song: any) {
    store.dispatch({ type: 'play/setCurrent', value: {...song, progress: 0} })
    store.dispatch({ type: 'play/setPlaying', value: true })
  }

  return (
    <div className="wyy-music-sheet-header">
      <img className="wyy-music-sheet-cover" src={musicSheet.cover} alt=""/>
      <div className={`wyy-music-sheet-desc ${store.state.skin.current ? '' : 'wyy-music-sheet-desc-dark'}`}>
        <div className="wyy-music-sheet-desc-1">
          <span style={{ color: store.state.skin.colors.balanceColor }}>歌单</span>
          <span>{musicSheet.title}</span>
        </div>
        <div className="wyy-music-sheet-desc-2">
          <img src={musicSheet.cover} alt=""/>
          <span style={{ color: store.state.skin.colors.balanceColor }}>{musicSheet.author}</span>
          <span>{musicSheet.createTime}创建</span>
        </div>
        <div className="wyy-music-sheet-desc-3">
          <div className="wyy-music-sheet-btn wyy-music-sheet-playall"
            style={{ backgroundColor: store.state.skin.colors.balanceColor, borderColor: store.state.skin.colors.balanceColor }} onClick={playAllSongs}>
            <span className="iconfont icon-caret-right"></span>
            <span>播放全部</span>
          </div>
          <div className="wyy-music-sheet-btn">
            <span className="iconfont icon-star"></span>
            <span>已收藏（{musicSheet.collected}）</span>
          </div>
          <div className="wyy-music-sheet-btn">
            <span className="iconfont icon-ArtboardCopy"></span>
            <span>已分享（{musicSheet.share}）</span>
          </div>
          <div className="wyy-music-sheet-btn">
            <span className="iconfont icon-download"></span>
            <span>下载全部</span>
          </div>
        </div>
        <div className="wyy-music-sheet-desc-4">
          <span>标签：</span>{Array.isArray(musicSheet.labels) && musicSheet.labels.map((label: string, index: number) => {
            if (index !== musicSheet.labels.length - 1) return <span key={label}>{label} / </span>
            return <span key={label}>{label}</span>
          })}
        </div>
        <div className="wyy-music-sheet-desc-4">
          <span>歌曲：{Array.isArray(musicSheet.songs) && <span style={{ color: store.state.skin.colors.balanceColor }}>{musicSheet.songs.length}</span>}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>播放：<span style={{ color: store.state.skin.colors.balanceColor }}>{musicSheet.played}</span></span>
        </div>
        <div className="wyy-music-sheet-desc-4">
          <span>简介：{musicSheet.desc}</span>
        </div>
      </div>
    </div>
  )
}
