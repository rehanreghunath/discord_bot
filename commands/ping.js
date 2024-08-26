module.exports = {
    name: "ping",
    description:"test command",
    execute(message,args){

        const Discord = require('discord.js')
        message.channel.send("Pinging...").then(m =>{
              const ping = m.createdTimestamp - message.createdTimestamp;
  
              const embed = new Discord.MessageEmbed()
              .setAuthor(`Your ping is ${ping}`)
              .setColor(`RANDOM`)

              m.edit(embed)
          });
        
}}


