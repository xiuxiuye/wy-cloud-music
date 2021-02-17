import React, { useContext } from 'react'
import { StoreContext } from '../../../../store/provider'
import SearchHistory from '../SearchHistory/index'
import SearchHot from '../SearchHot/index'
import './index.scss'

interface SubSearchProps {
  styles: object;
  setIsInSubSearch: Function;
}

function SubSearch ({ styles, setIsInSubSearch }: SubSearchProps) {
  const store = useContext(StoreContext) as any

  return (
    <div className="wyy-subsearch" style={styles} onMouseEnter={() => setIsInSubSearch(true)} onMouseLeave={() => setIsInSubSearch(false)}>
      <div className={`wyy-subsearch-wrapper ${store.state.skin.current ? 'scrollbar' : 'dark-scrollbar'}`}>
        <SearchHistory />
        <SearchHot />
      </div>
    </div>
  )
}

export default SubSearch
