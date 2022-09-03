const _0x666dc5=_0xea97;(function(_0x2f0740,_0x1679b8){const _0x22ed7a=_0xea97,_0x37d46f=_0x2f0740();while(!![]){try{const _0x665d5b=parseInt(_0x22ed7a(0xbc))/0x1*(parseInt(_0x22ed7a(0xbb))/0x2)+-parseInt(_0x22ed7a(0xc9))/0x3+parseInt(_0x22ed7a(0xc5))/0x4+parseInt(_0x22ed7a(0xba))/0x5+-parseInt(_0x22ed7a(0xcf))/0x6*(-parseInt(_0x22ed7a(0xb7))/0x7)+parseInt(_0x22ed7a(0xc1))/0x8*(parseInt(_0x22ed7a(0xb9))/0x9)+-parseInt(_0x22ed7a(0xb8))/0xa*(parseInt(_0x22ed7a(0xbd))/0xb);if(_0x665d5b===_0x1679b8)break;else _0x37d46f['push'](_0x37d46f['shift']());}catch(_0x4f9270){_0x37d46f['push'](_0x37d46f['shift']());}}}(_0x38c4,0x54857));function _0xea97(_0x4bef24,_0x135f07){const _0x38c47a=_0x38c4();return _0xea97=function(_0xea977e,_0x2eb282){_0xea977e=_0xea977e-0xb1;let _0xff6dd8=_0x38c47a[_0xea977e];return _0xff6dd8;},_0xea97(_0x4bef24,_0x135f07);}const {default:makeWASocket,BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,downloadContentFromMessage,downloadHistory,proto,getMessage,generateWAMessageContent,prepareWAMessageMedia}=require(_0x666dc5(0xb5));function _0x38c4(){const _0x2e68d5=['*MENU\x20DOWNLOADER*','../lib/levelling','30456XienRY','*MENU\x20MAKER*','*MENU\x20FUN*','*MENU\x20KERANG*','*MENU\x20RPG*','@adiwajshing/baileys','*MENU\x20ANIME*','294yuzFuc','2530eaWNWQ','3078YMediU','2222105lvSNQa','1590zJEsYH','863OCrIwA','36707PULECp','*MENU\x20EXP*','*MENU\x20GITHUB*','*MENU\x20QUOTES*','9848jDlUHC','*MENU\x20TOOLS*','path','*INTERNET*','90396JyBHtG','*MENU\x20IMAGE*','*MENU\x20INFO*','*MENU\x20ABSEN*','1790517dWSsLg','*MENU\x20GAME*','*MENU\x20STALK*','*MENU\x20GROUP*'];_0x38c4=function(){return _0x2e68d5;};return _0x38c4();}let fs=require('fs'),path=require(_0x666dc5(0xc3)),levelling=require(_0x666dc5(0xce)),tags={'main':'*MENU\x20UTAMA*','advanced':'*ADVANCED*','rpg':_0x666dc5(0xb4),'anime':_0x666dc5(0xb6),'sticker':'*MENU\x20CONVERT*','downloader':_0x666dc5(0xcd),'xp':_0x666dc5(0xbe),'fun':_0x666dc5(0xb2),'game':_0x666dc5(0xca),'github':_0x666dc5(0xbf),'group':_0x666dc5(0xcc),'image':_0x666dc5(0xc6),'info':_0x666dc5(0xc7),'absen':_0x666dc5(0xc8),'internet':_0x666dc5(0xc4),'islam':'*MENU\x20ISLAMI*','kerang':_0x666dc5(0xb3),'maker':_0x666dc5(0xb1),'owner':'*MENU\x20OWNER*','quotes':_0x666dc5(0xc0),'stalk':_0x666dc5(0xcb),'tools':_0x666dc5(0xc2)};

let iggw = `https://instagram.com/irfaanabdulhafizh`
let own = `https://wa.me/6281646829895`

const defaultMenu = {
  before: `
%readmore`.trimStart(),
  header: '⳼────❪ %category ❫\n┃╭─❏ ',
  body: '┃│❖ %cmd %islimit %isPremium',
  footer: '┃╰───────────────❏\n✇────✪\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
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
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '🅛' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let audio = `https://raw.githubusercontent.com/hyuuraofc/Sound-Rest/main/Bgm/[ YT SarXigo ] SOUND SEREM - MENGKANE 😈 VIRAL TIKTOK.mp3`
    await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true)
    const menu2nih = `
┌─「  Alfarabotz Base 」
❏───────────────┈ ⳹
_https://github.com/arivpns_
❏─────────┈

┌─「  Alfarabotz Recode 」
❏───────────────┈ ⳹
_Private Dulu,Ntar Bakalan Gw Kasih Tunggu Siap Semua!!_
❏─────────┈

┌─「  Script Alfarabotz Ori 」
❏───────────────┈ ⳹
_https://youtube.com/channel/UCBtUyjfIclyuu7yXKS0dAMw_
❏─────────┈
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: menu2nih.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./src/menuh.jpg') },
           hydratedFooterText: `⃝▣──「 Sementara Gw Hilangin Dulu Ntar Di Up Yt Kalo Udah Selesai 」───⬣`,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Instagram',
               url: iggw
             }

           },
             {
             urlButton: {
               displayText: 'Contact Owner',
               url: own
             }

           },
           {
             quickReplyButton: {
               displayText: 'CREDIT',
               id: '.tqto',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
 
}
handler.help = ['script','sc','sourcode']
handler.tags = ['main']
handler.command = /^(sc|script|sourcode)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
