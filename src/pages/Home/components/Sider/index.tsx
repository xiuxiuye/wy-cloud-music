import React, { useContext } from 'react'
import SiderBlock from './SiderBlock'
import { StoreContext } from '../../../../store/provider'
import myFavoriteMusic from '../../../../assets/musicSheets/我喜欢的音乐/index'
import './index.scss'

const blocks = [
  {
    title: '推荐',
    list: [
      {
        title: '发现音乐',
        icon: 'icon-yinle',
        path: '/recommend/discover/personal'
      }
    ]
  },
  {
    title: '创建的歌单',
    foldable: true,
    newable: true,
    path: '/musicsheet/created',
    list: [
      {
        id: -1,
        title: '我喜欢的音乐',
        icon: 'icon-heart'
      },
      {
        id: 1,
        title: '吉尔伽美什的2019歌单',
        icon: 'icon-MUSIC'
      }
    ]
  }
]

export default function Sider () {
  const store = useContext(StoreContext) as any

  function isMayFavoriteMusic (id: Number) {
    return !!myFavoriteMusic.songs.find(el => el.id === id)
  }

  function showPlayingDetails () {
    store.dispatch({ type: 'play/setDetails', value: true })
  }

  return (
    <div className="wyy-sider" style={{ backgroundColor: store.state.skin.colors.siderBGColor }}>
      <div className={`wyy-sider-menu ${store.state.skin.current ? 'scrollbar' : 'wyy-sider-dark dark-scrollbar'}`}>
        {blocks.map((block, index) => <SiderBlock key={`siderBlock${index}`} title={block.title} data={block.list} block={block} />)}
      </div>
      <div className="wyy-play-simple-details" style={{ color: store.state.skin.current ? '' : 'white', borderTopColor: store.state.skin.current ? '' : 'rgba(255, 255, 255, 0.2)' }}>
        <div className="wyy-play-simple-details-cover-wrapper" style={{ animationPlayState: store.state.play.playing ? 'running' : 'paused' }}>
          <img src={store.state.play.current.cover} alt=""/>
          <div className="wyy-play-simple-details-check-btn" onClick={showPlayingDetails}>
            <span className="iconfont icon-arrawsalt"></span>
          </div>
        </div>
        <div className={`wyy-play-simple-details-title-wrapper ${store.state.skin.current ? '' : 'wyy-play-simple-details-title-wrapper-dark'}`}>
          <div>
            <span>{store.state.play.current.title}</span>
            {isMayFavoriteMusic(store.state.play.current.id) ? <span className="iconfont icon-heart-fill" style={{ color: store.state.skin.colors.balanceColor }}></span> : <span className="iconfont icon-heart"></span>}
          </div>
          <div>{store.state.play.current.singer}</div>
        </div>
      </div>
    </div>
  )
}
