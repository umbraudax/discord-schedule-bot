import { db } from "@/db";
import { events } from "@/db/schema";

type NewEvent = typeof events.$inferInsert;

export async function createEvent(
    event: NewEvent
): Promise<bigint> {
    const newEvent = await db.insert(events)
        .values(event)
        .returning({id: events.id});

    const inserted = newEvent[0];
    if (!inserted) {
        throw new Error("Event insertion returned no record");
    }
    
    return inserted.id;
}