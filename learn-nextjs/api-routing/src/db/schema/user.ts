import {  integer, pgTable ,timestamp,varchar} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
 id: integer().primaryKey().notNull().generatedAlwaysAsIdentity(),
 email: varchar().notNull().unique(),
 password : varchar().notNull(),
 createdAt: timestamp().defaultNow(),
 role:varchar().notNull()
});