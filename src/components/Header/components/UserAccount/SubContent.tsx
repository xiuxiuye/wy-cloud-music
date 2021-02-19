import React, { useContext }  from 'react'
import { StoreContext } from '../../../../store/provider'

interface SubContentProps {
  avator: any;
}

export default function SubContent({ avator }: SubContentProps) {
  const store = useContext(StoreContext) as any

  return (
    <div className={`wyy-header-user-account-subContent ${store.state.skin.current ? '' : 'wyy-header-user-account-subContent-dark'}`}>
      <div className="wyy-header-user-account-subContent-content1">
        <img src={avator} alt="" />
        <span>吉尔伽美什</span>
        <div className="wyy-header-user-account-sign-in">
          <span className="iconfont icon-gift"></span>
          <span>签到</span>
        </div>
      </div>
      <div className="wyy-header-user-account-subContent-content2">
        <div className="wyy-header-user-account-subContent-content2-item">
          <div>1</div>
          <div>动态</div>
        </div>
        <div className="wyy-header-user-account-subContent-content2-item">
          <div>3</div>
          <div>关注</div>
        </div>
        <div className="wyy-header-user-account-subContent-content2-item">
          <div>4</div>
          <div>粉丝</div>
        </div>
      </div>
      <div className="wyy-header-user-account-subContent-content3">
        <div className="wyy-header-user-account-subContent-content3-item">
          <span className="iconfont icon-huiyuan"></span>
          <span>会员中心</span>
          <span>未订购</span>
          <span className="iconfont icon-right"></span>
        </div>
        <div className="wyy-header-user-account-subContent-content3-item">
          <span className="iconfont icon-level-2-copy"></span>
          <span>等级</span>
          <span>Lv.9</span>
          <span className="iconfont icon-right"></span>
        </div>
        <div className="wyy-header-user-account-subContent-content3-item">
          <span className="iconfont icon-gouwuche"></span>
          <span>商城</span>
          <span>new</span>
          <span className="iconfont icon-right"></span>
        </div>
      </div>
      <div className="wyy-header-user-account-subContent-content4">
        <div className="wyy-header-user-account-subContent-content4-item">
          <span className="iconfont icon-setting"></span>
          <span>个人信息设置</span>
          <span className="iconfont icon-right"></span>
        </div>
        <div className="wyy-header-user-account-subContent-content4-item">
          <span className="iconfont icon-shouji"></span>
          <span>绑定社交账号</span>
          <span className="iconfont icon-weibo-circle-fill"></span>
          <span className="iconfont icon-QQ-circle-fill"></span>
          <span className="iconfont icon-right"></span>
        </div>
      </div>
      <div className="wyy-header-user-account-subContent-content5">
        <div className="wyy-header-user-account-subContent-content5-item">
          <span className="iconfont icon-poweroff"></span>
          <span>退出登录</span>
        </div>
      </div>
    </div>
  )
}
