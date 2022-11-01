const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const ee = require(`../../emoji.json`)

const invitebutton = new MessageActionRow()
.addComponents(
  new MessageButton()
  .setEmoji(ee.link)
  .setLabel('Invite')
  .setStyle('LINK')
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=975792423773044776&permissions=8&scope=bot%20applications.commands`)
)
module.exports = {
    name: "valoranks",
    aliases: ["valoranks"],
    description: "Alle Valo Ranks",
    run: async (client, interaction, args) => {
     try{

            interaction.reply({
                embeds: [new MessageEmbed()
                    .setFooter({
                        text: client.user.username,
                        iconURL: client.user.avatarURL()
                    })
                    .setAuthor({
                        name: `${client.user.username}`,
                        iconURL: client.user.avatarURL()
                    })
                    .setThumbnail(client.user.avatarURL())
                    .setDescription(`
                    unrankt: keine anforderungen

                    silber team:  bronze 2-3 15% headshot 1,5kd
                    
                    platin team: platin 2-3 20% headshot und 2,0kd
                    
                    immortal team immortal 1-3 30% headshot und 3,0 kd 
                    `)
                ]
            })


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
            
        }
     
}}