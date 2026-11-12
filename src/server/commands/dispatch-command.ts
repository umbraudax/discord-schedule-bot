import type { CommandData } from "@/app/definitions";
import { handleSchedule } from "./handle-schedule";
import buildParams from './build-params'

const commandLookup = {
    schedule: handleSchedule
}


export function dispatchCommand(
    command: CommandData
): string {
    if (!Object.hasOwn(commandLookup, command.name)) {
        return "Unknown command."
    }

    
    const commandHandle = commandLookup[command.name as keyof typeof commandLookup];

    const params = buildParams(command.name, command.options);
    return commandHandle(params!);

}