const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_28_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MCxcbiAgICAgICAgNixcbiAgICAgICAgNDEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm81TmV6a3JRRSsvcmM4Ym5FVVdaUXVQMEFncUl3bHVjU1BrcWlZK1dxU1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyMDUwNzUwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUYyREU4RDgwQjAzM0YzQkNCRTMzRDQ1NjJBMTUzMkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTM5MzMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBzS1hucWh6UnAyTlhON3NZR0FZMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWU5YmU1NDAtZTc4Zi00ZTllLWIwYjktNTA4ZGNjZDhmMWExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI4LFxuICAgICAgMTEsXG4gICAgICA5MixcbiAgICAgIDI3LFxuICAgICAgMTA3LFxuICAgICAgMTUxLFxuICAgICAgMyxcbiAgICAgIDI0MCxcbiAgICAgIDkyLFxuICAgICAgMTg5LFxuICAgICAgMjYsXG4gICAgICAxNDYsXG4gICAgICAxOCxcbiAgICAgIDk1LFxuICAgICAgNzUsXG4gICAgICA2NyxcbiAgICAgIDY3LFxuICAgICAgMTgyLFxuICAgICAgNixcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDIxOCxcbiAgICAgIDE0MSxcbiAgICAgIDEwNixcbiAgICAgIDIxNSxcbiAgICAgIDcxLFxuICAgICAgMjM5LFxuICAgICAgMTkzLFxuICAgICAgMTA4LFxuICAgICAgMjAsXG4gICAgICAxOCxcbiAgICAgIDE1OCxcbiAgICAgIDU2LFxuICAgICAgMTQ0LFxuICAgICAgNDUsXG4gICAgICA2MCxcbiAgICAgIDEzNyxcbiAgICAgIDQ2LFxuICAgICAgNjYsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjNWTk5IRVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjA1MDc1MDk6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNdXJpdGFsYSBBaG1lZCBBbGFvXCIsXG4gICAgXCJsaWRcIjogXCIxNTE0MzIyNDIxODAxOTY6OTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHFXb3NVQkVQcnFpclVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzdDF2S0tiTTlxdDhjVTdISVZKT1JaOGtGRG9YQWxWcGV1UDVWbzFsdXdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlkb0RORlRKekIvVUtPSUdmeFd2TjRPWmlzckY4c2JhaWxtNWFSUnVoU0dja0V5Z3h5bHJnK0NYY1RLODJUQWhqMXRFcWlHYmo4NkJiNUxJc2oxckN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9aTU5YQ3RJaXlCVnZlMjk3Wkpkek5wRmlYZ09EZTExSUFvckt4U3JVVlZYYVdWTjl4UXF3ZkxWSnJxRkdaZzVTTERYY1poSWp4LzkyRFdhRDVoakN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjA1MDc1MDk6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkzOTMyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ5WFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDlYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSEJUNlRES1N0TmdYSVhtVjRoWnNaSVRORW55dWhPTGtXbTVUUndqaDB0dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTM2OTg4NzMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
