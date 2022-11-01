const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const ee = require(`../../emoji.json`)

module.exports = {
    name: "cw",
    description: "⌛️ CLAN WARS",
    options: [
  {
            name: "clan_name",
            description: "CLANNAME",
            type: "STRING",
            required: true,
        },
        {
            name: "punkte_stand",
            description: "ERSTE PUNKEZAHL",
            type: "STRING",
            required: true,
        },
        {
            name: "punkte_standzwei",
            description: "ZWEITE PUNKEZAHL",
            type: "STRING",
            required: true,
        }


    ],
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
      

          /////////////////////////////////
          let { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction; 

          const clanname = interaction.options.getString('clan_name')
          const erstepunktstand = interaction.options.getString('punkte_stand')
          const zweitepunktstand = interaction.options.getString('punkte_standzwei')

          interaction.reply({
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
      .setDescription(`
      > **__CLAN WARS__** 🕹

      > *__TEAM MIND__* **VS** *__${clanname}__* 🔫

      > *__PUNKTESTAND:__* *__${erstepunktstand}:${zweitepunktstand}__*
      `)
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