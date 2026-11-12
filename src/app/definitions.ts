export type CommandInteraction = {
    type: number;
    data?: CommandData
};

export type CommandData = {
    name: string;
    options?: CommandOption[];
};

export type CommandOption = {
    name: string,
    value: string
}


export type ScheduleCommandParams = {
    period: string;
}
