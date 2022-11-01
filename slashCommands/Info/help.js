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
    name: "help",
    aliases: ["help" , "h"],
    description: "🤖 All Commands from the Discord Bot",
    run: async (client, interaction, args) => {
     try{

            interaction.reply({
                embeds: [new MessageEmbed()
                    .setFooter({
                        text: client.user.username,
                        iconURL: client.user.avatarURL()
                    })
                    .setAuthor({
                        name: `${client.user.username} Commands`,
                        iconURL: client.user.avatarURL()
                    })
                    .setThumbnail(client.user.avatarURL())
                    .setDescription(`

                    > *Prefix:* \`/\`
                    > *Required:* []
                    > *Optional:* <>
                    > *Coded by leonx74#9999*
                    
                    > **__INFO:__** ⚙️
                    > \`help\`

                    > **__ADMIN__** 🐼
                    > \`embed\` \`cw\`
                    
                    > **__STAFF:__** 👮🏻‍♀️
                    > \`member\` \`kreativ\` \`talent\` \`academy\` \`grinder\` \`competetiv\`

                    > **__SETUPS:__** 💻
                    > \`selfrole-setup\` \`verify-setup\`
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