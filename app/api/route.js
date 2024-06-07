import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({
    message: "HI! This is the API route.",
    date: new Date().toString(),
  });
}
