import type { ScheduleCommandParams } from "@/app/definitions"
import { isSchedulePeriod } from "../scheduling/validate-period"
import { getScheduledEvents } from "../scheduling/get-scheduled-events"

export async function handleSchedule(
    { period } : ScheduleCommandParams 
): Promise<string> {
    if (!isSchedulePeriod(period)) {
        return "Please enter a valid period!"
    }

    // eventaully pass through one more layer for formatting
    const scheduledEvents = await getScheduledEvents(process.env.DISCORD_GUILD_ID as string, period, new Date(Date.now()));

    return `Showing schedule for: ${period}:\n${scheduledEvents.map(o => `${o.eventTitle} @ ${o.eventStartTime}`).join('\n')}`
}