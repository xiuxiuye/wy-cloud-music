import React, { useState, useEffect, useContext } from 'react'
import { StoreContext } from '../../../../store/provider'

export default function ThemeSkins () {
  const [themeList, setThemeList] = useState(new Array(0))
  const store = useContext(StoreContext) as any

  function toggleSkin (skin: object, index: number): void {
    store.dispatch({ type: 'skin/setCurrent', value: index })
    store.dispatch({ type: 'skin/setColors', value: skin })
  }

  useEffect(() => {
    const list = [
      {
        id: 1,
        name: '官方黑',
        primaryColor: 'rgba(33, 33, 36, 1)',
        subColor: 'rgba(33, 33, 36, 1)',
        contentBGColor: 'rgba(22, 24, 28, 1)',
        siderBGColor: 'rgba(25, 27, 31, 1)',
        balanceColor: 'rgba(198, 47, 47, 1)'
      },
      {
        id: 2,
        name: '官方红',
        primaryColor: 'rgba(198, 47, 47, 1)',
        subColor: 'rgba(232, 60, 60, 1)',
        contentBGColor: 'rgba(250, 250, 250, 1)',
        siderBGColor: 'rgba(252, 252, 253, 1)',
        balanceColor: 'rgba(198, 47, 47, 1)'
      },
      {
        id: 3,
        name: '官方粉',
        primaryColor: 'rgba(251, 122, 165, 1)',
        subColor: 'rgba(255, 135, 180, 1)',
        contentBGColor: 'rgba(250, 250, 250, 1)',
        siderBGColor: 'rgba(245, 245, 247, 1)',
        balanceColor: 'rgba(251, 122, 165, 1)'
      },
      {
        id: 4,
        name: '官方蓝',
        primaryColor: 'rgba(66, 167, 248, 1)',
        subColor: 'rgba(102, 183, 255, 1)',
        contentBGColor: 'rgba(250, 250, 250, 1)',
        siderBGColor: 'rgba(245, 245, 247, 1)',
        balanceColor: 'rgba(66, 167, 248, 1)'
      },
      {
        id: 5,
        name: '官方绿',
        primaryColor: 'rgba(56, 182, 117, 1)',
        subColor: 'rgba(93, 199, 138, 1)',
        contentBGColor: 'rgba(250, 250, 250, 1)',
        siderBGColor: 'rgba(245, 245, 247, 1)',
        balanceColor: 'rgba(56, 182, 117, 1)'
      },
      {
        id: 6,
        name: '官方金',
        primaryColor: 'rgba(250, 172, 98, 1)',
        subColor: 'rgba(250, 172, 98, 1)',
        contentBGColor: 'rgba(250, 250, 250, 1)',
        siderBGColor: 'rgba(245, 245, 247, 1)',
        balanceColor: 'rgba(250, 172, 98, 1)'
      }
    ]
    setThemeList(list)
  }, [])

  return (
    <div className="wyy-skins-themes">
      <div className="wyy-skins-themes-options">
        {themeList.map((el, index) => 
        <div className="wyy-skins-themes-option"
          style={{backgroundColor: el.primaryColor}}
          key={el.id}
          onClick={() => toggleSkin(el, index)}>
          <span className="iconfont icon-wangyiyunyinle wyy-skins-themes-option-icon"></span>
          <div className="wyy-skins-themes-option-label">{el.name}</div>
          {(index === store.state.skin.current) && <div className="wyy-skins-themes-option-selected">
            <span className="iconfont icon-check-circle-fill"></span>
          </div>}
        </div>)}
      </div>
    </div>
  )
}
