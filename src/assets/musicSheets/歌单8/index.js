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
  id: 8,
  title: '慵懒惬意的小资时光',
  author: 'gzll2648',
  createTime: '2020-08-06',
  collected: 405,
  played: 89027167,
  share: 5,
  labels: ['轻松', '流行', '怀旧'],
  desc: '轻松的曲调，散漫的气氛',
  cover: require('./cover.jpg'),
  songs
}
