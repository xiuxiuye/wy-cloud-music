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
  id: 1,
  title: '倾许三秋梦，尽数负流光',
  author: '吉尔伽美什',
  createTime: '2015-10-06',
  collected: 161837,
  played: 19286,
  share: 776,
  labels: ['古风', '华语'],
  desc: '古风银临，倾许三秋梦，尽数负流光。',
  cover: require('./cover.jpg'),
  songs
}
