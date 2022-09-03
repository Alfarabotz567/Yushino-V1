let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let bcbg = `${pickRandom(['https://telegra.ph/file/bca700eefeeed8f2cb054.jpg', 'https://telegra.ph/file/ec9831cc3b7001690d6dd.jpg','https://telegra.ph/file/177f7054ebddc6d1f8375.jpg','https://telegra.ph/file/90d4254ae53b4d268b2b9.jpg','https://telegra.ph/file/a6e4013afa98e283ee6a7.jpg','https://telegra.ph/file/2cf9cf86466d9fad58e52.jpg','https://telegra.ph/file/f62c45fb2e087187f065e.jpg','https://telegra.ph/file/fec157267ed3cf69021e1.jpg','https://telegra.ph/file/419672df2fb86a057cb26.jpg'])}`

       await conn.delay(1500)
const anu = `${ucapan()} ${name}`
const footer = `
𝙷𝚊𝚕𝚘 ${name} 𝚂𝚊𝚢𝚊 Alfarabotz Multi Device,𝚂𝚊𝚢𝚊 𝙳𝚒 𝙱𝚞𝚊𝚝 𝙾𝚕𝚎𝚑 Irfaan Official,𝙿𝚎𝚖𝚋𝚞𝚊𝚝𝚊𝚗 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 𝙱𝚘𝚝 𝙸𝚗𝚒 𝙼𝚞𝚕𝚊𝚒 𝙳𝚊𝚛𝚒 𝚃𝚊𝚗𝚐𝚐𝚊𝚕 22 𝙰𝚐𝚞𝚜𝚝𝚞𝚜 2022,𝚃𝚎𝚛𝚒𝚖𝚊 𝙺𝚊𝚜𝚒𝚑 𝚈𝚊𝚗𝚐 𝚃𝚎𝚕𝚊𝚑 𝙼𝚎𝚖𝚋𝚊𝚗𝚝𝚞 𝚂𝚊𝚢𝚊 𝚂𝚎𝚙𝚎𝚗𝚞𝚑 𝙷𝚊𝚝𝚒 𝙳𝚊𝚕𝚊𝚖 𝙼𝚎𝚖𝚋𝚞𝚊𝚝 𝙿𝚛𝚘𝚓𝚎𝚌𝚝 𝚂𝚌𝚛𝚒𝚙𝚝 𝙸𝚗𝚒\n
⫰⫯⫰ 𝐃𝐚𝐭𝐞 𝐈𝐬𝐥𝐚𝐦 : ${dateIslamic}
⫰⫯⫰ 𝐃𝐚𝐭𝐞 : ${date}
⫰⫯⫰ 𝐔𝐩𝐭𝐢𝐦𝐞 : ${uptime}
⫰⫯⫰ 𝐓𝐢𝐦𝐞 : ${time}`
const buttons1 = 'All Menu'
const buttons2 = 'List Menu'
const idbuttons1 = '.? all'
const idbuttons2 = '.co'

conn.send2ButtonLoc(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, m)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
