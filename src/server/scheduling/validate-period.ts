import type { SchedulePeriod } from "./date-range"

export function isSchedulePeriod(
    value: string | undefined
): value is SchedulePeriod {
    return value === "today" || value === "week" || value === "month";
}