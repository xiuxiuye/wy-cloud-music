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
  id: 10,
  title: '和喜欢的人一起带上耳机开启心动模式啊',
  author: '是小旭啊',
  createTime: '2020-08-05',
  collected: 44986,
  played: 6529,
  share: 253,
  labels: ['浪漫', '清新', '治愈'],
  desc: '快和自己喜欢的人来一起听歌吧',
  cover: require('./cover.jpg'),
  songs
}
