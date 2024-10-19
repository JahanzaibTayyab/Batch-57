import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { registerSchema } from "@/lib/validation/schema";
import { db } from "@/db";
import { usersTable } from "@/db/schema/user";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the parsed body using Zod
  const parsedData = registerSchema.parse(body);
   const user= await db.insert(usersTable).values(parsedData).returning()

    return NextResponse.json({
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors if Zod validation fails
      return NextResponse.json(
        { message: "Something went wrong from zodError", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
}
