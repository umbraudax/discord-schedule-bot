export type DateRange = {
    start: Date,
    end: Date
};

export function getTodayRange(now: Date): DateRange {
    const nowYear = now.getUTCFullYear();
    const nowMonth = now.getUTCMonth();
    const nowDate = now.getUTCDate();

    return {
        start: new Date(Date.UTC(nowYear, nowMonth, nowDate)),
        end: new Date(Date.UTC(nowYear, nowMonth, nowDate + 1))
    };
}

export function getWeekRange(now: Date): DateRange {
    const nowYear = now.getUTCFullYear();
    const nowMonth = now.getUTCMonth();
    const nowDate = now.getUTCDate();

    const nowDay = (now.getUTCDay() + 6) % 7; //normalized to monday=0
    const thisWeekMonday = nowDate - nowDay;


    return {
        start: new Date(Date.UTC(nowYear, nowMonth, thisWeekMonday)),
        end: new Date(Date.UTC(nowYear, nowMonth, thisWeekMonday + 7))
    };
}

export function getMonthRange(now: Date): DateRange {
    const nowYear = now.getUTCFullYear();
    const nowMonth = now.getUTCMonth();


    return {
        start: new Date(Date.UTC(nowYear, nowMonth, 1)),
        end: new Date(Date.UTC(nowYear, nowMonth + 1, 1))
    };
}

export type SchedulePeriod = "today" | "week" | "month";

export function getRangeForPeriod(
    period: SchedulePeriod,
    now: Date
): DateRange {
    switch (period) {
        case "today": return getTodayRange(now);
        case "week": return getWeekRange(now);
        case "month": return getMonthRange(now);
        default:
            const _exhaustiveCheck: never = period;
            return _exhaustiveCheck;
    }
}