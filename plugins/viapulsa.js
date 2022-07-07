let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa
╠➥ Ke nomer ini
║➥ 081331954019
╠═ Tidak menjual apapun (tergantung orangnya), lebih lengkapnya hubungi nomer diatas
║ 
╠═ ©2022
╠═ Scrip Mod by FnCode
╠═〘 Amigos 〙 ═`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
