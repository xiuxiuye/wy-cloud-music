import React, { useState } from 'react'
import SubContent from './SubContent'
import AvatorURL from '../../../../assets/image/avator.jpg'
import './index.scss'

export default function UserAccount () {
  const [isOpenSubContent, setIsOpenSubContent] = useState(false)
  return (
    <div className="wyy-header-user-account">
      <img className="wyy-header-user-account-avator" src={AvatorURL} alt=""/>
      <div className="wyy-header-user-account-name"
        tabIndex={0}
        onBlur={() => setIsOpenSubContent(false)}>
        <span onClick={() => setIsOpenSubContent(pre => !pre)}>吉尔伽美什</span>
        <span className="icon iconfont icon-caret-down"></span>
        {isOpenSubContent && <SubContent avator={AvatorURL} />}
      </div>
    </div>
  )
}
