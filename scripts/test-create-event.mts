import { createEvent } from "@/server/events/create-event";


const newEvent = await createEvent({
    serverId: "123456789",
    creatorId: "987654321",
    eventTitle: "First Test Event",
    eventStartTime: new Date("2026-11-16T15:00:00Z")
});

console.log(newEvent.toString());