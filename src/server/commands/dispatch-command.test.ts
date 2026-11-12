import { describe, it, expect } from 'vitest';
import { dispatchCommand } from './dispatch-command';


describe('dispatchCommand', () => {
    it("dispatch to schedule command with week argument", () => {

        const command = {
            name: "schedule" as const,
            options: [
                { name: "format", value: "compact" },
                { name: "period", value: "week" }
            ]
        };

        expect( dispatchCommand(command) ).toBe("Showing schedule for: week");
    });

    it("unknown command even in heirarchal scenarios", () => {

        const command = {
            name: "toString",
            options: []
        };

        expect( dispatchCommand(command) ).toBe("Unknown command.");
    });
});

