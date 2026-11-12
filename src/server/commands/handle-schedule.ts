import type { ScheduleCommandParams } from "@/app/definitions"

export function handleSchedule(
    { period } : ScheduleCommandParams 
): string {
    if (!period) {
        return "Please enter a valid period!"
    }

    if (period === "week") {
        return (
`@everyone 

Monday 11/9
System Maintenance Review @ 10am (IT Department)
New Hire Orientation @ 2pm (HR Department)

Tuesday 11/10
Quarterly Budget Sync @ 9am (Finance Department)
Client Onboarding Call @ 1pm (Sales Department)
Brand Strategy Meeting @ 3pm (Marketing Department)
Vendor Contract Review @ 4:30pm (Legal Department)

Wednesday 11/11
Supply Chain Check-in @ 11am (Operations Department)
Safety Meeting @ 3pm (HR Department)
Executive Town Hall @ 4pm (Corporate)

Thursday 11/12
Project Proposal Deadline @ 2pm (Corporate)

Friday 11/13
Network Security Audit @ 5pm (IT Department)

Saturday 11/14
Server Migration Window @ 10am (IT Department)
Building Inspection @ 12pm (Facilities Department)`)
    }


    return `Showing schedule for: ${period}`
}