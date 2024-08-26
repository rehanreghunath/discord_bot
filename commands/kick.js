module.exports = {
  name: "kick",
  description: "Kick a member",
  execute(message, args) {
    const Discord = require("discord.js");
    const member = message.mentions.members ? message.mentions.members.first() : null;
    const user = message.mentions.users ? message.mentions.users.first() : null;
    const authorHighestRole = message.author.highestRole;
    const mentionHighestRole = member ? member.highestRole : null;
    const reason = args.join(" ").slice(22) || "No reason Provided";

    const embed1 = new Discord.MessageEmbed()
      .setColor(`#f30e0e`)
      .setTitle("<a:failed:794129492037730324> Wrong Channel")
      .setDescription("This command can only be used in a Server!");

    const embed2 = new Discord.MessageEmbed()
      .setColor(`#f30e0e`)
      .setTitle("<a:failed:794129492037730324> Wrong Usage")
      .setDescription("You must mention a valid member to kick them")
      .addField(
        "Correct Usage",
        "`!kick @member`, `!kick @member <reason>`",
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
        "`Kick Members` , `Administrator`",
        true
      );

    const embed4 = new Discord.MessageEmbed()
      .setColor("#f30e0e")
      .setTitle(
        "<a:failed:794129492037730324> You cannot kick a member with equal or higher roles than your own"
      );

    const embed5 = new Discord.MessageEmbed()
      .setColor("#f30e0e")
      .setTitle("<a:failed:794129492037730324> You cannot kick a moderator");

    const embed6 = new Discord.MessageEmbed()
      .setColor(`#6cff48`)
      .setTitle("<a:success:794132937812738048> Action Successful")
      .setDescription(`${user ? user.tag : ""} was kicked`)
      .addField(`Moderator`, `${message.author.tag}`)
      .addField(`Reason`, `${reason}`);

    if (message.channel.type == "dm") {
      message.channel.send(embed1);
    } else if (!member) {
      message.channel.send(embed2);
    } else if(!reason){
      reason = "No Reason Provided"
    } else if(!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")){
      message.channel.send(embed3)
    } else if(mentionHighestRole >= authorHighestRole){
      message.channel.send(embed4)
    } else if(message.guild.member(member).hasPermission("ADMINISTRATOR")){
      message.channel.send(embed5)
    } else{
      member.kick().then(
      message.channel.send(embed6));
    }

}}
