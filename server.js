    const discord = require("discord.js");

    const ziclient = new discord.Client();

    const ytdl = require('ytdl-core');

    const { CENEL, SERPER, LINKYUTUP, PREFIX } = require("./ziccc.json");

    const { Constants } = require('discord.js');
    Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;


////////////////////////////////////////////////////////////////////////////////////////////////////


    ziclient.on('ready', async () => { console.log(`${ziclient.user.tag} | RADIO ON` )
                                      
      setInterval(() => {
        const status = [  `Whizkazz | #onteruss`,
                          `Whizkazz | 24/7 radio anime musik indonesia`   ]
        ziclient.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING" }) }, 5000 )    

  
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
        connection.play(ytdl(LINKYUTUP)) } }, 20000)


////////////////////////////////////////////////////////////////////////////////////////////////////

// 0
    const CronJob0 = require("cron").CronJob;
    var job = new CronJob0('0 0 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 3
    const CronJob3 = require("cron").CronJob;
    var job = new CronJob3('0 3 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 6
    const CronJob6 = require("cron").CronJob;
    var job = new CronJob6('0 6 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 9
    const CronJob9 = require("cron").CronJob;
    var job = new CronJob9('0 9 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 12
    const CronJob12 = require("cron").CronJob;
    var job = new CronJob12('0 12 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 15
    const CronJob15 = require("cron").CronJob;
    var job = new CronJob15('0 15 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 18
    const CronJob18 = require("cron").CronJob;
    var job = new CronJob18('0 18 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 21
    const CronJob21 = require("cron").CronJob;
    var job = new CronJob21('0 21 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();

// 24
    const CronJob24 = require("cron").CronJob;
    var job = new CronJob24('0 24 * * * *', function() {
    require('child_process').exec("refresh") 
    }, null, true, 'Asia/Jakarta');
    job.start();


////////////////////////////////////////////////////////////////////////////////////////////////////


ziclient.login(process.env.TOKEN)
