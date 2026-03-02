import { NextResponse } from "next/server";
import { wichoPostService } from "seitc/services/wicho-post-service";

export async function GET() {
  const posts = await wichoPostService.getAll();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const post = await wichoPostService.create(body);

  return NextResponse.json(post);
}