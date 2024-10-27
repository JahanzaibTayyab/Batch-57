// 1 db (connect)
// 2 db (user) get
// user get()
// user Update

import { db } from "@/db";
import { usersTable } from "@/db/schema/user";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

const userPasswordUpdates = async () => {
  console.log("User Password Migration Start");
  const users = await db.select().from(usersTable);
  users.map(async (user) => {
    if (user.password && !user.password.startsWith("$2b$")) {
      const hashPassword = await bcrypt.hash(user.password, 10);
      await db
        .update(usersTable)
        .set({
          password: hashPassword,
        })
        .where(eq(usersTable.id, user.id));
    }
  });
  console.log("User Password Data update");
};

userPasswordUpdates();
