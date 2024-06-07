import { loadCocktails } from "@/lib/cocktails";
import { NextResponse } from "next/server";

export async function GET() {
  const cocktails = await loadCocktails();
  return NextResponse.json(cocktails);
}
