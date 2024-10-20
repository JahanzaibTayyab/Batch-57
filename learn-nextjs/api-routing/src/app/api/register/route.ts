import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { registerSchema } from "@/lib/validation/schema";
import { db } from "@/db";
import { usersTable } from "@/db/schema/user";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the parsed body using Zod
    const parsedData = registerSchema.parse(body);
    const hashPassword = await bcrypt.hash(parsedData.password, saltRounds);
    console.log("🚀 ~ POST ~ hashPassword:", hashPassword)
    const data = {
      ...parsedData,
      password: hashPassword,
    };
    const user = await db.insert(usersTable).values(data).returning();

    return NextResponse.json({
      message: "User Registered Successfully",
      user,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      // Return validation errors if Zod validation fails
      return NextResponse.json(
        { message: "Something went wrong from zodError", errors: error.errors },
        { status: 400 }
      );
    }
    if (error.code == "23505")
      return NextResponse.json(
        { message: "Email already exist", error },
        { status: 400 }
      );
  }
}
