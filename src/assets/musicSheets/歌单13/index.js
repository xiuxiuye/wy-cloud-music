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
  id: 13,
  title: '本次列车终点站为:嘉禾望岗。',
  author: '阿宇啊',
  createTime: '2020-07-11',
  collected: 7603,
  played: 12314,
  share: 40,
  labels: ['伤感', '华语', '夜晚'],
  desc: '原来嘉禾望岗地铁站附近有很多学校 好多的情侣在此分道扬镳 所以这个地铁站是他们和她们的一种回忆。',
  cover: require('./cover.jpg'),
  songs
}
