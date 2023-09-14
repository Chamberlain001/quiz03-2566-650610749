import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kitpakorn Thongkot",
    studentId: "650610749",
  });
};
