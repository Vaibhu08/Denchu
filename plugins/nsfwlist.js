// let handler = async m => {
//   const nsfwItems = ['ass', 'solog', 'feet', 'smallboobs', 'lewdkemo', 'woof', 'gasm', 'solo', 'goose', 'avatar', 'cum', 'les', 'erokemo', 'bj', 'pwankg', 'ero', 'hololewd', 'gecg', 'holo', 'poke', 'feed', 'fox_girl', 'tits', 'nsfw_neko_gif', 'eroyuri', 'holoero', 'pussy', 'Random_hentai_gif', 'lizard', 'yuri', 'keta', 'neko', 'hentai', 'feetg', 'eron', 'erok', 'baka', 'kemonomimi', 'cum_jpg', 'nsfw_avatar', 'erofeet', 'meow', 'wallpaper', 'tickle', 'blowjob', 'spank', 'kuni', 'classic', 'blowjob-x', 'femdom', 'boobs', 'trap', 'lewd', 'pussy_jpg', 'anal', 'futanari', 'ngif', 'lewdk']
// for (let nsfwItem of nsfwItems){
//   m.reply('📍', nsfwItem)
// }
// }

let handler = async m => {
  const nsfwItems = ['ass', 'solog', 'feet', 'smallboobs', 'lewdkemo', 'gasm', 'solo', 'goose', 'cum', 'les', 'erokemo', 'bj', 'pwankg', 'ero', 'hololewd', 'gecg', 'holo', 'feed', 'fox_girl', 'tits', 'nsfw_neko_gif', 'eroyuri', 'holoero', 'pussy', 'Random_hentai_gif', 'lizard', 'yuri', 'keta', 'neko', 'hentai', 'feetg', 'eron', 'erok', 'baka', 'kemonomimi', 'cum_jpg', 'nsfw_avatar', 'erofeet', 'nsfwwallpaper', 'tickle', 'blowjob', 'spank', 'kuni', 'classic', 'blowjob-x', 'femdom', 'boobs', 'trap', 'lewd', 'pussy_jpg', 'anal', 'futanari', 'ngif', 'lewdk']
  m.reply('🧧List of NSFW commands' + '\n\n' + nsfwItems.map(v => '📍' + v.replace()).join`\n`, null, {
})
}
handler.help = ['nsfw']
handler.tags = ['anime']
handler.command = /^(nsfw|Nsfw|NSFW)$/i

module.exports = handler
