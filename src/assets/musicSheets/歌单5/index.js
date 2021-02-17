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
  id: 5,
  title: '贪恋山河 但仍陷落于你这场人间美色',
  author: '小盆友',
  createTime: '2019-05-05',
  collected: 202778,
  share: 1208,
  played: 32091,
  labels: ['流行', '清新', '治愈'],
  desc: '贪恋山河 但仍陷落于你这场人间美色...',
  cover: require('./cover.jpg'),
  songs
}
