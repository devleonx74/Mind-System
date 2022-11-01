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
    name: "fnranks",
    aliases: ["fnranks"],
    description: "Alle Fn Ranks",
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
                    **Die Infos - Anforderungen**

                    @• Member Team
                    
                    ●keine Spezielen Anforderungen notwendig
                    
                    
                    @• Kreativ Team
                    
                    ●starke Spielweise in Kreativ
                    ●bereit CW's zu spielen
                    ●Geistige Reife
                    ●aktives Discord Verhalten
                    
                    
                    @• CW Team
                    
                    (top Spieler des Clans)
                    ●werden nur von Managern oder höher vergeben
                    ●Geistige Reife
                    ●aktives Discord Verhalten
                    
                    
                    @• Talent Team
                    
                    ●min. 10000 Arena Punkte
                    ●Geistige Reife
                    ●Aktives Discord Verhalten
                    ●starke Spielweiße in Public Runden
                    
                    
                    @• Academy Team
                    
                    ●min. 6000 Arena
                    ●min. 100 Power Ranking Points
                    ●Geistige Reife
                    ●aktives Discord Verhalten
                    
                    @• Grinder Team
                    
                    ●min. 8000 Arena Punkte
                    ●min. 250 Power Ranking Points
                    ●Geistige Reife
                    ●Aktives Discord Verhalten
                    
                    
                    @• Competetiv Team
                    
                    ●min. 10000 Arena Punkte
                    ●min. 500 Power Ranking Points
                    ●Geistige Reife
                    ●Aktives Discord Verhalten
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