const enmap = require("enmap")   
const db = require("quick.db")
const Discord = require("discord.js")
const canvacord = require("canvacord");
const Canvas = require("canvas");
const { fetchTranscript } = require('discord-ghost-transcript-v13');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require("@discordjs/voice");
const Collection = require('discord.js')
const client = new Discord.Client({
  //fetchAllMembers: false,
  //restTimeOffset: 0,
  //restWsBridgetimeout: 100,
  shards: "auto",
//  ws: { properties: { $browser: "Discord iOS" }},
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [ 
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,

    Discord.Intents.FLAGS.GUILD_BANS,
    //Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
})
//<====functions=====>

//<====functions=====>
//<====COMMANDS=====>



const Style = {
  error: "\x1b[31m\x1b",
  warning: "\x1b[33m\x1b",
  success: "\x1b[32m\x1b"
}
const ee = require('./emoji.json')

client.config = require("./config.json")
client.ee = require("./emoji.json")
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

const fs = require('fs')

fs.readdirSync(`./functions/`)
.filter((file) => file.endsWith(`.js`))
.forEach(file => {
    let pull = require(`./functions/${file}`);
    (pull.name, pull)(client)
})
console.log('FUNCTIONS LOADED')

const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");

  const config = require("./config.json")







  


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

   
  const djs = require(`djs-embed-builder`);
  client.embed = new djs(client).createEmbed
//<========================================SLASH COMMANDS==================================>//


client.deploySlash = {
  enabled: true,
  guild: false, // false | "ID" (if it's false, just set global once, and then never needed again!)
}

client.slashCommands = new Discord.Collection();

const { readdirSync } = require(`fs`);


console.log(`{} - Loading SlashCommands`);
const slashCommandsArray = [];
readdirSync(`${process.cwd()}/slashCommands/`)
    .forEach((directory) => {
        readdirSync(`${process.cwd()}/slashCommands/${directory}/`)
            .filter((file) => file.endsWith(`.js`))
            .forEach(file => {
                let pull = require(`${process.cwd()}/slashCommands/${directory}/${file}`);
                client.slashCommands.set(pull.name, pull);
                slashCommandsArray.push(pull);
            })
    })



    client.on('ready', () => {
      console.log(Style.success,`Log in ${client.user.username}....`)
      console.log(Style.warning, client.guilds.cache.map((guild) => guild.name+` ==> Guild || ${guild.id} || ${guild.memberCount}`).join('\n'))
      client.user.setActivity('16.8.2022 😭 😢')
      if(client.deploySlash.enabled) {
        client.application.commands.set(slashCommandsArray);
    }
    setInterval(() => {
      autoembed("875302740211945512")
  }, 21600000)
    })


    async function autoembed(channel) {
      try {
      client.channels.cache.get(channel).send({
        content: `
*Nutzt gerne den* **CC**: \`team-mind\` *im* **Itemshop!** <:BotServer:977546350260531280>
*Nicht vergessen! Der* **Code** *muss alle* **14 Tage** *neu eingetragen werden!*

https://youtu.be/isimO2IFxsM

        `
       })
    } catch (e) {
      console.log('Err bei Auto Embed')
    }
}


    client.on('interactionCreate', interaction => {
      try {
      if (interaction.isCommand()) {
        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) return interaction.reply({ content: "❌ | Error" }).catch(() => null);
    
        const args = [];
    
        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id) || interaction.guild.members.fetch(interaction.user.id).catch(() => null)
    
        cmd.run(client, interaction, args, "/");
    }
  } catch(e) {
    console.log('ERR * SLASH')
  }
  })

                

  client.on("interaction", async(interaction) => {
    if(!interaction.isButton()) return
    if(interaction.customId == "verifyroleadd") {
      if(interaction.message.partial) await interaction.message.fetch();
        if(interaction.partial) await interaction.fetch();
        if(!interaction.message.guild) return;
        
        const role = await interaction.guild.roles.fetch(`966022359742054421`);
        if (interaction.member.roles.cache.has('966022359742054421')) {
            interaction.member.roles.remove('966022359742054421')
            interaction.reply({ content: `**__Schade bye__** 👋`, ephemeral: true });
        } else {
            interaction.member.roles.add('966022359742054421')
            interaction.reply({ content: `💪 **|** **__Du hast dich erfolgreich__** ${role}`, ephemeral: true });
        }
    }})
      
        ////////////////////////////////////////////////////////////////////////////////////
                                              
                                                

                                              ///////////////////////////


let serverID = "875100296261533716";
let msg_id = "990365398123806720"; 
let ch_id = "990291111463485470"; 
let supportRole = "875126776337162320";


const ticketmenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('ticket1')
                .setPlaceholder('👉 | Klicke Hier')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: 'Fortnite Ticket',
                        description: 'Klicke hier um ein Ticket zu Erstellen',
                        emoji: '931674134704971796',
                        value: 'playerfn'
                    },
                    {
                        label: 'Valorant Ticket',
                        description: 'Klicke hier um ein Ticket zu Erstellen',
                        emoji: '875344983652175872',
                        value: 'playervalo'
                    },
                    {
                        label: 'Team Bewerbung',
                        description: 'Klicke hier um ein Ticket zu Erstellen',
                        emoji: '957214635151470612',
                        value: 'playerteam'
                    },
                    {
                        label: 'Support Ticket',
                        description: 'Klicke hier um ein Ticket zu Erstellen',
                        emoji: '977546350260531280',
                        value: 'support'
                    }
                ])
            )

client.on("presenceUpdate", async(oldPresence, newPresence) => {
let user = client.users.cache.get(newPresence.userId)
if(!user) return;

const guild = client.guilds.cache.get(serverID)
if(!guild) return;
const member = await guild.members.fetch(user).catch((e) => {})
let ch = guild.channels.cache.get(`${ch_id}`)
let msg = await ch.messages.fetch(`${msg_id}`).catch((e) => {console.log(e.message)})
if(msg == null) return;
/** 
if(member.roles.cache.some(r => r.id == supportRole)){
  let ch = guild.channels.cache.get(`${ch_id}`)
  if(!ch) return;
  let msg = await ch.messages.fetch(`${msg_id}`).catch((e) => {console.log(e.message)})
  if(msg == null) return;
  
  let people_who_support = []
  let members = newPresence.guild.roles.cache.get(supportRole).members.map(m => m)
  members.forEach(m=> {
    people_who_support.push(m)
  })

  */
  const embed = new MessageEmbed()
  .setDescription(
`
*Klicke auf das Menu unter dieser Nachricht um eine Auswahl zu Treffen!* 

**Team Mitglieder Online:** **__30__** 🟢
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
  msg.edit({ embeds: [embed], components: [ticketmenu] })
  /**
} else { 
  return;
}
 */
})


const discordModals = require('discord-modals'); 
discordModals(client);
const { Modal, TextInputComponent, showModal } = require('discord-modals');





const rolemenu1 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('rolemenu1')
                .setPlaceholder('👉 | Wähle dein Alter aus!')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: '6+',
                        description: 'Klicke hier um deine Rolle zu Erhalten',
                        emoji: '958416987237810196',
                        value: 'alter6'
                    },
                    {
                      label: '12+',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '931671250672181308',
                      value: 'alter12'
                  },
                    {
                      label: '16+',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '931671250516992012',
                      value: 'alter16'
                  },
                  {
                    label: '18+',
                    description: 'Klicke hier um deine Rolle zu Erhalten',
                    emoji: '931671250844135526',
                    value: 'alter18'
                }
                ])
            )


            const rolemenu2 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('rolemenu2')
                .setPlaceholder('👉 | Wähle dein Geschlecht aus!')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: 'Männlich',
                        description: 'Klicke hier um deine Rolle zu Erhalten',
                        emoji: '👨‍🦰',
                        value: 'man'
                    },
                    {
                      label: 'Weiblich',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '👩‍🦰',
                      value: 'frau'
                  },
                    {
                      label: 'Benutzerdefiniert',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '👤',
                      value: 'manfrau'
                  }
                ])
            )

            const rolemenu3 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('rolemenu3')
                .setPlaceholder('👉 | Wähle dein Land aus!')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                  {
                    label: 'Deutschland',
                    description: 'Klicke hier um deine Rolle zu Erhalten',
                    emoji: '🇩🇪',
                    value: 'de'
                },
                    {
                        label: 'Österreich',
                        description: 'Klicke hier um deine Rolle zu Erhalten',
                        emoji: '🇦🇹',
                        value: 'osterreich'
                    },
                    {
                      label: 'Schweiz',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '🇨🇭',
                      value: 'schweiz'
                  }
                ])
            )

            const rolemenu4 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('rolemenu4')
                .setPlaceholder('👉 | Wähle deine Platform aus!')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: 'Windows',
                        description: 'Klicke hier um deine Rolle zu Erhalten',
                        emoji: '923627098726346853',
                        value: 'windows'
                    },
                    {
                      label: 'Playstation',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '923627123309182996',
                      value: 'playstation'
                  },
                    {
                      label: 'Xbox',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '923627145958408273',
                      value: 'xbox'
                  },
                  {
                    label: 'Switch',
                    description: 'Klicke hier um deine Rolle zu Erhalten',
                    emoji: '923627080879583272',
                    value: 'switch'
                }
                ])
            )


            const rolemenu5 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('rolemenu5')
                .setPlaceholder('👉 | Wähle deine Spiele aus!')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: 'Fortnite',
                        description: 'Klicke hier um deine Rolle zu Erhalten',
                        emoji: '931674134704971796',
                        value: 'fn'
                    },
                    {
                      label: 'Valorant',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '931674134180683909',
                      value: 'valo'
                  },
                    {
                      label: 'Minecraft',
                      description: 'Klicke hier um deine Rolle zu Erhalten',
                      emoji: '875341588052717578',
                      value: 'mc'
                  },
                  {
                    label: 'Rocket League',
                    description: 'Klicke hier um deine Rolle zu Erhalten',
                    emoji: '958419751430930432',
                    value: 'rl'
                },
                {
                  label: 'Cod',
                  description: 'Klicke hier um deine Rolle zu Erhalten',
                  emoji: '875345280705363998',
                  value: 'cod'
              }
                ])
            )




client.on("message", async message => {
  const args = message.content.slice().trim().split(/ +/g);
  const user = message.author
  if (message.content.startsWith(`${config.prefix}setup-selfrole`) && message.member.roles.cache.has('929459777191415879')) {

message.channel.send({
  embeds: [new MessageEmbed()
    .setDescription(`
    *Wow Danke das du dein Rollen Anpassen Willst!* ❤️

    *Wähle einfach bei den Menus Deine Rollen aus!* ⚡️
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
  ], components: [rolemenu1, rolemenu2, rolemenu3, rolemenu4, rolemenu5]
})


  }
})

              client.on("message", async message => {
                const args = message.content.slice().trim().split(/ +/g);
                const user = message.author
                if (message.content.startsWith(`${config.prefix}tbjointeam`)) {
                  if(!message.member.roles.cache.has('875132358569910312')) return message.react('❌')
        
                  let channel = message.member.voice.channel.id;
                  if (!channel) return message.channel.send("You need to be connected to voice channel");
                  if (!message.guild.me.voice.connection) {
             
                    message.react('✅')
  

                        let members = message.guild.roles.cache.get('875126776337162320').members.map(m => m)
                        members.forEach(m=> {
                          m.voice.setChannel(channel)
                  })
                }
            
                          }})

                          client.on("message", async message => {
                            const args = message.content.slice().trim().split(/ +/g);
                            const user = message.author
                            if (message.content.startsWith(`${config.prefix}tbunmuteteam`)) {
                              if(!message.member.roles.cache.has('875132358569910312')) return message.react('❌')
                    
                              let channel = message.member.voice.channel.id;
                              if (!channel) return message.channel.send("You need to be connected to voice channel");
                              if (!message.guild.me.voice.connection) {
                         
                                message.react('✅')
              
            
                                    let members = message.guild.roles.cache.get('875126776337162320').members.map(m => m)
                                    members.forEach(m=> {
                                      m.voice.setMute(false)
                              })
                            }
                        
                                      }})

                                      client.on("message", async message => {
                                        const args = message.content.slice().trim().split(/ +/g);
                                        const user = message.author
                                        if (message.content.startsWith(`${config.prefix}tbmuteteam`)) {
                                          if(!message.member.roles.cache.has('875132358569910312')) return message.react('❌')
                                
                                          let channel = message.member.voice.channel.id;
                                          if (!channel) return message.channel.send("You need to be connected to voice channel");
                                          if (!message.guild.me.voice.connection) {
                                     
                                              message.react('✅')
                          
                        
                                                let members = message.guild.roles.cache.get('875126776337162320').members.map(m => m)
                                                members.forEach(m=> {
                                                  m.voice.setMute(true)
                                          })
                                        }
                                    
                                                  }})


                                                  client.on("message", async message => {
                                                    const args = message.content.slice().trim().split(/ +/g);
                                                    const user = message.author
                                                    if (message.content.startsWith(`${config.prefix}tbende`)) {
                                                      if(!message.member.roles.cache.has('875132358569910312')) return message.react('❌')
                                            
                                                      let channel = message.member.voice.channel.id;
                                                      if (!channel) return message.channel.send("You need to be connected to voice channel");
                                                      if (!message.guild.me.voice.connection) {
                                                 
                                                          message.react('✅')
                                      
                                    
                                                            let members = message.guild.roles.cache.get('875126776337162320').members.map(m => m)
                                                            members.forEach(m=> {
                                                              m.voice.setChannel('961274530440044574')
                                                      })
                                                    }
                                                
                                                              }})


                                                              client.on("message", async message => {
                                                                const args = message.content.slice().trim().split(/ +/g);
                                                                const user = message.author
                                                                if (message.content.startsWith(`${config.prefix}tbhelp`)) {
                                                                  if(!message.member.roles.cache.has('875132358569910312')) return message.react('❌')
                                                        
                                                               
                                                             
                                                                      message.react('✅')
                                                  
                                                
                                                                      message.channel.send({
                                                                        embeds: [new MessageEmbed()
                                                                          .setDescription(`
                                                                       **Help Team Besprechung**
 
                                                                       \`tbhelp\` \`tbende\` \`tbmuteteam\` \`tbunmuteteam\` \`tbjointeam\`
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
                                                                           ]
                                                                        })
                                                         
                                                            
                                                                          }})



                      

















process.on('unhandledRejection', (reason, p) => {
  console.log('[antiCrash]');
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
console.log('[antiCrash]');
  console.log(err, origin);
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('[antiCrash]');
  console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
  //console.log(' [antiCrash] :: Multiple Resolves');
  //console.log(type, promise, reason);
});


                                              
 client.login(config.token)



 

