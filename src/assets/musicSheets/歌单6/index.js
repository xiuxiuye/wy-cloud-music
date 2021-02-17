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
  id: 6,
  title: '思念，在所難免。',
  author: '麋鹿',
  createTime: '2017-05-28',
  collected: 1167,
  played: 872019,
  share: 38,
  labels: ['华语', '说唱'],
  desc: '你是晚夏遗留在深海里的星星,想把我所有的温柔都碾碎了撒给你',
  cover: require('./cover.jpg'),
  songs
}
