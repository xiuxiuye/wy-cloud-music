import React, { useState } from 'react'
import VIPList from './VIPList'
import VIPPayQRCOde from '../../../../assets/image/vip-pay-qrcode.png'
import './index.scss'

interface OpenVIPProps {
  onClose: Function;
}

export default function OpenVIP ({ onClose }: OpenVIPProps) {
  const [currentNav, setCurrentNav] = useState(0)
  const [currentPayInfo, setCurrentPayInfo] = useState({
    price: null,
    oldPrice: null
  })
  return (
    <div className="wyy-open-vip">
      <div className="wyy-open-vip-header">
        <span>开通会员</span>
        <span className="iconfont icon-close" onClick={() => onClose(false)}></span>
      </div>
      <div className="wyy-open-vip-content transparent-scrollbar">
        <div className="wyy-open-vip-content-nav">
          <div className={currentNav === 0 ? 'wyy-open-vip-content-nav-active' : ''} onClick={() => setCurrentNav(0)}>
            <span>黑胶VIP</span>
            <span className="iconfont icon-huiyuan"></span>
          </div>
          <div className={currentNav === 1 ? 'wyy-open-vip-content-nav-active' : ''} onClick={() => setCurrentNav(1)}>
            <span>音乐包</span>
            <span className="iconfont icon-music1"></span>
          </div>
        </div>
        <VIPList type={currentNav} onChange={setCurrentPayInfo} />
        <div className="wyy-open-vip-content-pay">
          <img className="wyy-open-vip-content-pay-qrcode" src={VIPPayQRCOde} alt="" />
          <div className="wyy-open-vip-content-pay-type">
            <div>使用微信、支付宝扫码支付</div>
            <div>
              <span className="iconfont icon-weixinzhifu"></span>
              <span className="iconfont icon-alipay-square-fill"></span>
            </div>
            <div>
              <span>{currentPayInfo.price || 0}</span>
              <span>元</span>
              {((currentPayInfo.oldPrice || 0) - (currentPayInfo.price || 0)) > 0 ? <span>（已省<span>{(currentPayInfo.oldPrice || 0) - (currentPayInfo.price || 0)}元）</span></span> : null}
            </div>
          </div>
        </div>
        <div className="wyy-open-vip-content-rule">
          <span>《网易云音乐服务条款》</span>
          <span>《音乐包服务条款》</span>
          <span>《连续包月服务条款》</span>
        </div>
      </div>
    </div>
  )
}

