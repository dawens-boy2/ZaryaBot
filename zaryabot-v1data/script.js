const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "script",
    react: "👑",
    alias: ["sc","repo","info"],
    desc: "get owner number",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

❁ ════ ❃•◯•❃ ════ ❁

*ʜᴇʀᴇ ɪs ʙᴏᴛ sᴄʀɪᴘᴛ*

⇩━━━━━━━━❁━━━━━━━━⇩
╭⊱✫🔮 𝐙𝐚𝐫𝐲𝐚𝐁𝐨𝐭-𝐕𝟏 🔮✫⊱╮
│✫ - *📂ʀᴇᴘᴏsɪᴛᴏʀʏ ɴᴀᴍᴇ:* *𝐙𝐚𝐫𝐲𝐚𝐁𝐨𝐭-𝐕𝟏*
│✫ - *📃ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* *❁ᴡᴏʀʟᴅ ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ❁*
│✫ - *🛡️ᴏᴡɴᴇʀ:* *𝐙𝐚𝐫𝐲𝐚𝐁𝐨𝐭-𝐕𝟏*
│✫ - *🌐 ᴜʀʟ:* https://github.com/dawens-boy2/ZaryaBot-V1
╰━━━━━━━━━━━━━━━━━╯
> *❁ᴊᴏɪɴ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs 𝐙𝐚𝐫𝐲𝐚𝐁𝐨𝐭-𝐕𝟏❁*

*https://whatsapp.com/channel/0029VbCHd5V1dAw132PB7M1B*

> *❁ᴊᴏɪɴ ᴏᴜʀ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs 𝐙𝐚𝐫𝐲𝐚𝐁𝐨𝐭-𝐕𝟏❁*

*https://youtu.be/fmvsHiCZvQw?si=E1sCTbTFOCsBW2u2*

❁ ════ ❃•⇆•❃ ════ ❁

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐙𝐚𝐫𝐲𝐚𝐁𝐨𝐭-𝐕𝟏*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
