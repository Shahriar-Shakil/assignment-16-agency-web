import { NextResponse } from "next/server";

export async function POST(req, res) {
  return NextResponse.json({ res: "Success" }, { status: 200 });
}
