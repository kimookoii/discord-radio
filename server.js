const discord = require("discord.js");

const ziclient = new discord.Client();

const ytdl = require('ytdl-core');

const { CENEL, SERPER, LINKYUTUP } = require("./ziccc.json");

const { Constants } = require('discord.js');
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;


////////////////////////////////////////////////////////////////////////////////////////////////////



ziclient.on('ready', async () => { console.log(`${ziclient.user.tag} | RADIO ON` )
 
setInterval(() => {
const status = [  `Whizkazz | #onteruss`,
                  `Whizkazz | 24/7 radio anime musik indonesia`   ]
ziclient.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING" }) }, 5000)    
                         

  
////////////////////////////////////////////////////////////////////////////////////////////////////
                                
                                
                                
  let channel = ziclient.channels.cache.get(CENEL) || await ziclient.channels.fetch(CENEL)

  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LINKYUTUP))
})



////////////////////////////////////////////////////////////////////////////////////////////////////



setInterval(async function() {
  if(!ziclient.voice.connections.get(SERPER)) {
    let channel = ziclient.channels.cache.get(CENEL) || await ziclient.channels.fetch(CENEL)
    if(!channel) return;

    const connection = await channel.join()
    connection.play(ytdl(LINKYUTUP))
  }
}, 20000)


////////////////////////////////////////////////////////////////////////////////////////////////////



ziclient.login(process.env.TOKEN)