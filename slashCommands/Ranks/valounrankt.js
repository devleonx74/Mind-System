const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const ee = require(`../../emoji.json`)


const ranksid = {
  "0": "875129699687334008",
  "1" : "940196927578963968", //immortal
  "2" : "940196940069621791", //platin
  "3": "940196943307632670", //silber
  "4": "940196947447386122", //unrank 
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
    name: "unrankt",
    description: "👮🏻‍♀️ Give the unrankt Role",
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