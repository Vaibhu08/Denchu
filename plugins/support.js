let handler = async m => {
    const grouplink = `https://chat.whatsapp.com/KLRZjtLKa890gO6xsY7l0W`
    m.reply(grouplink, m.sender) 
    m.reply('✅ Support group link has been successfully sent to your private')
}
handler.help = ['support']
handler.tags = ['info']
handler.command = /^support$/i

module.exports = handler
