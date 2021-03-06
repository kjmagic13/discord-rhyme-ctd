// const { MessageEmbed } = require('discord.js')
// const axios = require('axios')

module.exports = async (message) => {
  const users = message.mentions.users.size
    ? message.mentions.users.map((u) => `<@${u.id}>`).join(' ')
    : `<@${message.author.id}>`

  if (message.content.toLowerCase().includes('!ctd')) {
    message.channel.send(`Yo ${users}, Catch this Dong!`)
    return
  }

  if (message.content.toLowerCase().includes('!ct_')) {
    const word = randomRhyme()

    const phrase =
      word == 'bong'
        ? `Yo ${users}, Smoke this ${word}!`
        : `Yo ${users}, Catch this ${word}!`

    message.channel.send(phrase)

    return
  }

  if (message.content.toLowerCase().startsWith('!b')) {
    const args = message.content.slice('!b'.length).trim().split(' ')
    let shaftInt = parseInt(args[0]) || 7

    if (shaftInt < 1 || shaftInt > 100) {
      shaftInt = 7
    }

    let shaft = ''
    for (let index = 0; index < shaftInt; index++) {
      shaft += '='
    }

    message.channel.send(`B${shaft}D`)
    return
  }
}

function randomRhyme() {
  const words = require('../data/words.json')
  const { word } = words[Math.floor(Math.random() * words.length)]
  return word
}
