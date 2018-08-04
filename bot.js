const Discord = require("discord.js");

const bot = new Discord.Client()

const TOKEN = "NDU3ODEzODc2NDA3NTMzNTY5.Dge1fg.bzaTFOxNwTCjzNskzldM7ELHXaw";
const PREFIX = "///"

bot.on("ready", () => {
    console.log("Bot's ready!");
    bot.user.setActivity("SFM is my fav gaming genre.");

});


    bot.on("message", function(message) {

        if (message.channel.name == "shouta-spam"  && message.content == "Hello, Shouta-Bot") {

            message.channel.send("Hi, there!");
         
        if (message.channel.name == "bot-commands" && message.content == "Hello, Shouta-Bot") {
            
            message.channel.send("Hi, There!");

         
           }
    
        }

  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();

  switch (command) {
      case "ping" :
         message.channel.send("Pong!");
         break;
      case "pingtime":
         message.channel.send("Does it look like i know?");
         break;
      case "blah":
        message.channel.send("Meh");
        break;
      case "info" :
         message.channel.send("~~I'm just a nigga with a rocket launcher~~ I'm just a bot made by Michael Miller or in short Mike for some weird purposes and recently was neglected casue coding bad xdddd also also i no make jokes and work only in one channel for some reasons so if you wanna test me out go to #bot-commands or if the server has a channel for my shit then go to #shouta-spam tbh")
         break;
      case "gay" :
        message.channel.send("No u");
        break;
        case "mike" :
          message.channel.send("He was an active and a fun user, he will always be remembered, 1 pray = 1 chance to get him back :pray:");
          break;
      case "xd" :
          message.channel.send("What an xd'able remark -Grace Merci 2K18");
          break;
      case "yeet":
          message.channel.send("That's a yeet'able move tbh");
          break;
      case "oliver":
          message.channel.send("The first time I saw my cousin naked, I looked at her little vagina and said, “Wut’s dat yu has dere?” She said it was her peepee, and I told her mine didn’t look like that. She wanted to see, so I pulled it out, then she asked if she could touch it. I said yeah, so she did. When it got hard, she started giggling and said it was cute, then gave it a kiss. I liked that so I slipped it into her mouth. We were both pretty young at the time. She was 6 I think, and I was about 38. -Oliver 2K18");
          break;
      case "marissa":
          message.channel.send("My vagina likes to leak out pickle juice when I think of your father's smegma -Marissa 2K18");
          break;
      case "grfld":
          message.channel.send("Peenis xD -Zack 2.0 2K18");
          break;
      case "wica":
          message.channel.send("tfw u watch a power metal music video about religion and all of a sudden the nuns starts to undress themselves... :GWfroggyJerry: -Extra Thicc Name 2K18");
          break;
      case "perica":
          message.channel.send("https://cdn.discordapp.com/attachments/402871667891765250/474288770037055498/8d1afae064b5d6d97845bb9dfba1af14.png just an average conversation in ck -Perica 2K18");
          break;
      case "damboozole":
          message.channel.send("I put my chocolate in the oven and it froze -Bambii Or Margaux 2K18");
          break;
      case "furryvince":
          message.channel.send("I nearly got beaned from a serv bc I posted a pic of a dead cat underwater -Vince 2K18 **Jesus will every good quote be in 2018? XD**");
          break;
      case "trubo":
          message.channel.send("some idiot idk he wanted me to say he's cool xdddd  **sorry tubo luv u xoxoxo**");
          break;          
           case "ban" :
if (!message.guild.members.get("457813876407533569").hasPermission("BAN_MEMBERS")) return message.reply("I do not have permission to ban other members.")
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have permission to ban other members.")
if (message.mentions.members.size < 1) return message.reply("You need to ping someone to ban!")
let banmember = message.mentions.members.first()
banmember.ban()
message.channel.send(`${banmember.user.tag}, ***No More Of Your Weird Work, Get Out!!***`)
       break;
       case "kick" :
       if (!message.guild.members.get("457813876407533569").hasPermission("KICK_MEMBERS")) return message.reply("I do not have permission to kick other members.")
       if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have permission to kick other members.")
       if (message.mentions.members.size < 1) return message.reply("You need to ping someone to kick!")
       let kickmember = message.mentions.members.first()
       kickmember.kick()
       message.channel.send(`${kickmember.user.tag}, ***You've Been Bad! GET OUT!!***`)
              break;
        
        case "woah":
           message.channel.send("there laddie, you can't mcree up here friend.");
           break;
        case "pic":
        message.channel.send('', {files: ["https://cdn.discordapp.com/attachments/457877400211161127/457980843458035738/29598393_205896680007211_8021260662177985561_n.jpg"]})  
        break;

        case "rolepresist":
        if (!message.guild.members.get("457813876407533569").hasPermission("MANAGE_ROLES")) return message.reply("I do not have permission to manage other user's roles.")
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have permission to use this command.")
if (message.mentions.members.size < 1) return message.reply("Proper usage: ///rolepersist <user> <role name>")
if (!args[1]) return message.reply("Proper usage: ///rolepersist <user> <role name>")
let rolename = args[1].toLowerCase()
if (!message.guild.roles.find("name", {rolename})) return message.reply("I was unable to find that role.")
let rolemember = message.mentions.members.first()
message.member.addRole(message.guild.roles.find("name", {rolename}))
break;

case "avatar":

if (command === 'avatar') {
  if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
  }

  // ...
}

case "avatar":
  if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
  }

  const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: ${user.displayAvatarURL}`;
  });

  // send the entire array of strings as a message
  // by default, discord.js will `.join()` the array with `\n`
  message.channel.send(avatarList);
break;


// ...
if (message.content === `${prefix}user-info`) {
  message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}

case "mute":

  let reason = args.slice(1).join(' ');
  let member = message.mentions.members.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  let muteRole = message.guild.roles.find('name', 'Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Target:** ${member.user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

  if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (member.roles.has(muteRole.id)) {
    member.removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    })
    .catch(e=>console.error("Cannot remove muted role: " + e));
  } else {
    member.addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    })
    .catch(e=>console.error("Cannot add muted role: " + e));
  break;

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute']
    
};


      }

        });

bot.login(TOKEN);
