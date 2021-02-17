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
  id: 9,
  title: '生活能治愈的，都是愿意好起来的人',
  author: '念念念安娜',
  createTime: '2020-11-24',
  collected: 923,
  played: 27091,
  share: 33,
  labels: ['华语', '流行', '治愈'],
  desc: '有人说: 林深时见鹿，海蓝时见鲸，梦醒时见你',
  cover: require('./cover.jpg'),
  songs
}
