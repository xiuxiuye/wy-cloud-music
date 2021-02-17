import React, { useState, useContext } from 'react'
import { StoreContext } from '../../store/provider'
import { useHistory } from 'react-router-dom'
import SubSearch from './components/SubSearch/index'
import UserAccount from './components/UserAccount/index'
import Modal from '../Modal/index'
import OpenVIP from './components/OpenVIP/index'
import Skins from './components/Skins/index'
import './index.scss'

export const HeaderContext = React.createContext(() => {})

function Header () {
  const [isFocus, setIsFocus] = useState(false)
  const [isDataReady, setIsDataReady] = useState(0)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isInSubSearch, setIsInSubSearch] = useState(false)
  const [isSkinOpened, setIsSkinOpened] = useState(false)

  const store = useContext(StoreContext) as any
  const history = useHistory()

  function goHistoryBack () {
    store.dispatch({ type: 'play/setDetails', value: false })
    history.goBack()
  }

  function goHistoryForward () {
    store.dispatch({ type: 'play/setDetails', value: false })
    history.goForward()
  }

  function getDataSucess () {
    setIsDataReady(pre => pre + 1)
  }

  !isFocus && isDataReady !== 0 && setIsDataReady(0)

  return (
    <div className="wyy-header" style={{ backgroundColor: store.state.skin.colors.primaryColor, borderBottomColor: store.state.skin.colors.balanceColor }}>
      <div className="wyy-header-logo">
        <span className="iconfont icon-wangyiyunyinle wyy-header-logo-icon" style={{ color: store.state.skin.colors.primaryColor }}></span>
        <span className="wyy-header-logo-text">网易云音乐</span>
      </div>
      <div className="wyy-header-tools">
        <div className="wyy-header-tools-nav">
          <span className="iconfont icon-left" onClick={() => goHistoryBack()}></span>
          <span className="iconfont icon-right" onClick={() => goHistoryForward()}></span>
        </div>
        <div className="wyy-header-tools-search">
          <input type="text" onFocus={() => setIsFocus(true)} onBlur={() => !isInSubSearch && setIsFocus(false)} />
          <span className="iconfont icon-search wyy-header-tools-search-icon"></span>
          {isFocus ? null : <span className="wyy-header-tools-search-placeholder">搜索音乐，视频，歌词，电台</span>}
          {isFocus && <HeaderContext.Provider value={getDataSucess}>
              <SubSearch styles={{display: isDataReady === 2 ? 'block' : 'none'}} setIsInSubSearch={setIsInSubSearch} />
            </HeaderContext.Provider>}
        </div>
      </div>
      <div className="wyy-header-user">
        <UserAccount />
        <div className="wyy-header-user-vip"><span className="header-icon" onClick={() => setIsModalOpened(true)}>开通VIP</span></div>
        <div className="wyy-header-user-skin"
          tabIndex={0}
          onBlur={() => setIsSkinOpened(false)}>
          <span className="iconfont icon-skin header-icon" onClick={() => setIsSkinOpened(pre => !pre)}></span>
          {isSkinOpened && <Skins />}
        </div>
        <div className="wyy-header-user-mail">
          <span className="iconfont icon-mail header-icon"></span>
        </div>
        <div className="wyy-header-user-setting">
          <span className="iconfont icon-setting header-icon"></span>
        </div>
      </div>
      <Modal value={isModalOpened}>
        <OpenVIP onClose={setIsModalOpened} />
      </Modal>
    </div>
  )
}

export default Header
