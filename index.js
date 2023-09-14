const ytdl = require("ytdl-core");

const { Discord, Constants } = require("discord.js");
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;

process.setMaxListeners(0);



// bot 1
const ziclient = new Discord.Client();
const { STATUS, TIPE, CENEL, SERPER, LINKYUTUP } = require("./config.json");

ziclient.on("ready", async () => {
  console.log(`${ziclient.user.tag} | RADIO ON`);

  // status
  setInterval(() => {
    const status = STATUS;
    ziclient.user.setActivity(
      status[Math.floor(Math.random() * status.length)],
      { type: TIPE }
    );
  }, 5000);

  // stay vc
  let channel =
    ziclient.channels.cache.get(CENEL) ||
    (await ziclient.channels.fetch(CENEL));
  if (!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LINKYUTUP));
});

// looping
setInterval(async function () {
  if (!ziclient.voice.connections.get(SERPER)) {
    let channel =
      ziclient.channels.cache.get(CENEL) ||
      (await ziclient.channels.fetch(CENEL));
    if (!channel) return;
    const connection = await channel.join();
    connection.play(ytdl(LINKYUTUP));
  }
}, 20000);

ziclient.login(process.env.TOKEN);



// bot 2
const ziclient2 = new Discord.Client();
const { STATUS2, TIPE2, CENEL2, SERPER2, LINKYUTUP2 } = require("./config.json");

ziclient2.on("ready", async () => {
  console.log(`${ziclient2.user.tag} | RADIO ON`);

  // status
  setInterval(() => {
    const status2 = STATUS2;
    ziclient2.user.setActivity(
      status2[Math.floor(Math.random() * status2.length)],
      { type: TIPE2 }
    );
  }, 5000);

  // stay vc
  let channel2 =
    ziclient2.channels.cache.get(CENEL2) ||
    (await ziclient2.channels.fetch(CENEL2));
  if (!channel2) return;
  const connection2 = await channel2.join();
  connection2.play(ytdl(LINKYUTUP2));
});

setInterval(async function () {
  if (!ziclient2.voice.connections.get(SERPER2)) {
    let channel2 =
      ziclient2.channels.cache.get(CENEL2) ||
      (await ziclient2.channels.fetch(CENEL2));
    if (!channel2) return;
    const connection2 = await channel2.join();
    connection2.play(ytdl(LINKYUTUP2));
  }
}, 20000);

ziclient2.login(process.env.TOKEN2);



// bot 3
const ziclient3 = new Discord.Client();
const { STATUS3, TIPE3, CENEL3, SERPER3, LINKYUTUP3 } = require("./config.json");

ziclient3.on("ready", async () => {
  console.log(`${ziclient3.user.tag} | RADIO ON`);

  // status
  setInterval(() => {
    const status3 = STATUS3;
    ziclient3.user.setActivity(
      status3[Math.floor(Math.random() * status3.length)],
      { type: TIPE3 }
    );
  }, 5000);

  // stay vc
  let channel3 =
    ziclient3.channels.cache.get(CENEL3) ||
    (await ziclient3.channels.fetch(CENEL3));
  if (!channel3) return;
  const connection3 = await channel3.join();
  connection3.play(ytdl(LINKYUTUP3));
});

// looping
setInterval(async function () {
  if (!ziclient3.voice.connections.get(SERPER3)) {
    let channel3 =
      ziclient3.channels.cache.get(CENEL3) ||
      (await ziclient3.channels.fetch(CENEL3));
    if (!channel3) return;
    const connection3 = await channel3.join();
    connection3.play(ytdl(LINKYUTUP3));
  }
}, 20000);

ziclient3.login(process.env.TOKEN3);



// uptime (selfhost)

// 0
const CronJob0 = require("cron").CronJob;
var job = new CronJob0( "0 0 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 2
const CronJob2 = require("cron").CronJob;
var job = new CronJob2( "0 2 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 4
const CronJob4 = require("cron").CronJob;
var job = new CronJob4( "0 4 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 6
const CronJob6 = require("cron").CronJob;
var job = new CronJob6( "0 6 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 8
const CronJob8 = require("cron").CronJob;
var job = new CronJob8( "0 8 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 10
const CronJob10 = require("cron").CronJob;
var job = new CronJob10( "0 10 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 12
const CronJob12 = require("cron").CronJob;
var job = new CronJob12( "0 12 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 14
const CronJob14 = require("cron").CronJob;
var job = new CronJob14( "0 14 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 16
const CronJob16 = require("cron").CronJob;
var job = new CronJob16( "0 16 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 18
const CronJob18 = require("cron").CronJob;
var job = new CronJob18( "0 18 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 20
const CronJob20 = require("cron").CronJob;
var job = new CronJob20( "0 20 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();

// 22
const CronJob22 = require("cron").CronJob;
var job = new CronJob22( "0 22 * * *",
  function () {
    require("child_process").exec("refresh");
  },
  null,
  true,
  "Asia/Jakarta"
);
job.start();