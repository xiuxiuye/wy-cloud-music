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
  id: -1,
  title: '我喜欢音乐',
  author: '吉尔伽美什',
  createTime: '2020-12-12',
  collected: 72891,
  played: 12314,
  share: 1620,
  labels: ['华语', '流行', '古风'],
  desc: '听我所爱，享我所想',
  cover: require('./cover.jpg'),
  songs
}
