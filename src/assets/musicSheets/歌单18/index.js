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
  id: 18,
  title: '有些心动 一开始就覆水难收',
  author: '耗尽归途的光',
  createTime: '2020-07-13',
  collected: 2723,
  played: 1092852,
  share: 30,
  labels: ['翻唱', '华语', '伤感'],
  desc: '你永远胜过别人 至少在我这里',
  cover: require('./cover.jpg'),
  songs
}
