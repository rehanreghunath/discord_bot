module.exports = {
    name: "grrole",
    description: "Grant or revoke role to/from mentioned user",
    execute(message, args){

        const Discord = require("discord.js");
        const member = message.mentions.members ? message.mentions.members.first() : null;
        const user = message.mentions.users ? message.mentions.users.first() : null;
        const role = message.mentions.roles //? args[1] : null;
        const authorHighestRole = message.author.highestRole;
        const mentionHighestRole = member ? member.highestRole : null;

    const embed1 = new Discord.MessageEmbed()
        .setColor(`#f30e0e`)
        .setTitle("<a:failed:794129492037730324> Wrong Channel")
        .setDescription("This command can only be used in a Server!");
  
    const embed2 = new Discord.MessageEmbed()
        .setColor(`#f30e0e`)
        .setTitle("<a:failed:794129492037730324> Wrong Usage")
        .setDescription("You must mention a valid member/role")
        .addField(
          "Correct Usage",
          "`!grrole @member @role`, `grantrole @member @role`",
          true
        );
  
    const embed3 = new Discord.MessageEmbed()
        .setColor(`#f30e0e`)
        .setTitle("<a:failed:794129492037730324> Missing Permissions")
        .setDescription(
          "You do not have the required permissions to use this command"
        )
        .addField(
          "Required Permission",
          "`Manage Roles` , `Administrator`",
          true
        );
  
    const embed4 = new Discord.MessageEmbed()
        .setColor("#f30e0e")
        .setTitle(
          "<a:failed:794129492037730324> You cannot grant role to a member with equal or higher roles than your own"
        );
    
    const embed5 = new Discord.MessageEmbed()
        .setColor("#f30e0e")
        .setTitle(
          `<a:failed:794129492037730324> ${user ? user.tag : ""} already has the role ${role.name}`
        );
    const embed6 = new Discord.MessageEmbed()
        .setColor("#f30e0e")
        .setTitle(
          "<a:failed:794129492037730324> You cannot grant a role equal or higher than your own highest role"
        );
  
    const embed7 = new Discord.MessageEmbed()
        .setColor("#f30e0e")
        .setTitle("<a:failed:794129492037730324> You cannot kick a moderator");
  
    const embed8 = new Discord.MessageEmbed()
        .setColor(`#6cff48`)
        .setTitle("<a:success:794132937812738048> Action Successful")
        .setDescription(`${user ? user.tag : ""} was given the role ${role.name}`)
        .addField(`Moderator`, `${message.author.tag}`)

      if (message.channel.type == "dm") {
        message.channel.send(embed1);
      } else if (!member) {
        message.channel.send(embed2);
      } else if(!role){
        message.channel.send(embed2)
      } else if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")){
        message.channel.send(embed3)
      } else if(mentionHighestRole >= authorHighestRole){
        message.channel.send(embed4)
      } else if(message.member.roles.cache.has(role)){
        message.channel.send(embed5)
      } else if(role >= authorHighestRole){
        message.channel.send(embed6)
      } else if(message.guild.member(member).hasPermission("ADMINISTRATOR")){
        message.channel.send(embed7)
      } else{
        member.roles.add(role).then(
        message.channel.send(embed8));
      }  
}}
      