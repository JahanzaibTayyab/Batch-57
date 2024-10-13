import { drizzle } from 'drizzle-orm/connect'
    export const  db = drizzle('postgres-js', process.env.DATABASE_URL as string);
