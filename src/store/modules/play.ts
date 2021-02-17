export default {
  namespace: 'play',
  state: {
    // 0: 列表循环，1：单曲循环，2：随机播放
    mode: 0,
    playing: false,
    // 音量 0 ~ 1
    volume: 0.5,
    details: false,
    current: {
      id: 1189,
      title: '一路向北',
      duration: 295,
      url: require('../../assets/musicSheets/歌库/songs/一路向北.m4a'),
      singer: '周杰伦',
      cover: require('../../assets/musicSheets/我喜欢的音乐/cover.jpg'),
      progress: 0
    },
    playList: [
      {
        id: 1189,
        title: '一路向北',
        duration: 295,
        url: require('../../assets/musicSheets/歌库/songs/一路向北.m4a'),
        singer: '周杰伦',
        cover: require('../../assets/musicSheets/我喜欢的音乐/cover.jpg')
      }
    ]
  },
  actions: {
    setMode (state: object, value: number) {
      (state as any).mode = value
    },
    setPlaying (state: object, value: boolean) {
      (state as any).playing = value
    },
    setCurrent (state: object, value: object) {
      (state as any).current = value
    },
    setPlayList (state: object, value: object) {
      (state as any).playList = value
    },
    setVolume (state: object, value: number) {
      (state as any).volume = value
    },
    setDetails (state: object, value: boolean) {
      (state as any).details = value
    }
  }
}
