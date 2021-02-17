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
  id: 19,
  title: '生活在慢慢变甜变可爱，十二月一定会更好吧',
  author: '是心动不是风动',
  createTime: '2020-11-29',
  collected: 900,
  share: 102,
  played: 1928,
  labels: ['流行', '华语', '浪漫'],
  desc: '弥漫的烤板栗和烤红薯味儿，冲破、氤氲在凛冽的冷风中',
  cover: require('./cover.jpg'),
  songs
}
