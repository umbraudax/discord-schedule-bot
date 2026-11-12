import type { CommandOption } from '@/app/definitions'

export default function buildParams(cmd: string, opts?: CommandOption[]) {
    switch (cmd) {
        case "schedule":
            let period = opts?.find((x) => x.name === "period")?.value;
            period = period ? period : "";
            return { period }
    }
}