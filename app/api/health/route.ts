import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(req: Request, res: NextResponse<ResponseData>) {
  return NextResponse.json({ message: "Hello from server" });
}
