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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_08_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTN0VTK1RlYVozSlhVSGJjZDdyK2dSUFR2WFRuOFZzeDBDVWUvQjgrVzFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVVHRsaGQ2a1J3eXk1NEpscDFibF9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhNTgyMjhiLWEzMDctNDg3OC05NDAyLWIwZjdmZjJjYTNmNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAzMSxcbiAgICAgIDE5MyxcbiAgICAgIDEzNixcbiAgICAgIDI0NSxcbiAgICAgIDI4LFxuICAgICAgODMsXG4gICAgICAzMSxcbiAgICAgIDE0NSxcbiAgICAgIDI1LFxuICAgICAgMTc3LFxuICAgICAgODgsXG4gICAgICA0MyxcbiAgICAgIDIxMyxcbiAgICAgIDE4MixcbiAgICAgIDIzNCxcbiAgICAgIDE3MixcbiAgICAgIDU0LFxuICAgICAgMjQ5LFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgOTEsXG4gICAgICAyMTIsXG4gICAgICA2LFxuICAgICAgMTcxLFxuICAgICAgMTA0LFxuICAgICAgMCxcbiAgICAgIDIsXG4gICAgICAyNSxcbiAgICAgIDIyMixcbiAgICAgIDEwMyxcbiAgICAgIDcyLFxuICAgICAgNzIsXG4gICAgICAzMSxcbiAgICAgIDI1LFxuICAgICAgOTYsXG4gICAgICAxMTQsXG4gICAgICAyNTUsXG4gICAgICAxNjgsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkM1NFhTUkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjE1MjQxNDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxODgxNzM1NjA2MzE1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2U0LzdJREVLaWNpYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRZFRBd2x4ZVJ5dlhHek9lMFdINlE0Rm1NQlZrUDhFLzJCR0ZIcER5UlE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9qa2JZN09GZzhPVlJDYUx0NHZUQUVoRTFONThPRk1PQ0FjVG9hdVdPUUh3N1pJQ3VZSUJwd0dmM1VpZFZiTnIzdlJPQ0V5RE94WGJkKzFNNzlIM0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdFUGkvSW5LU2NUc1VLR1h3SUZzNWdRa2oxNC9NNmtURE9YaTZieWdyTXBuL2lxOXRZSk96TTI1bjFIcFBkbEF6ZlBtc21jaHhJa1ZWMytQMktkYkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjE1MjQxNDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MTI4NzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
