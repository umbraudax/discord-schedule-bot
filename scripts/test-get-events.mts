import { getEvents } from "@/server/events/get-events";


const events1 = await getEvents(
    "123456780", 
    new Date("2026-11-16T00:00:00Z"),
    new Date("2026-11-17T00:00:00Z")
);
const events2 = await getEvents(
    "123456789", 
    new Date("2026-11-15T00:00:00Z"),
    new Date("2026-11-16T15:00:00Z")
);
const events3 = await getEvents(
    "123456789", 
    new Date("2026-11-16T15:00:00Z"),
    new Date("2026-11-17T00:00:00Z")
);

console.log([events1, events2, events3]);