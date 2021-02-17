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
  id: 12,
  title: '遇见了就别留遗憾',
  author: '你口中的七楠',
  createTime: '2020-07-19',
  collected: 18660,
  share: 127,
  played: 6720198,
  labels: ['伤感', '治愈', '榜单'],
  desc: '有故事的人从来不会挂在嘴边就连崩溃都掩盖的完美。希望你不懂',
  cover: require('./cover.jpg'),
  songs
}
