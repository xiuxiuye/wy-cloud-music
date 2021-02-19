import React, { useState, useContext } from 'react'
import { StoreContext } from '../../../../store/provider'
import { useHistory, useLocation } from 'react-router-dom'

interface Block {
  title: string;
  list: Array<SiderBlockData>;
  foldable?: Boolean;
  newable?: Boolean;
  path?: string;
}

interface SiderBlockProps {
  title: string;
  data: Array<SiderBlockData>;
  block: Block;
}

interface SiderBlockData {
  id?: number;
  title: string;
  icon: string;
  path?: string;
}

export default function SiderBlock ({ title, data, block }: SiderBlockProps) {
  const [isExpand, setIsExpand] = useState(true)
  const store = useContext(StoreContext) as any
  const history = useHistory()
  const location = useLocation()

  const toggleExpand = () => setIsExpand(pre => !pre)
  const createSheet = (event: any) => {
    event?.stopPropagation()
  }

  function handleClick (listItem: SiderBlockData) {

    if (block.path) {
      history.push({ pathname: block.path, state: { id: listItem.id } })
    } else {
      history.push({ pathname: listItem.path })
    }
  }

  return (
    <div className="wyy-sider-menu-block">
      <div className="wyy-sider-menu-block-title" onClick={toggleExpand}>
        <span>{title}</span>
        {block.foldable ? <span className={isExpand ? 'iconfont icon-caret-down' : 'iconfont icon-caret-right'}></span> : null}
        {block.newable ? <span className="iconfont icon-plus" onClick={createSheet}></span> : null}
      </div>
      <div className="wyy-sider-menu-block-list">
        {isExpand && data.map(el => <div
          className={`wyy-sider-menu-block-list-item ${(block.path === location.pathname && el.id === (location as any).state.id) || (el.path === location.pathname) ? 'wyy-sider-menu-block-list-item-active' : ''}`}
          key={el.title}
          style={{borderLeftColor: (block.path === location.pathname && el.id === (location as any).state.id) || (el.path && location.pathname.includes(el.path)) ? store.state.skin.colors.balanceColor : ''}}
          onClick={() => handleClick(el)}>
            <span className={`iconfont ${el.icon}`}></span>
            <span>{el.title}</span>
          </div>)}
      </div>
    </div>
  )
}
