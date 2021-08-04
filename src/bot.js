require('dotenv').config()
const { Client, Message } = require('discord.js')
const client = new Client()
client.login(process.env.DISCORD_BOT_TOKEN)
client.on('ready',()=>{
    console.log(`${client.user.username} is up running`)
})
client.on('message',(message)=>{
    console.log(`[${message.author.username}]:${message.content} [${message.createdAt}]`)
if(message.content === 'hello'){
    message.channel.send("Hello There!!!")
}
})