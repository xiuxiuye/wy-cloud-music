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
  id: 20,
  title: '“花自向阳开 人终朝前走”',
  author: '哔赖呀',
  createTime: '2020-10-21',
  collected: 385,
  played: 903187628,
  share: 71,
  labels: ['流行', '治愈'],
  desc: '“请你用绝对清醒的理智压抑不该有的情绪”',
  cover: require('./cover.jpg'),
  songs
}
