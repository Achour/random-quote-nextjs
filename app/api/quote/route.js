import { NextResponse } from "next/server";
export async function GET(req, res) {
  const respo = await fetch("https://api.api-ninjas.com/v1/quotes", {
    next: { revalidate: 0 },
    method: "GET",
    headers: { "X-Api-Key": process.env.API_KEY },
    contentType: "application/json",
  });

  const json = await respo.json();
  return NextResponse.json(json);
}
