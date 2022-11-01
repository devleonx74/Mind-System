const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const { Permissions } = require('discord.js')

const { testElement } = require('domutils');


module.exports = function (client) {

    client.on("guildMemberAdd", async member => {
     
        //If not in a guild return
        if(!member.guild) return;
    
        member.setNickname(`Mind | ${member.user.username}`)
        const chat = member.guild.channels.cache.get('875302740211945512')

    //      const attachment = new discord.MessageAttachment(data, "welcome-image.png")
          

         // chat.send({content: `*Willkommen auf* **Team Mind:tm:** 👋`,files: [attachment]})

         chat.send({content: `*Willkommen auf* **Team Mind:tm:** 👋`})
/**
          if(member.user.id === '874938976111300620') return member.ban() // Mechanic
    */ 
    
      })
    
  


}