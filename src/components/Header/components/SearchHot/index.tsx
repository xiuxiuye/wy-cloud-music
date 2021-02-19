import React, { useState, useEffect, useContext } from 'react'
import { HeaderContext } from '../../index'
import { StoreContext } from '../../../../store/provider'
import './index.scss'

interface HotListEl {
  id: number;
  title: string;
  subTitle: string;
  hot: number;
  type: number; // 0：普通，1：hot，2：new
}

function SearchHistory () {
  const [hotList, setHotList] = useState(new Array(0))
  const getDataSucess = useContext(HeaderContext)
  const store = useContext(StoreContext) as any
  
  useEffect(() => {
    // 模拟异步请求数据
    setTimeout(() => {
      const data = [
        { id: 1, title: '是想你的声音啊', subTitle: '我在哼你最爱听的旋律', hot: 2749156, type: 1 },
        { id: 2, title: '画画的baby', subTitle: '奔驰的小野马 和带刺的玫瑰', hot: 2420700, type: 1 },
        { id: 3, title: '不曾遗忘的符号', subTitle: '苏州评弹邂逅痛仰乐队！', hot: 2370343, type: 1 },
        { id: 4, title: '猪猪侠', subTitle: '噜啦噜啦咧 猪猪侠来了！', hot: 2358785, type: 2 },
        { id: 5, title: '鲸落', subTitle: '巨鲸落 万物生', hot: 2747083, type: 2 },
        { id: 6, title: '永不失联的爱', subTitle: '你是我 这一辈子都不想失联的爱', hot: 2098689, type: 1 },
        { id: 7, title: '薛之谦', subTitle: '老薛一发歌就能掀起狂潮！', hot: 1621021, type: 0 },
        { id: 8, title: '他一定很爱你', subTitle: '我应该在车底 不应该在车里', hot: 1173198, type: 2 },
        { id: 9, title: '房东的猫 所念皆是星河', subTitle: '渺小苍尘 唯爱永恒', hot: 894263, type: 1 },
        { id: 10, title: '中国新说唱2020', subTitle: '这个夏天，让我们再次重塑中文说唱', hot: 802193, type: 0 },
        { id: 11, title: '信仰', subTitle: '我爱你 是多么温暖多么勇敢的力量', hot: 762010, type: 0 },
        { id: 12, title: '张杰', subTitle: '张杰带你穿越人海', hot: 710804, type: 0 },
        { id: 13, title: '偏爱', subTitle: '仙剑三 满满的回忆', hot: 686053, type: 0 },
        { id: 14, title: '情人', subTitle: '气氛开始升温 危险又迷人', hot: 645960, type: 0 },
        { id: 15, title: '他是曾经', subTitle: '他曾说的话 有没有兑现？', hot: 645615, type: 2 },
        { id: 16, title: '林俊杰', subTitle: '当之无愧的行走CD机！', hot: 643291, type: 0 },
        { id: 17, title: '小苹果', subTitle: '你一定记得这首歌的旋律', hot: 621885, type: 0 },
        { id: 18, title: '毛不易', subTitle: '深情的唱作人毛不易！', hot: 597720, type: 0 },
        { id: 19, title: '好运来', subTitle: '锦鲤歌曲伴你成功上岸！', hot: 585051, type: 0 },
        { id: 20, title: '华晨宇', subTitle: '花花的歌声里 有少年的孤傲', hot: 573815, type: 0 }
      ]
      setHotList(data)
      getDataSucess()
    }, 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={`wyy-subsearch-hot ${store.state.skin.current ? '' : 'wyy-subsearch-hot-dark'}`}>
      <div className="wyy-subsearch-hot-title">
        <span>热搜榜</span>
      </div>
      <div className="wyy-subsearch-hot-list">
        {hotList.map(( el: HotListEl, index) => <div key={el.id} className="wyy-subsearch-hot-list-item">
            <span className="wyy-subsearch-hot-list-item-index">{index + 1}</span>
            <div className="wyy-subsearch-hot-list-item-content">
              <div>
                <span className="wyy-subsearch-hot-list-item-content-title">{el.title}</span>
                <span className="wyy-subsearch-hot-list-item-content-hot">{el.hot}</span>
                <span className="wyy-subsearch-hot-list-item-content-type" style={{color: el.type === 1 ? 'rgba(255, 58, 58, 1)' : 'rgba(51, 182, 51, 1)'}}>{el.type === 0 ? '' : el.type === 1 ? 'HOT' : 'NEW'}</span>
              </div>
              <div className="wyy-subsearch-hot-list-item-content-subtitle">{el.subTitle}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchHistory