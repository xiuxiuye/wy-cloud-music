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
  id: 17,
  title: '在等雪花，新年烟火，和最好的我们',
  author: '我该去见你了',
  createTime: '2020-11-17',
  collected: 23461,
  played: 870925,
  share: 252,
  labels: ['流行', '华语', '治愈'],
  desc: '已经迫不及待的迎接冬天了 穿上舒服柔软的毛衣和厚重的外套 戴上中意很久的帽子和围巾 走在咯吱咯吱的雪地里 吸着鼻子满心欢喜的去奶茶店见你',
  cover: require('./cover.jpg'),
  songs
}
