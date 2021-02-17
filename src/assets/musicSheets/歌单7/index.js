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
  id: 7,
  title: '一个可以帮你对抗寒冬的播放列表',
  author: '献给莉莉的玫瑰',
  createTime: '2020-10-30',
  collected: 735,
  played: 5409,
  share: 93,
  labels: ['华语', '流行', '怀旧'],
  desc: '听着歌就这样睡着了，梦见自己睡在一片大草地上，寒冷的空气也阻挡不了我对你的心动',
  cover: require('./cover.jpg'),
  songs
}
