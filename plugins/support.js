let handler = async m => {
    const grouplink = `https://chat.whatsapp.com/E66MqQRxR593E2SkaD1x9z`
    m.reply(grouplink, m.sender) 
    m.reply('✅ Support group link has been successfully sent to your private')
}
handler.help = ['support']
handler.tags = ['info']
handler.command = /^support$/i

module.exports = handler
