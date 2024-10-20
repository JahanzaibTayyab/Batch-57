import  bcrypt  from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { loginSchema } from "@/lib/validation/schema";
import { db } from "@/db";
import { usersTable } from "@/db/schema/user";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    //throw new Error("this is Custom error");
    // Validate the parsed body using Zod
    const parsedData = loginSchema.parse(body);
    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, parsedData.email));
    if (result.length > 0) {
      const user = result[0];

      const passwordMatch = await bcrypt.compare(parsedData.password,user.password)
      if (passwordMatch) {
        return NextResponse.json({ message: "User Login Successfully", user });
      } else {
        throw new Error("Invalid email or password");
      }
    } else {
      throw new Error("Invalid email or password");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      // Return validation errors if Zod validation fails
      return NextResponse.json(
        { message: "Something went wrong from zodError", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
