import { NextRequest, NextResponse } from "next/server";
export async function GET(request, { params }) {
  const { postId } = await params;
  console.log("postid", postId);
  return NextResponse.json({
    message: "post successfully fetched",
    postId: postId,
  });
}

export async function POST(request, { params }) {
  const { postId } = await params;
  const body = await request.json();
  console.log("body", body);
  console.log("postid", postId);
  return NextResponse.json({
    message: "post successfully fetched",
    postId: postId,
  });
}
