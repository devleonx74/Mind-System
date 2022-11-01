const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const ee = require(`../../emoji.json`)


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
    name: "academy",
    description: "👮🏻‍♀️ Give the Academy Role",
    options: [
  {
            name: "user_ping",
            description: "PING A USER",
            type: "USER",
            required: true,
        },
    ],
    run: async (client, interaction, args) => {
      //  try {

          if(!interaction.member.roles.cache.has('875126776337162320')) return interaction.reply({
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
      

          /////////////////////////////////
          let { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction; 
          let user = options.getUser("user_ping");
          const fehlerping = new MessageEmbed()
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.avatarURL()
        })
.setFooter({
            text: client.user.username,
            iconURL: client.user.avatarURL()
        })
.setThumbnail(client.user.avatarURL())
          .setTimestamp()
          .setTitle('❌ Error | Bitte Pinge ein User !!')
          
          if (!user) return interaction.reply({
            embeds : [fehlerping]
          })
          
          const authorembed = new MessageEmbed()
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.avatarURL()
        })
.setFooter({
            text: client.user.username,
            iconURL: client.user.avatarURL()
        })
.setThumbnail(client.user.avatarURL())
          .setTimestamp()
          .setTitle(`✅ Fertig \`${user.tag}\` Hat die Role Erhalten`)
          
          interaction.reply({
            content: `✅ \`${interaction.user.tag}\``, 
            embeds: [authorembed]
          })
          const mainrole = await interaction.guild.roles.fetch(ranksid[0]);
          const role = await interaction.guild.roles.fetch(ranksid[4]);
          
          const embedfinsih = new MessageEmbed()
          .setTitle('Hier Hast du dein Avatar für Deinen Rang 🪄')
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.avatarURL()
        })
.setFooter({
            text: client.user.username,
            iconURL: client.user.avatarURL()
        })
.setThumbnail(client.user.avatarURL())
          .setImage(ranks[4])
          .setTimestamp()
          
          interaction.guild.members.fetch(user).then(member => {
            member.roles.add(role);
            member.roles.add(mainrole)
          })  
          
          const joinedch = interaction.guild.channels.cache.get('931647909173280788')
          joinedch.send({
            content: `<@${user.id}> ' ***Willst du auch*** ***__joinen?__*** ***Versuche es in ==>*** <#990291111463485470>`,
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
              .setTimestamp()
             .setDescription(`**Willkommen** <@${user.id}> **im** **<@&${ranksid[4]}>**`)
            ]
          })
          
          
          interaction.channel.send({
            content: `${user}`,
            embeds: [embedfinsih]
          })

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