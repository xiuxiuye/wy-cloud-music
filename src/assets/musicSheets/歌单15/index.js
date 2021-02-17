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
  id: 15,
  title: '这个冬天也要和喜欢的人一起过呀',
  author: '柠檬没有枝叶',
  createTime: '2020-11-15',
  collected: 20995,
  share: 479,
  played: 8926178,
  labels: ['流行', '华语', '浪漫'],
  desc: '我想了很多在冬天和你相遇的话要做的事。',
  cover: require('./cover.jpg'),
  songs
}
