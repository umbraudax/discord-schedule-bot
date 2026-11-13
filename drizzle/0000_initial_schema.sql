CREATE TABLE "events" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "events_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"server_id" text NOT NULL,
	"creator_id" text NOT NULL,
	"event_title" text,
	"event_start_time" timestamp with time zone NOT NULL,
	"creation_time" timestamp with time zone DEFAULT now() NOT NULL
);
