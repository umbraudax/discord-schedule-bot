import { REST, Routes } from 'discord.js';
import { scheduleCommand } from '@/commands/schedule';

const token = process.env.DISCORD_BOT_TOKEN;
const applicationId = process.env.DISCORD_APPLICATION_ID;
const guildId = process.env.DISCORD_GUILD_ID;

if (!token || !applicationId || !guildId) {
    throw new Error("Missing Discord configuration");
}

const rest = new REST({ version: "10" }).setToken(token);


await rest.put(
    Routes.applicationGuildCommands(applicationId, guildId),
    {
        body: [scheduleCommand.toJSON()]
    }
);