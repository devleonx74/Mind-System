const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const { Permissions } = require('discord.js')
const { Modal, TextInputComponent, showModal } = require('discord-modals');

const config = {"QUESTIONS": [
  "Wie alt bist du?",
  "Wie lange bist du schon auf Discord?",
  "Warst du schon mal in einem anderen Clan?",
  "Was sind deine Stärken?",
  "Was sind deine Schwächen?",
  "Warum sollten wir genau dich annehmen?"
]}


module.exports = function (client) {

////////////////////TEAM APPLY =================================>

const bewerbungsformular = new Modal() // We create a Modal
.setCustomId('bewerbungmodal')
.setTitle('Team Mind Bewerbung')
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('frageq-customid')
  .setLabel(config.QUESTIONS[0])
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(2)
  .setMaxLength(2)
  .setPlaceholder('Was ist dein Alter?')
  .setRequired(true) // If it's required or not
)
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('frageqq-customid')
  .setLabel(config.QUESTIONS[2])
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(2)
  .setMaxLength(60)
  .setPlaceholder('Warst du schon mal in einem anderen Clan?')
  .setRequired(true) // If it's required or not
)
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('frageqqq-customid')
  .setLabel(config.QUESTIONS[3])
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(10)
  .setMaxLength(100)
  .setPlaceholder('Was sind deine Stärken?')
  .setRequired(true) // If it's required or not
)
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('frageqqqq-customid')
  .setLabel(config.QUESTIONS[4])
  .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(10)
  .setMaxLength(100)
  .setPlaceholder('Was sind deine Schwächen?')
  .setRequired(true) // If it's required or not
)
.addComponents(
  new TextInputComponent() // We create a Text Input Component
  .setCustomId('frageqqqqq-customid')
  .setLabel(config.QUESTIONS[5])
  .setStyle('LONG') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
  .setMinLength(50)
  .setMaxLength(260)
  .setPlaceholder('Warum sollten wir genau dich annehmen?')
  .setRequired(true) // If it's required or not
)

//>>>>>>>>>>>>>>>>>>>>>>> APLY TEAM >>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const inticketsystem = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('inticketsystem')
                .setPlaceholder('👉 | Klicke Hier')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: 'Ticket Schließen',
                        description: 'Klicke hier um diese Aktion Auszuführen',
                        emoji: '🔐',
                        value: 'closeticket'
                    },
                    {
                        label: 'Admin Ticket',
                        description: 'Klicke hier um diese Aktion Auszuführen',
                        emoji: '👮‍♂️',
                        value: 'calladminticket'
                    }
                ])
            )

            client.on("interactionCreate", async interaction=>{
              if(interaction.isSelectMenu()){
                if(interaction.customId == "inticketsystem") {
                if(interaction.message.partial) await interaction.message.fetch();
                  if(interaction.partial) await interaction.fetch();
                  if(!interaction.message.guild) return;
                  let choice = interaction.values[0] 
                  const member = interaction.member
                  const ticket = interaction.message.guild.channels 
                  if(choice == 'closeticket'){
                    interaction.channel.delete()
                  } else  if(choice == 'calladminticket'){
                    interaction.reply({
                      content: `
                      ✅ **|** <@${interaction.user.id}> *Das Ticket Wurde Erfolgreich zu einem Admin Ticket Geändert!* 
                      `, ephemeral: true
                    })
                  interaction.channel.send({
                    embeds: [new MessageEmbed()
                      .setDescription(`
                      *Dieses Ticket wird jetzt von Administratoren Weiter Geführt!* ⚡️

                      **Ticket Infos!** ⚙️

                      *<@${interaction.user.id}> hat das Admin Panel Ausgelöst* ⚠️
                      `)
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
                     ],
                     content: `<@&875125497225416784> **|** <@&875125714930765854> **|** <@&972473417313943593> **|** <@&929459777191415879>`
                  })
                  }
                }}
                
                })



    client.on("interactionCreate", async interaction=>{
        if(interaction.isSelectMenu()){
          if(interaction.customId == "ticket1") {
          if(interaction.message.partial) await interaction.message.fetch();
            if(interaction.partial) await interaction.fetch();
            if(!interaction.message.guild) return;
            let choice = interaction.values[0] 
            const member = interaction.member
            const ticket = interaction.message.guild.channels 
            if(choice == 'playerfn'){

              interaction.reply({
                content: `
                ✅ **|** <@${interaction.user.id}> *Dein Ticket wurde Erfolgreich Erstellt!* 
                `, ephemeral: true
              })

                ticket.create(`ticket-${interaction.user.username}`, {
                    permissionOverwrites: [
                      {
                        id: interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                       },
                       {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                       }, 
                      
                       {
                           id: "875126776337162320", 
                           allow: ["VIEW_CHANNEL"]
                       }
                       
                    ],
                    type: 'text',
                    parent: "894170477164109836"
                   }).then(ch => ch.send({
                     embeds: [new MessageEmbed()
                      .setDescription(`
                      *Wow Danke das du <@${interaction.user.id}> Ein Ticket Erstellt hast!* ❤️
                      
                      *Hier wird sich bald ein Team Mitglied um dich Kümmern :D* ⚡️

                      **__Ticket Manager Menu!__** ⚙️

                      **Admin Ticket** *==> Gib das Ticket an ein Admin Weiter!*
                      **Close Ticket** *==> Das Ticket wird Geschlossen!*
                      `)
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
                     ],
                     content: `<@${interaction.user.id}> **|** <@&875126481959911474> **'** <@&875125999203934208> **'** <@&875127328647299092>`,components: [inticketsystem]
                   }))
            } else  if(choice == 'playervalo'){

              interaction.reply({
                content: `
                ✅ **|** <@${interaction.user.id}> *Dein Ticket wurde Erfolgreich Erstellt!* 
                `, ephemeral: true
              })

                ticket.create(`ticket-${interaction.user.username}`, {
                    permissionOverwrites: [
                      {
                        id: interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                       },
                       {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                       }, 
                      
                       {
                           id: "875126776337162320", 
                           allow: ["VIEW_CHANNEL"]
                       }
                       
                    ],
                    type: 'text',
                    parent: "990374098708353154"
                   }).then(ch => ch.send({
                     embeds: [new MessageEmbed()
                      .setDescription(`
                      *Wow Danke das du <@${interaction.user.id}> Ein Ticket Erstellt hast!* ❤️
                      
                      *Hier wird sich bald ein Team Mitglied um dich Kümmern :D* ⚡️

                      **__Ticket Manager Menu!__** ⚙️

                      **Admin Ticket** *==> Gib das Ticket an ein Admin Weiter!*
                      **Close Ticket** *==> Das Ticket wird Geschlossen!*
                      `)
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
                     ],
                     content: `<@${interaction.user.id}> **|** <@&945681975811915836>`,components: [inticketsystem]
                   }))
            } else  if(choice == 'playerteam'){
              showModal(bewerbungsformular, {
                client: client, // Client to show the Modal through the Discord API.
                interaction: interaction // Show the modal with interaction data.
              });
            } else  if(choice == 'support'){

              interaction.reply({
                content: `
                ✅ **|** <@${interaction.user.id}> *Dein Ticket wurde Erfolgreich Erstellt!* 
                `, ephemeral: true
              })

                ticket.create(`ticket-${interaction.user.username}`, {
                    permissionOverwrites: [
                      {
                        id: interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                       },
                       {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                       }, 
                      
                       {
                           id: "875126776337162320", 
                           deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                       }
                       
                    ],
                    type: 'text',
                    parent: "920017552552374362"
                   }).then(ch => ch.send({
                     embeds: [new MessageEmbed()
                      .setDescription(`
                      *Wow Danke das du <@${interaction.user.id}> Ein Ticket Erstellt hast!* ❤️
                      
                      *Hier wird sich bald ein Team Mitglied um dich Kümmern :D* ⚡️

                      **__Ticket Manager Menu!__** ⚙️

                      **Admin Ticket** *==> Gib das Ticket an ein Admin Weiter!*
                      **Close Ticket** *==> Das Ticket wird Geschlossen!*
                      `)
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
                     ],
                     content: `<@${interaction.user.id}> **|** <@&875126776337162320>`,components: [inticketsystem]
                   }))
            }
        
        }}
        
        })











        ///=========================== TEAM BEWERBUNG FUNCTION=====================>
        client.on('modalSubmit', async (modal) => {
          if(modal.customId === 'bewerbungmodal') {
            modal.reply({
              content: `
👋 **|** *Danke für deine Bewerbung*
✅ **|** <@${modal.user.id}> *Dein Ticket wurde Erfolgreich Erstellt!* 
              `, ephemeral: true
            })

            const antwort1 = modal.getTextInputValue('frageq-customid');
            const antwort2 = modal.getTextInputValue('frageqq-customid');
            const antwort3 = modal.getTextInputValue('frageqqq-customid');
            const antwort4 = modal.getTextInputValue('frageqqqq-customid');
            const antwort5 = modal.getTextInputValue('frageqqqqq-customid');
            const ticket = modal.message.guild.channels 

            ticket.create(`ticket-${modal.user.username}`, {
              permissionOverwrites: [
                {
                  id: modal.user.id,
                  allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                 },
                 {
                  id: modal.guild.roles.everyone,
                  deny: ['VIEW_CHANNEL'],
                 },      
              ],
              type: 'text',
              parent: "875132428426027019"
             }).then(ch => ch.send({
               embeds: [new MessageEmbed()
                .setDescription(`
                *Wow Danke das du <@${modal.user.id}> Ein Ticket Erstellt hast!* ❤️
                
                *Hier wird sich bald ein Team Mitglied um dich Kümmern :D* ⚡️

                **__Ticket Manager Menu!__** ⚙️

                **Admin Ticket** *==> Gib das Ticket an ein Admin Weiter!*
                **Close Ticket** *==> Das Ticket wird Geschlossen!*

                **__Deine Bewerbungs Antworten!__** 🔐

                **1.** *${config.QUESTIONS[0]}*
                *${antwort1}*

                **2.** *${config.QUESTIONS[2]}*
                *${antwort2}*

                **3.** *${config.QUESTIONS[3]}*
                *${antwort3}*

                **4.** *${config.QUESTIONS[4]}*
                *${antwort4}*

                **5.** *${config.QUESTIONS[5]}*
                *${antwort5}*
                `)
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
               ],
               content: `<@${modal.user.id}> **|** <@&875126776337162320>`,components: [inticketsystem]
             }))

          }})
        ///=========================== TEAM BEWERBUNG FUNCTION=====================>
        
        
    }