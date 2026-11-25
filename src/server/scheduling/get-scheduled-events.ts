import { events } from "@/db/schema";
import { getEvents } from "../events/get-events";
import { 
    type SchedulePeriod,
    getRangeForPeriod
} from "./date-range";

type Event = typeof events.$inferSelect;

export async function getScheduledEvents(
    serverId: string,
    period: SchedulePeriod,
    now: Date
): Promise<Event[]> {
    const range = getRangeForPeriod(period, now);
    return getEvents(serverId, range.start, range.end);
}