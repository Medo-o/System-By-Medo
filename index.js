const express = require('express');
const app = express();
const chalk = require("chalk");
let config = require('./config.json')
let prefix = config.prefix

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})

app.listen(3000, () => {
  console.log(chalk.red.bold('Virbon Up'))
});
//packaging

const { Client, Collection , MessageActionRow , MessageButton , MessageSelectMenu , Modal , TextInputComponent , MessageEmbed } = require("discord.js");
let db = require('pro.db')

//

 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 

//VARS

const applycategory= "";
const line = ""
const offersroom = ""
const logroom = ""
const feedbackroom = ""
const teamrole = ""
let sugchannel = ""
let fedchannel = ""
let ordercategory = ""
var netflixrole = "<@&>"
var instarole = "<@&>"
var nitrorole = "<@&>" 
var visarole = "<@&>"
var botrole = "<@&>"
var valorant = "<@&>"
var steam = "<@&>"
var crunchyroll = "<@&>"
var boostrole = "<@&>"
var spotifyrole = "<@&>"
var creditrole = "<@&>"
var tiktokrole = "<@&>"
var taxchannel = ""
var welcome = ""
const invites = ""
const transferchannel = ""
const tagchanneljoin = ""
let order = ""
let applyteam = ""
let yes = "✅"
let no = "❌"
let tag = ""
let link = ""

//

const client = new Client({
  intents: 32767
}).setMaxListeners(0);
//


const { joinVoiceChannel } = require('@discordjs/voice');

client.on('ready', () => {
  const channel = client.channels.cache.get('');
  if (!channel) return console.error('The channel does not exist!');
  joinVoiceChannel({
    channelId: '',
    guildId: '',
    adapterCreator: channel.guild.voiceAdapterCreator,
  });
});




//
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
//
//welcome
client.on('guildMemberAdd' , async(member) => {
  let welcomefukenembed = new MessageEmbed()
  .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
  .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
  .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  .setDescription(`**
> Hey ${member.user.username} 

> Welcome To  Studio

> Member Id  \`${member.id}\` 

> For Orders <#${order}> 

> Enjoy <3 

> You Are Member Number \`${member.guild.memberCount}\`
**`) 
  .setImage(line)
  .setColor("BLUE")
  member.guild.channels.cache.get(welcome).send({ content: `<@!${member.user.id}>` , embeds: [welcomefukenembed]})
  member.send(`**
> Welcome To ${member.guild.name}

> \`#\` مرحبا بك ، نورت اكبر و اضمن شوب فالشرق العربي   Virbon Studio



> \`#\`تعريف بسيط : مرفل شوبينق سيرفر  تونسي يوفر جميع الخدمات ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، . ويوفر جميع المبيعات - التصاميم - الحسابات - والمزيد في مكان واحد 



> \`#\` لطلب اوردر بما تحتاجه من مبيعات أو تصاميم : <#${order}>
> \`#\` للتقديم علي فريق العمل  : <#${applyteam}>

 

# نتمي لك السعاده معنا
**`)
})
//

client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "LINK") {
    message.channel.send(`**> Server Invite Link 
{ ${link} }
> Enjoy  
**`)
  }
    if(message.content === "Link") {
    message.channel.send(`**> Server Invite Link 
{ ${link} }
> Enjoy  
**`)
  }
    if(message.content === "link") {
    message.channel.send(`**> Server Invite Link 
{ ${link} }
> Enjoy  
**`)
  }
    if(message.content === "لينك") {
    message.channel.send(`**> Server Invite Link 
{ ${link} }
> Enjoy  
**`)
  }
  if(message.content === "لاين") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor("BLACK").setImage(line)]})
  }
    if(message.content === "line") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor("BLACK").setImage(line)]})
  }
    if(message.content === "خط") {
    message.delete();
    message.channel.send({embeds: [new MessageEmbed().setColor("BLACK").setImage(line)]})
  }
})
client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();
  if(command === "tag") {
   if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    let args = message.content.split(" ");
    let user = message.mentions.members.first() || client.users.cache.get(args[1]);
    user.setNickname(`${tag}${user.user.username}`)
    message.reply("> Done")
  }
  if(command === "come") {
    let args = message.content.split(" ");
    let user = message.mentions.users.first() || client.users.cache.get(args[1]);
    if(!user) return message.reply("⚠ Mention ⚠")
    message.reply(`
> **Done Send Private to ${user}** 

> **Please Wait Come Seller ** 
`)
    user.send(`⚠️ ${user} { <#${message.channel.id}> } تم طلبك هنا من فضلك come to Ticket ⚠️`)
  }
    if(command === "fb") {
    message.reply(`
**
  شكرا لاختيارك ${message.guild.name} 

  Thanks For Choosing ${message.guild.name} 


رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن ${message.author}

Your opinion matters , Please give feedback and mention the name of the person ${message.author}

----------------------------------------------


Here :
 <#${fedchannel}>
 **
 `)
  }
  //ban
  if (command === "ban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if (!user) return message.reply(`** 😕 Please mention or id **`);
    if (user.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

    if (!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => { console.log(err) });
    await message.reply(`✅ **${user.user.tag} banned from the server!**✈️`);
  }//unban
  if (command === "unban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`** 😕 You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let args = message.content.split(' ')
    let id = args[1];
    if (!id) return message.reply(`** 😕 Please mention or id **`);
    if (isNaN(id)) {
      return message.reply(`** 😕 Please mention or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(`✅ ** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
  if (command === "unbanall") {

    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 You don't have permission **`);

    const serverban = client.guilds.cache.get(message.guild.id)
    message.guild.bans.fetch().then(bans => {
      bans.forEach(ban => {
        serverban.members.unban(ban.user.id)
      })
    }).then(() => {
      message.reply({ content: `> ** Done __Unbanned__ All Banlist **` })
    })

  }//kick
  if (command === "kick") {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let id = message.content.split(' ').slice(1).join(' ')
    let user = message.mentions.members.first() || message.guild.members.cache.get(id)
    if (!user) return message.reply(`** 😕 Please mention or id **`)
    if (user.roles.highest.position > message.guild.members.resolve(message.author).roles.highest.position) return
    message.reply(`** ❌ You can't ban this user **`)
    if (user.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ You can't ban this user **`)
    user.kick().then(() => message.reply(`**✅ @${user.user.username} kicked from the server!**`)).catch(err => message.reply(err))
  }
  if (command === "lock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: false
    }).then(() => {
      message.reply(`**🔒 ${message.channel} has been looked.** `)
    })
  }
  if (command === "unlock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      message.reply(`**🔓 ${message.channel} has been unlooked.** `)
    })
  }
  if (command === "lockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: false
      });
    });
    message.reply("> ** Done __locked__ All Server Channels**")
  }
  if (command === "unlockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: true
      });
    });
    message.reply("> ** Done __Unlocked__ All Server Channels**")
  }
  if (command === "show") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      message.reply(`**✅ ${message.channel} Done show this room.**`)
    })
  }
  if (command === "hide") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      message.reply(`**✅ ${message.channel} Done hide this room.**`)
    })
  }
  if (command === "showall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: true
      });
    });
    message.reply("> ** Done __Showed__ All Server Channels**")
  }
  if (command === "hideall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: false
      });
    });
    message.reply("> ** Done __Hidedd__ All Server Channels**")
  }
  if (command === "say") {
    let say = message.content.split(" ").slice(1).join(" ");
    if (!say) message.reply("Please Put Text")
    let embed = new MessageEmbed()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
      .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setImage(line)
      .setDescription(`**${say}**`)
    message.delete();
    message.channel.send({ embeds: [embed] })
  }
  if (command === "line") {
    message.delete()
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor("BLACK")
          .setImage(line)

      ]
    })
  }
})
//
client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();

  if (command === "avatar-server") {
    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`Download Server Avatar`)
          .setURL((`${message.guild.iconURL({ dynamic: true, size: 4096 })}`))
      );
    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Server Avatar link](${message.guild.iconURL({ dynamic: true, size: 4096 })})`)
          .setImage(`${message.guild.iconURL({ dynamic: true, size: 4096 })}`)
      ], components: [button]
    })
  }
  if (command === "avatar") {
    let ff = message.mentions.users.first() || message.author;
    let userr = message.member.guild.members.cache.get(ff.id)

    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`DOWNLOAD AVATAR`)
          .setURL(userr.displayAvatarURL({ dynamic: true })));


    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Avatar link](${userr.user.displayAvatarURL({ dynamic: true, size: 4096 })})`)
          .setImage(userr.displayAvatarURL({ dynamic: true, size: 4096 }))
      ], components: [button]
    })

  }
  if (command === "inrole") {
    let role = message.mentions.roles.first()
    if (!role) return message.reply("pls mention role")
    let map = message.guild.roles.cache.get(role.id).members.map(rr => `> **<@${rr.id}> ( ${rr.id} )**`).join("\n")

    message.reply({
      embeds: [
        new MessageEmbed()
          .setTitle(` **Info About \`${role.name}\`**  `)
          .setColor('#7800FF')
          .setDescription(`> **Role Name : **\`${role.name}\`

> **Members Count Have This Role :** \`${message.guild.roles.cache.get(role.id).members.size}\`


✨ **Members :**
${map}


> **Role Is Created At : **\`${moment(role.createdAt).format('DD/MM/YYYY h:mm')} \`

`)
          .setTimestamp()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      ], split: true
    })


  }
  if (command === "invites") {
    var invite = await inviteTracker.getMemberInvites(message.member);
    message.reply(`✨ ${message.author.username} Has Got ${invite.count} Invite(s) 
`);
  }
  if (command === "ping") {
    message.reply({
      embeds: [
        new MessageEmbed()
          .setDescription(`**
    🏓 Pong 🏓 
    
   Latency is ${message.createdTimestamp - message.createdTimestamp}ms. 
   API Latency is ${Math.round(client.ws.ping)}ms
   Ws Ping Is ${client.ws.ping} **`)
          .setColor('#7800FF')
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      ]
    })
  }
  if (command === "server") {
    await message.guild.members.fetch();
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache.size;
    const firstFiveEmojis = message.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
    const boostCount = message.guild.premiumSubscriptionCount;
    const verificationLevel = message.guild.verificationLevel;
    const rolesCount = message.guild.roles.cache.size;

    await message.reply({
      embeds: [
        new MessageEmbed()
          .setColor("#7800FF")
          .setAuthor({ name: `${message.guild.name} Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
          .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
          .addFields(
            { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
            { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
            { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
            { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
            { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
            { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}** 🚀 \nRoles: **${rolesCount}**`, inline: true },
            { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
          )
      ], ephemeral: true
    })
  }
  if (command === "user") {

    const withoutuserembed = new MessageEmbed()
      .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      .setDescription(`**Joined Discord :**\n**<t:${parseInt(message.member.user.createdAt / 1000)}:R>**\n\n**Joined Server :**\n**<t:${parseInt(message.member.joinedAt / 1000)}:R>**`)
      .setThumbnail(message.author.avatarURL())
      .setColor("#7800FF")

    const xrow = new MessageActionRow()
      .addComponents(new MessageButton()
        .setStyle("LINK")
        .setLabel(`${message.author.username} Profile`)
        .setEmoji('📷')
        .setURL(`https://discord.com/users/${message.author.id}`)
      )

    message.reply({ embeds: [withoutuserembed], components: [xrow] })
  }
})
client.on('channelCreate' , async(message) => {
  if(message.parentId != applycategory) return;
  setTimeout(() => {    
  message.send({ content: `> ** Click On The Button To Start Team Apply Submition **
> **برجاء الضغط علي البتن لبدئ التقديم الي طاقم العمل** 

  ملحوظه : لو مضغطتش علي البتن و كملت مع البوت محدش هيرد عليك
` , components: [
    new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setLabel("Click Here")
      .setStyle("PRIMARY")
      .setCustomId("hh")
    )
  ]})
     }, 2000);  
  client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "hh") {
      		const modal = new Modal()
			.setCustomId('myModal')
			.setTitle('Apply Team Submit');
		const rname = new TextInputComponent()
			.setCustomId('rname')
			.setLabel("ما هو اسمك الحقيقي")
			.setStyle('SHORT');

      		const age = new TextInputComponent()
			.setCustomId('age')
			.setLabel("ما هو عمرك")
			.setStyle('SHORT');

      		const svcount = new TextInputComponent()
			.setCustomId('svcount')
			.setLabel("ما عدد السيرفرات الي انتا شغال فيها")
			.setStyle('SHORT');

      		const fbcount = new TextInputComponent()
			.setCustomId('fb')
			.setLabel("معاك 15 فيدباك نعم او لا")
			.setStyle('SHORT');

      		const roles = new TextInputComponent()
			.setCustomId('roles')
			.setLabel("80k ضمان ")
			.setStyle('SHORT');
      
		const name = new MessageActionRow().addComponents(rname);
		const agge = new MessageActionRow().addComponents(age);
      const svvcount = new MessageActionRow().addComponents(svcount);
      const fbvcount = new MessageActionRow().addComponents(fbcount);
      const rovles = new MessageActionRow().addComponents(roles);
		// Add inputs to the modal
		modal.addComponents(name , agge,svvcount,fbvcount,rovles);
		// Show the modal to the user
		await interaction.showModal(modal);

        client.on('interactionCreate', async(interaction) => {
	if (!interaction.isModalSubmit()) return;

	if (interaction.customId === 'myModal') {
    
    const name = interaction.fields.getTextInputValue('rname');
    const rname = interaction.fields.getTextInputValue('age');
    const rrname = interaction.fields.getTextInputValue('svcount');
    const rrrname = interaction.fields.getTextInputValue('fb');
    const rrrrname = interaction.fields.getTextInputValue('roles');
await interaction.reply({ content: `
> The Apply Team Has Been Submited , Please Put Here The Feedbacks If You Dont Have You Will Pay 80k
تم عمل التقديم , برجاء وضع الفيدباكات هنا الف 80 الف ضمان

لو مش هتعمل حاجه من الاتنين ف محدش هيرد عليك`,embeds: [
      new MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setAuthor({ name: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setFooter({ text: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setTimestamp()
      .setDescription(`
\`\`\` New Apply Team Submition \`\`\`

> Seller Name : ${name} 

> Seller Age: ${rname} 

> Seller Servers Count He Work In : ${rrname} 

> Does He Have Feedback : ${rrrname} 

> Sell Roles : ${rrrrname} 
`)
  .setImage(line)
    ] });
    interaction.channel.send("> || <@&1081272011235528744> ||")
    
	}
});
    }
  })
})
//
//feedback

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedbackroom) return;
  let user = message.mentions.members.first();
  if(!user.roles.cache.has(teamrole)) return;
  if(message.author.id == user.id) return;
  let pointSs = db.get(`points_${user.id}`)
  if( pointSs == null) {
      await db.set(`points_${user.id}` , {
    userId : user.id,
    count : 0
  })
  }
  let points = db.get(`points_${user.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (3 * 1))
  await db.set(`points_${user.id}` , {
    userId : user.id,
    count : po
  })
  db.add(`feedback_${user.id}` , 1)
    message.guild.channels.cache.get(logroom).send({embeds: [
    new MessageEmbed()
    .setColor("BLUE")
    .setTitle("New Notification")
    .setDescription(`
> New Offers Feedback Gived To : ${user}

> By Client : ${message.author}`)
  ]})
})
//

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels = db.get(`Auto_Line_${message.guild.id}`)
  if(!channels.includes(message.channel.id)) return;
  message.reply({embeds: [
    new MessageEmbed()
    .setColor("BLUE")
    .setImage(line)
  ]})
})

//feedbck
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != fedchannel) return;
  message.reply({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
> Thanks For Giving Us Feedback

> We Hope You Visit Us Again
**
`)
    .setImage(line)
    .setColor("BLUE")
  ]})
}) 
//sug
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != sugchannel) return;
  message.channel.send({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
${message.content}
**
`)
    .setImage(line)
    .setColor("BLUE")
  ]}).then(async(m) => {
    m.react(`<a:ddj:1145897346840920095>`)
    m.react(`<a:hh:1145896805679255582>`)
  })
  message.delete()
})

//
client.on('channelCreate', message => {

  if (message.parentId !== ordercategory) return;
  const pricelistembed = new MessageEmbed()
    .setImage(line)
    .setColor("BLACK")
    .setTimestamp()
    .setDescription(`\`#\`  Hello User Pls Select Your Order

\`#\`   مرحبا.. رجاء اختيار الطلب الخاص بك

==================

>  \`-\` <:NetflixLogo2006:1087730672510193734> **netflix**



>  \`-\` <:emoji_1:1066800223600525362> **insta**



>  \`-\` <a:NitroG:1081339582265708696> **nitro**



>  \`-\` <:visalogo800x450:1087730516976996413> **visa**



>  \`-\` <:dev:1081303461020303520> **bot**



>  \`-\` <:Crunchyroll:1081303451826397276> **crunchyroll**



>  \`-\` <:Valorant:1081339671705038859> **valorant**



>  \`-\` <:Booster:1081303420922777620> **boost**



>  \`-\` <:Spotify:1081339618621927514>**spotify**



>  \`-\` <:Steam:1081339633515888830> **steam**



>  \`-\` <:Probot:1081339603069456486> **credit**



>  \`-\` <:emoji_3:1067859680073883738> **tiktok**
`)
  const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Select prices here')
        .addOptions([
          {
            label: 'netflix',
            description: 'netflix prices',

            emoji: '<:NetflixLogo2006:1087730672510193734>',

            value: 'netflix',
          },
          {
            label: 'insta',

            description: 'insta prices',
            emoji: '<:emoji_1:1066800223600525362>',
            value: 'insta',
          }, {
            label: 'nitro',
            description: 'nitro prices',
            emoji: '<a:NitroG:1081339582265708696>',
            value: 'nitro',
          }, {
            label: 'visa',
            emoji: "<:visalogo800x450:1087730516976996413>",
            description: 'visa prices',

            value: 'visa',
          }, {
            label: 'bot',

            emoji: "<:dev:1081303461020303520>",
            description: 'bot prices',
            value: 'bot',
          }, {
            label: 'crunchyroll',
            description: 'crunchyroll prices',
            emoji: "<:Crunchyroll:1081303451826397276>",
            value: 'crunchyroll',
          }, {
            label: 'valorant',
            description: 'valorant prices',
            emoji: "<:Valorant:1081339671705038859>",
            value: 'valorant',
          }, {
            label: 'boost',
            description: 'boost prices',
            emoji: "<:Booster:1081303420922777620>",
            value: 'boost',
          }, {
            label: 'spotify',
            description: 'spotify prices',
            emoji: "<:Spotify:1081339618621927514>",
            value: 'spotify',
          }, {
            label: 'steam',
            description: 'steam prices',
            emoji: "<:Steam:1081339633515888830>",
            value: 'steam',
          }, {
            label: 'credit',
            description: 'credit prices',
            emoji: "<:Probot:1081339603069456486>",
            value: 'credit',
          }, {
            label: 'tiktok',
            description: 'tiktok prices',
            emoji: "<:emoji_3:1067859680073883738>",
            value: 'tiktok',
          }

        ]),
    );
  setTimeout(() => {
    message.send({ embeds: [pricelistembed], components: [row] }).then(message => {
      message.channel.send(`
> **Welcome in __${message.guild.name}__** 

> **اهلا بك في __${message.guild.name}__** 

**اتفضل حدد طلبك حتى تتواصل معك الجهة المختصه.** `)
    })
  }, 2000);
})
//
client.on("interactionCreate", (interaction) => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.values == "netflix") {
    const netflixembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setTitle(`\`\#\`\ Netflix Prices In ${interaction.guild.name}`)
      .setDescription(` Here Is All Netflix Prices <:NetflixLogo2006:1087730672510193734>


 - <:NetflixLogo2006:1087730672510193734> Netflix User 1 month : 80K

 - <:NetflixLogo2006:1087730672510193734> Netflix Acc 1 week : 40K

 - <:NetflixLogo2006:1087730672510193734> Netflix Acc 1 month : 150K

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)
      .setColor("BLACK")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`netbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [netflixembed], components: [row] })
  }
  if (interaction.values == "insta") {
    const instaembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ InstaGram Prices In ${interaction.guild.id}`)
      .setDescription(` Here Is All Instagram Prices <:emoji_1:1066800223600525362>

Followers

 - <:emoji_1:1066800223600525362> 100 Follower : 25k 

 - <:emoji_1:1066800223600525362> 500 Follower : 100k 

 - <:emoji_1:1066800223600525362> 1k Follower : 200k 


Likes


 - <:emoji_1:1066800223600525362> 100 Like : 15K 

 - <:emoji_1:1066800223600525362> 500 Like : 75K 
 
 - <:emoji_1:1066800223600525362> 1k Like : 150K

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`insbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [instaembedembed], components: [row] })
  }
  if (interaction.values == "visa") {
    const visaembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Visa Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Visa Prices<:visalogo800x450:1087730516976996413>
      
 <:visalogo800x450:1087730516976996413>  - Visa (Only Nitro Activation) : 40k

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`visbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [visaembedembed], components: [row] })
  }
  if (interaction.values == "nitro") {
    const nitroembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Nitro Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Nitro Prices



- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`nitbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [nitroembedembed], components: [row] })
  }
  if (interaction.values == "bot") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Bot Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Bot Prices <:dev:1081303461020303520>

   - Full System Vip Shop Bot : 850k

  - Full System Bot : 500K 


  - Bot Broadcast : 150k 


  - Bot Giveaway : 150K 


- Line & React : 80K 


- Auto Line With Embed Bot : 65k ** 


 - Auto React Bot : 40K 

  - Azkar Bot : 100k 

 - Music Bot : 150k

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`botbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
  }
  if (interaction.values == "crunchyroll") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Crunchyroll Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Crunchyroll Prices <:Crunchyroll:1081303451826397276>


- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`crunchyroll`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
  }
  if (interaction.values == "valorant") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Valorant Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Valorant Prices <:Valorant:1081339671705038859>

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`valorant`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
  }
  if (interaction.values == "boost") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Boost Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Boost Prices <:Booster:1081303420922777620>

  - <:Booster:1081303420922777620> 1 Boost 3 Month : 150k


  - <:Booster:1081303420922777620> 2 Boost 3 Month : 300k

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`bosbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "spotify") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Spotify Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Spotify Prices <:Spotify:1081339618621927514>

  - <:Spotify:1081339618621927514> 1 Month : 60k

  - <:Spotify:1081339618621927514> 3 Month : 180k

  - <:Spotify:1081339618621927514> 1 Year : 720k

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`spotbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "steam") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Steam Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Steam Prices


- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`shabutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "credit") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Credit Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Credit Prices <:Probot:1081339603069456486>
      
  - <:Probot:1081339603069456486> 150kK : 5d

  - <:Probot:1081339603069456486> 500K : 20d

  - <:Probot:1081339603069456486> 1M : 30d

- **__You Can Mention The Seller Click The Button__**
`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`crebutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "tiktok") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor("BLACK")
      .setTitle(`\`\#\`\ Tiktok Prices In ${interaction.guild.name}`)
      .setDescription(`Here Is All Tiktok Prices <:emoji_3:1067859680073883738>

Likes

 - <:emoji_3:1067859680073883738> 1k = 300k 



Views

 
 - <:emoji_3:1067859680073883738> 1k = 5k

- **__You Can Mention The Seller Click The Button__**`)
      .setImage(line)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`tikbutton`)
          .setLabel("Mention Seller")
          .setEmoji("👮")
          .setStyle('SUCCESS')
      );
     interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
})

client.on("interactionCreate", interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId == "netbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${netflixrole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-netflix`)
  }
  if (interaction.customId == "insbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${instarole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-insta`)
  }
  if (interaction.customId == "visbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${visarole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-visa`)
  }
  if (interaction.customId == "nitbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${nitrorole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-nitro`)
  }
  if (interaction.customId == "botbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${botrole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-bots`)
  }
  if (interaction.customId == "votbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${crunchyroll} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-crunchyroll`)
  }
  if (interaction.customId == "valorant") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${valorant} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-valorant`)
  }
  if (interaction.customId == "bosbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${boostrole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-boosts`)
  }
  if (interaction.customId == "spotbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${spotifyrole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-spotify`)
  }
  if (interaction.customId == "shabutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${steam} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-steam`)
  }
  if (interaction.customId == "crebutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${creditrole} ||`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-credit`)
  }
  if (interaction.customId == "tikbutton") {
    interaction.channel.send({
      content: `
✨ Sorry! Wait Untill The Seller Come
👀 Mention : || ${tiktokrole} ||`
    })
    interaction.channel.setName(`need-tiktok`)
    interaction.deferUpdate()
  }
})

client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("<a:credit:1144615277481447476>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
);
        let m = await message.reply({ content: `
> ** Your Tax Is : __${tax}__**` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
> **  Your Tax Is : __${tax4}__**`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
> **  Your Tax Is : __${tax}__**`, components: [row] })
            
                  i.deferUpdate()
          } else {
            return;
          }
       });
})
/////////////////////////////////
client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();

  if(command === "tax") {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("<a:credit:1144615277481447476>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
);
        let m = await message.reply({ content: `
> **  Your Tax Is : __${tax}__**` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
> **  Your Tax Is : __${tax4}__**`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
> **  Your Tax Is : __${tax}__**`, components: [row] })
            
                  i.deferUpdate()
          } else {
            return;
          }
       });
  }
})
let channelid = (transferchannel)
client.on('message', message => {
  if (message.content.includes('has transferred')) {
    if (message.channel.id !== channelid) return;
    message.channel.send(line)

  }
})
///// welcome message
client.on('guildMemberAdd', async (member) => {
  const log = client.channels.cache.get(tagchanneljoin)
  log.send(`**هلا مرحبا بيك في شوب <@${member.id}>**`).then((dark) => {
    dark.delete({ timeout: 9900 });
  })
});
client.login("MTI4MDk5NzE3MzI2OTYyNjk2MQ.GowwLe.mKnXS5hBtfjyNDaLKP3gbRKpBVz2nPIph-mnvc");