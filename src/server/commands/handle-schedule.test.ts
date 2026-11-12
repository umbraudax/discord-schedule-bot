import { describe, it, expect } from 'vitest';
import { handleSchedule } from './handle-schedule';


describe('handleSchedule', () => {
    it("week period returns week message", () => {
        expect( handleSchedule({ period: "week" }) ).toBe("Showing schedule for: week");
    });

    it("today period returns today message", () => {
        expect( handleSchedule({ period: "today" }) ).toBe("Showing schedule for: today");
    });

    it("empty string gives invalid message", () => {
        expect( handleSchedule({ period: "" }) ).toBe("Please enter a valid period!");
    });
});

