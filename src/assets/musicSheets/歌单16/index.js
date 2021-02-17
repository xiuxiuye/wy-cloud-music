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
  id: 16,
  title: '一曲容纳几腔忧愁',
  author: '原创君',
  createTime: '2020-08-13',
  collected: 14316,
  played: 39081673,
  share: 130,
  labels: ['流行', '华语', '古风'],
  desc: '余音绕梁，三日不绝 红尘一世，清愁萦绕耳际',
  cover: require('./cover.jpg'),
  songs
}
