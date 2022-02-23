let fs = require("fs")
let fetch = require('node-fetch')
let { exec } = require("child_process")
let handler = async(m, { conn, command }) => {
  if (!global.db.data.chats[m.chat].nsfw) throw "NSFW is not active !"
  if (command = 'nsfwwallpaper'){ command = 'wallpaper' }
  let res = await fetch("https://nekos.life/api/v2/img/" + command)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  
  conn.sendFile(m.chat, json.url, '', '(◡ ꒳ ◡)', m)
}
// handler.help = [' ']
handler.tags = ['anime']
handler.command = /^(feet|smallboobs|lewdkemo|gasm|solo|goose|erokemo|ero|nsfwwallpaper|hololewd|gecg|fox_girl|tits|yuri|keta|hentai|eron|erok|kemonomimi|cum_jpg|nsfw_avatar|erofeet|meow|blowjob|femdom|lewd|pussy_jpg|futanari|lewdk)$/i
module.exports = handler
