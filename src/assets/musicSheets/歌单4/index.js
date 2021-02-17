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
  id: 4,
  title: '只有熬不完的夜和听不完的网易云',
  author: 'Tiredal',
  createTime: '2018-1-16',
  collected: 1192,
  played: 4820198,
  share: 5,
  labels: ['流行'],
  desc: '大胆点生活 你没那么多观众',
  cover: require('./cover.jpg'),
  songs
}
