import React, { useState, useEffect, useContext } from 'react'
import { HeaderContext } from '../../index'
import './index.scss'

interface HistoryListEl {
  id: number;
  name: string;
}

function SearchHistory () {
  const [historyList, setHistoryList] = useState(new Array(0))
  const getDataSucess = useContext(HeaderContext)
  
  useEffect(() => {
    // 模拟异步请求数据
    setTimeout(() => {
      const data = [
        { id: 1, name: '周杰伦' },
        { id: 2, name: '邓园长' },
        { id: 3, name: '大碗宽面' },
        { id: 4, name: '林俊杰-曹操' },
        { id: 5, name: '邓紫棋-光年之外' }
      ]
      setHistoryList(data)
      getDataSucess()
    }, 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="wyy-subsearch-history">
      <div className="wyy-subsearch-history-title">
        <span>搜索历史</span>
        <span className="icon iconfont icon-template_delete"></span>
      </div>
      <div className="wyy-subsearch-history-tags">
        {historyList.map(( el: HistoryListEl) => <span key={el.id} className="wyy-subsearch-history-tag">
            {el.name}
            <span className="iconfont icon-close wyy-subsearch-history-tag-closed"></span>
          </span>
        )}
      </div>
    </div>
  )
}

export default SearchHistory