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
  id: 0,
  title: '每日歌曲推荐',
  author: '每日君',
  createTime: '2018-04-12',
  collected: 9187265,
  share: 189276,
  played: 928164019,
  labels: ['每日推荐'],
  desc: '快来接收你的每日推荐歌曲',
  cover: require('./cover.jpg'),
  songs
}
