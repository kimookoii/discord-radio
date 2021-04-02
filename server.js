const discord = require("discord.js");

const client = new discord.Client();

const ytdl = require('ytdl-core');

const { CENEL, SERPER, LINKYUTUP } = require("./ziccc.json");

const { Constants } = require('discord.js');
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;


////////////////////////////////////////////////////////////////////////////////////////////////////



client.on('ready', async () => { console.log(`${client.user.tag} | [CODE ON]` )
 
setInterval(() => {
const status = [  //`Whizkazz | anime lofi hip hop radio`,
                  `Whizkazz | 24/7 chill lofi remixes of anime`   ]
client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING" }) }, 20000)    
                         

  
////////////////////////////////////////////////////////////////////////////////////////////////////
                                
                                
                                
  let channel = client.channels.cache.get(CENEL) || await client.channels.fetch(CENEL)

  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LINKYUTUP))
})



////////////////////////////////////////////////////////////////////////////////////////////////////



setInterval(async function() {
  if(!client.voice.connections.get(SERPER)) {
    let channel = client.channels.cache.get(CENEL) || await client.channels.fetch(CENEL)
    if(!channel) return;

    const connection = await channel.join()
    connection.play(ytdl(LINKYUTUP))
  }
}, 20000)


////////////////////////////////////////////////////////////////////////////////////////////////////



client.login(process.env.TOKEN)