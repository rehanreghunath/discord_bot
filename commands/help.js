module.exports = {
    name: "help",
    description:"Get a list of commands",
    execute(message, args){
        
    const Discord = require('discord.js')

        const mainEmbed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle("Here's a list of Commands")
        .setDescription("Use prefix `!` before a command")
        
    message.channel.send(mainEmbed)
    }}