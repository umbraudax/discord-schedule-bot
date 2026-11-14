import { db } from "@/db";
import { events } from "@/db/schema";
import { eq, gte, lt, and, asc } from "drizzle-orm";

type Event = typeof events.$inferSelect;

export async function getEvents(
    serverId: string,
    start: Date,
    end: Date
): Promise<Event[]> {
    const eventsFound = db.select()
        .from(events)
        .where(and(
            eq(events.serverId, serverId),
            gte(events.eventStartTime, start),
            lt(events.eventStartTime, end)
        )).orderBy(asc(events.eventStartTime));

    return eventsFound;
}