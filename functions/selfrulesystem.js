const discord = require('discord.js')
const { MessageEmbed, MessageActionRow, MessageButton , MessageSelectMenu} = require("discord.js");
const { Permissions } = require('discord.js')

module.exports = function (client) {

    client.on("interactionCreate", async interaction=>{
        if(interaction.isSelectMenu()){
          if(interaction.customId == "rolemenu1") {
          if(interaction.message.partial) await interaction.message.fetch();
            if(interaction.partial) await interaction.fetch();
            if(!interaction.message.guild) return;
            let choice = interaction.values[0] 
            const member = interaction.member
            const ticket = interaction.message.guild.channels 
            if(choice == 'alter6'){
                        const roleid = '875339639697862677'
                        const role = await interaction.guild.roles.fetch(roleid);
                        if (interaction.member.roles.cache.has(roleid)) {
                            interaction.member.roles.remove(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                        } else {
                            interaction.member.roles.add(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                        }
            } else if(choice == 'alter12'){
                const roleid = '958416656382705794'
                const role = await interaction.guild.roles.fetch(roleid);
                if (interaction.member.roles.cache.has(roleid)) {
                    interaction.member.roles.remove(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                } else {
                    interaction.member.roles.add(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                }
    } else if(choice == 'alter16'){
        const roleid = '875339682546851900'
        const role = await interaction.guild.roles.fetch(roleid);
        if (interaction.member.roles.cache.has(roleid)) {
            interaction.member.roles.remove(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
        }
}else if(choice == 'alter18'){
    const roleid = '875339710594158643'
    const role = await interaction.guild.roles.fetch(roleid);
    if (interaction.member.roles.cache.has(roleid)) {
        interaction.member.roles.remove(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
    } else {
        interaction.member.roles.add(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
    }
}





        }}
    })



    client.on("interactionCreate", async interaction=>{
        if(interaction.isSelectMenu()){
          if(interaction.customId == "rolemenu2") {
          if(interaction.message.partial) await interaction.message.fetch();
            if(interaction.partial) await interaction.fetch();
            if(!interaction.message.guild) return;
            let choice = interaction.values[0] 
            const member = interaction.member
            const ticket = interaction.message.guild.channels 
            if(choice == 'man'){
                        const roleid = '875127689428729867'
                        const role = await interaction.guild.roles.fetch(roleid);
                        if (interaction.member.roles.cache.has(roleid)) {
                            interaction.member.roles.remove(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                        } else {
                            interaction.member.roles.add(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                        }
            } else if(choice == 'frau'){
                const roleid = '875127606029201408'
                const role = await interaction.guild.roles.fetch(roleid);
                if (interaction.member.roles.cache.has(roleid)) {
                    interaction.member.roles.remove(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                } else {
                    interaction.member.roles.add(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                }
    }  else if(choice == 'manfrau'){
        const roleid = '927934309317369957'
        const role = await interaction.guild.roles.fetch(roleid);
        if (interaction.member.roles.cache.has(roleid)) {
            interaction.member.roles.remove(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
        }
}
        }}
    })



    client.on("interactionCreate", async interaction=>{
        if(interaction.isSelectMenu()){
          if(interaction.customId == "rolemenu3") {
          if(interaction.message.partial) await interaction.message.fetch();
            if(interaction.partial) await interaction.fetch();
            if(!interaction.message.guild) return;
            let choice = interaction.values[0] 
            const member = interaction.member
            const ticket = interaction.message.guild.channels 
            if(choice == 'de'){
                        const roleid = '958417775431385148'
                        const role = await interaction.guild.roles.fetch(roleid);
                        if (interaction.member.roles.cache.has(roleid)) {
                            interaction.member.roles.remove(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                        } else {
                            interaction.member.roles.add(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                        }
            }  else  if(choice == 'osterreich'){
                const roleid = '958417823858847775'
                const role = await interaction.guild.roles.fetch(roleid);
                if (interaction.member.roles.cache.has(roleid)) {
                    interaction.member.roles.remove(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                } else {
                    interaction.member.roles.add(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                }
    } else  if(choice == 'schweiz'){
        const roleid = '958417891949158460'
        const role = await interaction.guild.roles.fetch(roleid);
        if (interaction.member.roles.cache.has(roleid)) {
            interaction.member.roles.remove(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
        }
} 
        }}
    })


    client.on("interactionCreate", async interaction=>{
        if(interaction.isSelectMenu()){
          if(interaction.customId == "rolemenu4") {
          if(interaction.message.partial) await interaction.message.fetch();
            if(interaction.partial) await interaction.fetch();
            if(!interaction.message.guild) return;
            let choice = interaction.values[0] 
            const member = interaction.member
            const ticket = interaction.message.guild.channels 
            if(choice == 'windows'){
                        const roleid = '875339543371464715'
                        const role = await interaction.guild.roles.fetch(roleid);
                        if (interaction.member.roles.cache.has(roleid)) {
                            interaction.member.roles.remove(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                        } else {
                            interaction.member.roles.add(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                        }
            } else  if(choice == 'playstation'){
                const roleid = '875339499557752832'
                const role = await interaction.guild.roles.fetch(roleid);
                if (interaction.member.roles.cache.has(roleid)) {
                    interaction.member.roles.remove(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                } else {
                    interaction.member.roles.add(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                }
    } else  if(choice == 'xbox'){
        const roleid = '875339565525794816'
        const role = await interaction.guild.roles.fetch(roleid);
        if (interaction.member.roles.cache.has(roleid)) {
            interaction.member.roles.remove(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
        }
}     else  if(choice == 'switch'){
    const roleid = '875339589726928896'
    const role = await interaction.guild.roles.fetch(roleid);
    if (interaction.member.roles.cache.has(roleid)) {
        interaction.member.roles.remove(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
    } else {
        interaction.member.roles.add(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
    }
}
        }}
    })


  client.on("interactionCreate", async interaction=>{
        if(interaction.isSelectMenu()){
          if(interaction.customId == "rolemenu5") {
          if(interaction.message.partial) await interaction.message.fetch();
            if(interaction.partial) await interaction.fetch();
            if(!interaction.message.guild) return;
            let choice = interaction.values[0] 
            const member = interaction.member
            const ticket = interaction.message.guild.channels 
            if(choice == 'fn'){
                        const roleid = '875339773630365747'
                        const role = await interaction.guild.roles.fetch(roleid);
                        if (interaction.member.roles.cache.has(roleid)) {
                            interaction.member.roles.remove(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                        } else {
                            interaction.member.roles.add(roleid)
                            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                        }
            } else   if(choice == 'valo'){
                const roleid = '875339845705281596'
                const role = await interaction.guild.roles.fetch(roleid);
                if (interaction.member.roles.cache.has(roleid)) {
                    interaction.member.roles.remove(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
                } else {
                    interaction.member.roles.add(roleid)
                    interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
                }
    }  else   if(choice == 'mc'){
        const roleid = '875339826981908530'
        const role = await interaction.guild.roles.fetch(roleid);
        if (interaction.member.roles.cache.has(roleid)) {
            interaction.member.roles.remove(roleid)
            inter/home/Sharky/Public-Botaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
        } else {
            interaction.member.roles.add(roleid)
            interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
        }
} else   if(choice == 'rl'){
    const roleid = '957582000640913428'
    const role = await interaction.guild.roles.fetch(roleid);
    if (interaction.member.roles.cache.has(roleid)) {
        interaction.member.roles.remove(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
    } else {
        interaction.member.roles.add(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
    }
} else   if(choice == 'cod'){
    const roleid = '875339797286227971'
    const role = await interaction.guild.roles.fetch(roleid);
    if (interaction.member.roles.cache.has(roleid)) {
        interaction.member.roles.remove(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Entfernt*`, ephemeral: true });
    } else {
        interaction.member.roles.add(roleid)
        interaction.reply({ content: `✅ **|** *Die Role: ${role} Wurde dir Erfolgreich Hinzugefügt*`, ephemeral: true });
    }
}
        }}
    })


}