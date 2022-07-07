
let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = `
"Aku ora ngerti, opo iki?"
Info fitur
> Download video Yt & tiktok
> Stiker Maker
dsb.
Jika kurang mengerti boleh tanya owner
My Website =>
  /> https://fian014.github.io
`
conn.sendButtonImg(m.chat, fla + 'Aku ora ngerti', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['fn']
handler.tags = ['info']
handler.command = /^(tqto|team)$/i

module.exports = handler
