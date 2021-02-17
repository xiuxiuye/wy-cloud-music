import React, { useContext } from 'react'
import RouterView from '../../../router/index'
import { StoreContext } from '../../../store/provider'
import { useHistory } from 'react-router-dom'
import './index.scss'

interface DiscoverMusicProps {
  routes?: Array<any>
}

export default function DiscoverMusic (props: DiscoverMusicProps) {
  const store = useContext(StoreContext) as any
  const path = (props as any).location.pathname
  const history = useHistory()
  const navs = [
    { name: '个性推荐', path: '/recommend/discover/personal' },
    { name: '歌单', path: '/recommend/discover/sheets' },
    { name: '主播电台', path: '' },
    { name: '排行榜', path: '' },
    { name: '歌手', path: '' },
    { name: '最新音乐', path: '/recommend/discover/latest' }
  ]

  function toggleNav (path: string) {
    history.push({ pathname: path })
  }

  return (
    <div className={`wyy-recommend-discover-music ${store.state.skin.current ? 'scrollbar' : 'dark-scrollbar'}`}>
      <div className={`wyy-recommend-discover-music-navs ${store.state.skin.current ? '' : 'wyy-recommend-discover-music-navs-dark'}`}>
        {navs.map((el, index) => <span key={`nav${index}`}
          className={`${path === el.path ? 'wyy-recommend-discover-nav-active' : ''}`}
          style={{
            fontWeight: path === el.path ? 'bold' : 'normal',
            borderBottomColor: path === el.path ? store.state.skin.colors.balanceColor : '',
            color: path === el.path ? store.state.skin.colors.balanceColor : '',
          }} onClick={() => toggleNav(el.path)}>{el.name}</span>)}
      </div>
      <RouterView routes={props.routes} />
    </div>
  )
}
