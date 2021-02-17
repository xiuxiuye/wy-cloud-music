import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { StoreContext } from '../../../../store/provider'
import musicSheets from './music-sheets'
import './index.scss'

export default function MusicSheets () {
  const store = useContext(StoreContext) as any
  const [classifyIndex, setClassifyIndex] = useState(0)
  const history = useHistory()

  function handleClick (id: number) {
    history.push({ pathname: '/musicsheet/created', state: { id } })
  }

  const classifies = ['华语', '流行', '摇滚', '电子', '另类独立', '轻音乐', '综艺', '影视原声', '民谣', 'ACG']

  return (
    <div className="wyy-recommend-discover-music-sheets">
      <div className="wyy-banner-wrapper">
        <div className="wyy-filter-banner"></div>
        <div className="wyy-banner-content">
          <img src={require('../../../../assets/image/banner1.jpg')} alt=""/>
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
      <div className={`wyy-music-sheet-classify ${store.state.skin.current ? '' : 'wyy-music-sheet-classify-dark'}`}>
        {classifies.map((el, index) => <span key={index}
          className={classifyIndex === index ? 'active-classify' : ''}
          style={{
            color: classifyIndex === index ? store.state.skin.colors.balanceColor : ''
          }} onClick={() => setClassifyIndex(index)}>{el}</span>)}
      </div>
      <div className="wyy-music-sheets-wrapper">
        {musicSheets.map((el, index) => <div key={`music-sheet--item-${index}`}
          className="wyy-music-sheet-list-item"
          onClick={() => handleClick(el.id)}>
          <div className="cover-wrapper">
            <img src={el.cover} alt="" title={el.title} />
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
  )
}
