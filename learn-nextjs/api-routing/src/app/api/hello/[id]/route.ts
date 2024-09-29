import { NextRequest, NextResponse } from "next/server";

const books = [
  {
    id: 1,
    Name: "Book1",
  },
  {
    id: 2,
    Name: "Book2",
  },
];
export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: number;
    };
  }
) {
  console.log("🚀 ~ GET ~ params:", params.id);
  const currentBook = books.find((book) => book.id == params.id);
  return NextResponse.json({
    message: "Hello from server hello dynamic route",
    currentBook,
  });
}
