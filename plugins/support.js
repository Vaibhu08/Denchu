let handler = async m => {
    const grouplink = `https://chat.whatsapp.com/J5jaYWoBwzL7XDDLYt5ziL`
    m.reply(grouplink, m.sender) 
    m.reply('✅ Support group link has been successfully sent to your private')
}
handler.help = ['support']
handler.tags = ['info']
handler.command = /^support$/i

module.exports = handler
