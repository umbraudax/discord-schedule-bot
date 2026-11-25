import { createEvent } from "@/server/events/create-event";


const newEvent = await createEvent({
    serverId: process.env.DISCORD_GUILD_ID as string,
    creatorId: "987654321",
    eventTitle: "First Test Event",
    eventStartTime: new Date("2026-11-26T15:00:00Z")
});

console.log(newEvent.toString());