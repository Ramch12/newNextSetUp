import { NextResponse, NextRequest } from "next/server";

export function GET(request) {
  //   const { query } = request;
  //   console.log("query", query);
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const page = searchParams.get("page") || 1;
  console.log("query", query);
  console.log("page", page);
  const users = [
    {
      id: 1,
      name: "ram Ashish",
      friendShip: "Ajay",
    },
    {
      id: 1,
      name: "ram Ashish",
      friendShip: "Ajay",
    },
    {
      id: 1,
      name: "ram Ashish",
      friendShip: "Ajay",
    },
  ];
  return NextResponse.json({
    users,
  });
}

export function POST() {
  return NextResponse.json({ message: "User is created!" }, { status: 201 });
}
