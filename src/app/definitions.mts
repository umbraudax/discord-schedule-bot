export type CommandInteraction = {
    type: number;
    data?: {
        name: string;
        options?: {
            name: string;
            value: string;
        }[];
    };
};