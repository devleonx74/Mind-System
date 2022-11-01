const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const ee = require(`../../emoji.json`)
const simplydjs = require('simply-djs')


const ranks = {
  "1" : "https://media.discordapp.net/attachments/818161633695367219/977516818610683915/Member.png?width=671&height=671",
  "2" : "https://media.discordapp.net/attachments/818161633695367219/977516818279317605/Kreativ.png?width=671&height=671",
  "3": "https://media.discordapp.net/attachments/818161633695367219/977516817947951184/Talent.png?width=671&height=671",
  "4": "https://media.discordapp.net/attachments/818161633695367219/977516817281077298/Artboard.png?width=671&height=671",
  "5": "https://cdn.discordapp.com/attachments/818161633695367219/977516816840671252/Bot_Server.png",
  "6" : "https://media.discordapp.net/attachments/818161633695367219/977516816396058665/Acedemy.png?width=671&height=671",
}

const ranksid = {
  "0": "875129699687334008",
  "1" : "875280266795577375",
  "2" : "875128818975780875",
  "3": "939150989456474153",
  "4": "875126974610288711",
  "5": "897917580189241354",
  "6" : "875127509606342676",
}

const invitebutton = new MessageActionRow()
.addComponents(
  new MessageButton()
  .setEmoji(ee.link)
  .setLabel('Invite')
  .setStyle('LINK')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=975792423773044776&permissions=8&scope=bot%20applications.commands`)
)
module.exports = {
    name: "embed",
    description: "🪂 Embed Builder",
    run: async (client, interaction, args) => {
      //  try {

          if(!interaction.member.roles.cache.has('929459777191415879')) return interaction.reply({
            ephemeral: true,
            
            embeds: [new MessageEmbed()
               .setAuthor({
                            name: client.user.username,
                            iconURL: client.user.avatarURL()
                        })
               .setFooter({
                            text: client.user.username,
                            iconURL: client.user.avatarURL()
                        })
              .setThumbnail(client.user.avatarURL())
              .setDescription(`${ee.false} **| You have No** **__Administration__**  ** Permissions** `)
            ]
          })
      
          client.embed(interaction)
          /////////////////////////////////
        


/** 
    } catch (e) {
        console.log('ERR *')
       return interaction.reply({
       embeds: [new MessageEmbed()
          .setAuthor({
                    name: client.user.username,
                    iconURL: client.user.avatarURL()
                })
          .setFooter({
                    text: client.user.username,
                    iconURL: client.user.avatarURL()
                })
         .setThumbnail(client.user.avatarURL())
         .setDescription(`**__Sorry__** **__${client.user.username}__** **,** **has a** **__Error__** ${ee.false}`)
       ]
       })
    }*/

    }}
    
    


