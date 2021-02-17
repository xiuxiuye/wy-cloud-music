import Songs from '../歌库/index'  

let n = 0
const songs = []

while (n < 10) {
  n = Math.floor(Math.random() * Songs.length)
}

for (let i = 0; i < n; i++) {
  const index = Math.floor(Math.random() * Songs.length)
  if (songs.find(el => el.id === Songs[index].id)) {
    --i
  } else {
    const song = JSON.parse(JSON.stringify(Songs[index]))
    song.cover = require('./cover.jpg')
    songs.push(song)
  }
}

export default {
  id: 3,
  title: '今天从《谎言》听起|私人雷达',
  author: '云音乐私人雷达',
  createTime: '2019-12-26',
  collected: 22995348,
  played: 86190,
  share: 279790,
  labels: ['流行'],
  desc: '你爱的歌，值得反复聆听，私人雷达，每日更新，收藏你的最爱。',
  cover: require('./cover.jpg'),
  songs
}
