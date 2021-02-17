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
  id: 11,
  title: '你是我的满目山河 亦是我的爱而不得',
  author: '大肥猫好可爱啊',
  createTime: '2020-08-09',
  collected: 29218,
  share: 1429,
  played: 769091,
  labels: ['伤感', '孤独'],
  desc: '所有的梦都跌落下来',
  cover: require('./cover.jpg'),
  songs
}
