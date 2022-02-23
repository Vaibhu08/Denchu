let fs = require("fs")
let fetch = require('node-fetch')
let { exec } = require("child_process")
let handler = async(m, { conn, command }) => {
  if (!global.db.data.chats[m.chat].nsfw) throw "NSFW is not active !"
  let res = await fetch("https://nekos.life/api/v2/img/" + command)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  if (json.url) {
		let buf = await (await fetch(json.url)).buffer()
		let input = `${command}.gif`
		let output = `${command}.mp4`
		fs.writeFileSync(input, buf)
		exec(`ffmpeg -i ${input} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${output}`, (e) => {
			if (e) m.reply(String(e))
			fs.unlinkSync(input)
			conn.sendMessage(m.chat, fs.readFileSync(output), "videoMessage", { mimetype: "video/gif", quoted: m, caption: `(◡ ꒳ ◡)`, contextInfo: { mentionedJid: [...m.mentionedJid, m.sender] }})
			fs.unlinkSync(output)
		})
	} else throw json
  
  //conn.sendFile(m.chat, json.url, '', 'Nyaa', m)
}
// handler.help = [' ']
handler.tags = ['anime']
handler.command = /^(solog|cum|les|bj|pwankg|nsfw_neko_gif|pussy|Random_hentai_gif|feetg|baka|tickle|spank|kuni|classic|boobs|anal|ngif)$/i
module.exports = handler
