import { SlashCommandBuilder } from "discord.js";

export const scheduleCommand = new SlashCommandBuilder()
    .setName("schedule")
    .setDescription("View upcoming scheduled events")
    .addStringOption(builder => 
        builder
            .setName("period")
            .setDescription("The time period for events to view.")
            .setRequired(true)
            .addChoices(
                { name: "today", value: "today" },
                { name: "week", value: "week" },
                { name: "month", value: "month" }
            )
    );