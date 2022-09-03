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
const anu = `
𝐀𝐮𝐭𝐡𝐨𝐫 : 𝐴𝑙𝑑𝑖 𝐿𝑒𝑠𝑚𝑎𝑛𝑎 
𝐖𝐚 : 081361281833
𝐛𝐚𝐬𝐞 : 𝑁𝑎𝑟𝑢𝑡𝑜𝑚𝑜
𝐌𝐲 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 : 22 𝐴𝑔𝑢𝑠𝑡𝑢𝑠 2022

⫹❰⫺ 𝐵𝐼𝐺 𝑇𝐻𝐴𝑁𝐾𝑆 𝑇𝑂 ⫹❱⫺
⭝ 𝑨𝒍𝒍𝒂𝒉 𝒀𝒂𝒏𝒈 𝑴𝒂𝒉𝒂 𝑬𝒔𝒂
⭝ 𝑶𝒓𝒂𝒏𝒈 𝑻𝒖𝒂
⭝ 𝑻𝒆𝒎𝒆𝒏 𝑮𝒘
⭝ 𝑴𝒂𝒔𝒕𝒂𝒉 𝑴𝒂𝒔𝒕𝒂𝒉
`
const footer = `
⫹⫺ 𝑇𝒉𝑒 𝑁𝑎𝑚𝑒 𝑇𝒉𝑎𝑡 𝐻𝑒𝑙𝑝𝑒𝑑 𝑀𝑒 ⫹⫺
⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔⸔
⭝ 𝑨𝒅𝒊𝒘𝒂𝒋𝒊𝒔𝒉𝒊𝒏𝒈
⭝ 𝑵𝒂𝒓𝒖𝒕𝒐𝒎𝒐
⭝ 𝑹𝒊𝒔𝒎𝒂𝑩𝒐𝒕𝒛 𝑶𝒇𝒇𝒄
⭝ 𝑱𝒂𝒓𝒐𝒕 𝑶𝒇𝒇𝒄
⭝ 𝑯𝒚𝒛𝒆𝒓 Official
⭝ 𝑫𝒆𝒇𝒇𝒓𝒊 Gans
⭝ Irfaan Official
⭝ Aldi Ofc
⭝ 𝑲𝒂𝒏𝒏𝒂𝑪𝒉𝒂𝒏
⭝ 𝑪𝒉𝒓𝒊𝒔𝒕𝒊𝒂𝒏 𝑰𝒅
⭝ 𝑨𝒊𝒏𝒆
⭝ 𝑨𝒓𝒊𝒇𝒇𝒃
⭝ 𝑰𝒍𝒎𝒂𝒏
⭝ 𝑨𝒎𝒊𝒓𝒖𝒍
⭝ 𝑰𝒔𝒕𝒊𝒌𝒎𝒂𝒍
⭝ 𝑭𝒛𝒐𝒏𝒆
⭝ 𝑭𝒂𝑱𝒂𝒓
⭝ 𝑨𝒓𝒖𝒍𝒍 𝑶𝒇𝒄
⭝ 𝒁𝒆𝒆𝒐𝒏𝒆 𝑶𝒇𝒄
⭝ 𝑹𝒂𝒎𝒍𝑎𝑛
⭝ 𝑮𝒆𝒎𝒑𝒚𝑻𝒐𝒏\n
❦❧ ━━──┈┈ ❲ ${global.namebot} ❳
┃𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${uptime}
┃𝚍𝚊𝚝𝚎 : ${date}
┃𝚝𝚒𝚖𝚎 : ${waktuwib}
⎅ ┈┈ ❲ ${global.ownername} ❳`
const buttons1 = 'Menu'
const buttons2 = 'Owner'
const idbuttons1 = '.menu'
const idbuttons2 = '.owner'

conn.send2ButtonLoc(m.chat, bcbg, anu, footer, buttons1, idbuttons1, buttons2, idbuttons2, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|thanksto|tqtt)$/i

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
