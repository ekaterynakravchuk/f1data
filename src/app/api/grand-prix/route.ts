import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const year = searchParams.get("year");
  const round = searchParams.get("round");

  if (!year || !round) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  const API_URL = `http://api.jolpi.ca/ergast/f1/${year}/${round}/results`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
