const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const ee = require(`../../emoji.json`)

const roleverifyembed = new MessageActionRow()
.addComponents(
    new MessageButton()
    .setCustomId('verifyroleadd')
    .setEmoji(`📝`)
    .setLabel('Hier Verifizieren')
    .setStyle('PRIMARY')
)
module.exports = {
    name: "setupverify",
    description: "Verify Setup",
    run: async (client, interaction, args) => {
        try {
        
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
              .setDescription(`${ee.false} **| You have No** **__ADMINISTRATION__**  ** Permissions** `)
            ]
          })
       



interaction.reply({
    embeds: [new MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setAuthor({
        name: client.user.username,
        iconURL: client.user.avatarURL()
    })
.setFooter({
        text: client.user.username,
        iconURL: client.user.avatarURL()
    })
.setDescription(`
<:BotServer:977546350260531280> **Nicknamen und Profielbilder**
\`\`\`fix
- § Nicknames dürfen keine beleidigenden oder anderen verbotenen oder geschützten Namen oder Namensteile enthalten

- § Avatare dürfen keine pornographischen, rassistischen, beleidigenden oder andere gegen das deutsche Recht verstoßenden Inhalte beinhalten\`\`\`
<:BotServer:977546350260531280> **Öffentliche Chat's**
\`\`\`fix
- § Private Daten wie Telefonnummern, Adressen, Passwörter und ähnlichem dürfen nicht öffentlich ausgetauscht werden. Ein Teammitglied wird zu keinem Zeitpunkt nach sensiblen Daten fragen

- § Beleidigungen sind zu unterlassen

- § Jegliche Art von Spam ist verboten

- § Fremdwerbung jeglicher Art ist strengstens untersagt und wird bestraft

- § Rassismus und Antisemitismus in jeglicher Form wird nicht geduldet

- § Obszönes, Rechtswidriges oder nicht Jugendfreies hat im Chat absolut NICHTS verloren und wird bestraft!

- § Kein Spam, darunter fällt auch Capslock!\`\`\`
<:BotServer:977546350260531280> **Öffentliche Talk's**
\`\`\`fix
- § Unter keinen Umständen darf die Stimme anderer User ohne deren Einverständnis aufgenommen werden

- § Channel-hopping (ständiges Springen von dem einen in den anderen Channel) ist verboten.\`\`\`
<:BotServer:977546350260531280> **Das Regelwerk**
\`\`\`fix
- § Unwissenheit schützt dich nicht vor Konsequenzen, solltest du die Regeln nicht einhalten

- § Mit dem Joinen auf diesen Discord-Server akzeptierst du diese Regeln\`\`\`
<:BotServer:977546350260531280> **Discord Term's**
\`\`\`fix
- § zusätzlich gelten weiterhin die Discord-Regeln.\`\`\`
[**__Discord Terms__**](https://discord.com/terms)
[**__Discord Datenschutz__**](https://support.discord.com/hc/de/articles/360004109911-Datenschutzbestimmungen)

**__Bei einem Regelbruch bitten wir dies im Support zu melden!__**
`)
    ], components: [roleverifyembed]
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