const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;iyyan p;;;'
                    + 'FN:iyyan p\n' // full name
                    + 'ORG:iyyan p;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6289614412045:+62 896-1441-2045\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'iyyan', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
