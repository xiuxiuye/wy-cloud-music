import React, { useEffect, useState, useContext } from 'react'
import { StoreContext } from '../../../../../store/provider'
import './index.scss'

interface CarouselProps {
  images: Array<any>
}

let interval: any = null

export default function Carousel ({ images }: CarouselProps) {
  const [pre, setPre] = useState(images.length - 1)
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(1)
  const [contentHeight, setContentHeight] = useState(0)
  const [horizontalOffset, setHorizontalOffset] = useState(0)
  const store = useContext(StoreContext) as any

  function toggleCarousel (index: number) {
    setCurrent(index)
    setPre(index === 0 ? images.length - 1 : index - 1)
    setNext(index === images.length - 1 ? 0 : index + 1)
  }

  useEffect(() => {
    const currentItemDOM = document.querySelector('.wyy-carousel-item-current > img') as HTMLImageElement
    const wrapperDOM = document.querySelector('.wyy-carousel-content') as HTMLImageElement
    setHorizontalOffset(wrapperDOM.clientWidth - currentItemDOM.clientWidth)
    const height = currentItemDOM.clientHeight
    // 解决图片强缓存导致的onload事件不触发问题
    height && setContentHeight(height)
    currentItemDOM.onload = () => {
      const height = currentItemDOM.clientHeight
      setContentHeight(height)
    }

    if (interval === null) {
      interval = setInterval(() => {
        setCurrent(pre => {
          return pre + 1 >= images.length ? 0 : pre + 1
        })
        setPre(pre => {
          return pre + 1 >= images.length ? 0 : pre + 1
        })
        setNext(pre => {
          return pre + 1 >= images.length ? 0 : pre + 1
        })
      }, 5000)
    }

    // 清楚事件监听
    return function beforeDestroy () {
      currentItemDOM.onload = null
      clearInterval(interval)
      interval = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length])

  return (
    <div className="wyy-carousel">
      <div className="wyy-carousel-content" style={{ height: `${contentHeight}px` }}>
        {images.map((el, index) => <div
          className={`wyy-carousel-item ${index === current ? 'wyy-carousel-item-current' : [pre, next].includes(index) ? 'wyy-carousel-item-sub' : ''}`}
          key={`carousel${index}`}
          style={{
            transform: `scaleY(${index === current ? 1 : 0.85})`,
            left: `${index === pre ? 0 : index === next ? horizontalOffset : horizontalOffset / 2}px`,
            opacity: [current, pre, next].includes(index) ? 1 : 0,
            zIndex: index === current ? 3 : index === pre ? 2 : index === next ? 1 : 0
          }}>
          <img src={el} alt=""/>
        </div>)}
      </div>
      <div className="wyy-carousel-footer">
        {images.map((el, index) => <span className="wyy-carousel-pointer"
          key={`pointer${index}`}
          style={{backgroundColor: current === index ? store.state.skin.colors.balanceColor : store.state.skin.current ? '' : 'rgba(255, 255, 255, 0.45)'}}
          onMouseEnter={() => toggleCarousel(index)}/>)}
      </div>
    </div>
  )
}
