import type { ScheduleCommandParams } from "@/app/definitions"
import { isSchedulePeriod } from "../scheduling/validate-period"

export function handleSchedule(
    { period } : ScheduleCommandParams 
): string {
    if (!isSchedulePeriod(period)) {
        return "Please enter a valid period!"
    }


    return `Showing schedule for: ${period}`
}