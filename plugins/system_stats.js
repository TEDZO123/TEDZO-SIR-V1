	/* Copyright (C) 2021 xYAZUWA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Alora š ļø xRASHMITH
*/


const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');



if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get ('https://i.ibb.co/SBDH0QV/20220114-180954.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "ā­āāāāāāāāāāā\nā\nāš§Źį“ŹŹį“ į“ź±į“Ź\nāā­āāāāāāāāāāāāāāā®\nāšøļ¼© ļ¼”ļ¼­ A L I V E  \nšø  āā°āāāāāāāāāāāāāāāÆ\nā\nāāŗÉŖ į“į“ į“Źį“Źį“ Źį“į“\nā\nāā»į“ į“Źź±ÉŖį“É“ - į“”ÉŖį“Ź Źį“į“į“į“É“ź±\nā\nāā»į“į“į“ į“Źį“į“į“Ź - xYĢ·AĢ·ZĢ·UĢ·WĢ·AĢ·\nā\nāā»į“į“É“į“ į“į“į“į“į“É“į“ - .alora\nā\nāšį“Źį“É“į“ Źį“į“ ź°į“Ź į“ź±ÉŖÉ“É¢ į“į“šø\nā\nā°āāāāāāāāāāāāā»\n\nŁŁŁŁØŁŪŪŁā”ŁŁØŁŪŁ"})

    }
    else {
            
            var image = await axios.get ('https://i.ibb.co/SBDH0QV/20220114-180954.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright Ā© 2022 | Queen Alora*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asena.addCommand({pattern: 'version', fromMe: true, desc: Lang.BOT_V,  deleteCommand: false}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*ā Queen Alora Version š¶*\n\n` + 
                '```Installed version :```\n' +
                Lang.VERS_ION + 
                `\n\nCheck official website : https://www.alorabot.netlify.app/`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get ('https://i.ibb.co/SBDH0QV/20220114-180954.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "ā­āāāāāāāāāāā\nā\nāš§Źį“ŹŹį“ į“ź±į“Ź\nāā­āāāāāāāāāāāāāāā®\nāšøļ¼© ļ¼”ļ¼­ A L I V E  \nšø  āā°āāāāāāāāāāāāāāāÆ\nā\nāāŗÉŖ į“į“ į“Źį“Źį“ Źį“į“\nā\nāā»į“ į“Źź±ÉŖį“É“ - į“”ÉŖį“Ź Źį“į“į“į“É“ź±\nā\nāā»į“į“į“ į“Źį“į“į“Ź - xYĢ·AĢ·ZĢ·UĢ·WĢ·AĢ·\nā\nāā»į“į“É“į“ į“į“į“į“į“É“į“ - .alora\nā\nāšį“Źį“É“į“ Źį“į“ ź°į“Ź į“ź±ÉŖÉ“É¢ į“į“šø\nā\nā°āāāāāāāāāāāāā»\n\nŁŁŁŁØŁŪŪŁā”ŁŁØŁŪŁ"})

    }
    else {
            
            var image = await axios.get ('https://i.ibb.co/SBDH0QV/20220114-180954.png', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright Ā© 2022 | Queen Alora*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asena.addCommand({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*ā Queen Alora Version ā*\n\n` + 
                '```Installed version :```\n' +
                Lang.VERS_ION + 
                `\n\nCheck official website : https://www.alorabot.netlify.app/`
           , MessageType.text);
            
        }));
}
