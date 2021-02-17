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
  id: 2,
  title: '有没有那么一首歌 刚好说中你的心事',
  author: 'vk无趣',
  createTime: '2017-10-26',
  collected: 1406,
  played: 78210,
  share: 22,
  labels: ['古风', '华语', '清新'],
  desc: '总有一个人，原本只是生命的过客...',
  cover: require('./cover.jpg'),
  songs
}
