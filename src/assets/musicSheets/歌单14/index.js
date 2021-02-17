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
  id: 14,
  title: '积极的心态像太阳，照到哪里哪里亮',
  author: '砚青钦墨',
  createTime: '2020-10-28',
  collected: 16843,
  played: 28910,
  share: 396,
  labels: ['流行', '华语', '治愈'],
  desc: '上了生活的贼船，就要做个快乐的海盗，朝着太阳生长，做个温柔的人，不卑不亢，清澈善良，不求做到最好，但求做到更好，加油吧。',
  cover: require('./cover.jpg'),
  songs
}
