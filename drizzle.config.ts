import { loadEnvConfig } from "@next/env";
import { defineConfig } from "drizzle-kit";

loadEnvConfig(process.cwd());

const databaseUrl = process.env.DATABASE_URL_UNPOOLED;

if (!databaseUrl) {
    throw new Error("Missing database URL");
}

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dbCredentials: { url: databaseUrl }
});