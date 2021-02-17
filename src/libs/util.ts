const util = {
  getMaxZIndex () {
    return Array.from(document.body.querySelectorAll('*')).reduce((pre, next) => {
      return Math.max(pre, +window.getComputedStyle(next).zIndex || 0)
    }, 0)
  },
  // 根据秒时间得到分时间
  changeTimeFormat (time: number) {
    const m = (time / 60) > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`
    const s = (time % 60) > 9 ? (time % 60) : `0${(time % 60)}`
    return `${m} : ${s}`
  }
}

export default util
