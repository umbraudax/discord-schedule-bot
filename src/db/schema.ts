import {
    pgTable,
    bigint,
    text,
    timestamp
} from 'drizzle-orm/pg-core';



// CREATE TABLE events (
//      id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//      server_id TEXT NOT NULL,
//      creator_id TEXT NOT NULL,
//      event_title TEXT,
//      event_start_time TIMESTAMPTZ NOT NULL,
//      creation_time TIMESTAMPTZ DEFAULT NOW() NOT NULL
// );

export const events = pgTable("events", {
    id: bigint("id", { mode: "bigint" })
        .generatedAlwaysAsIdentity()
        .primaryKey(),
    serverId: text("server_id")
        .notNull(),
    creatorId: text("creator_id")
        .notNull(),
    eventTitle: text("event_title"),
    eventStartTime: timestamp("event_start_time")
        .notNull(),
    createdOn: timestamp("created_on")
        .defaultNow()
        .notNull()    
});