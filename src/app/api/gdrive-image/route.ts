import { NextRequest, NextResponse } from "next/server";

/**
 * Google Drive Image Proxy
 *
 * ใช้งาน: /api/gdrive-image?id=FILE_ID
 *
 * วิธีหา FILE_ID จาก Google Drive sharing link:
 *   https://drive.google.com/file/d/{FILE_ID}/view?usp=sharing
 *                                    ^^^^^^^^^ ส่วนนี้คือ FILE_ID
 */
export async function GET(request: NextRequest) {
  const fileId = request.nextUrl.searchParams.get("id");

  if (!fileId) {
    return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
  }

  try {
    // Use Google Drive direct download URL
    const driveUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

    const response = await fetch(driveUrl, {
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image from Google Drive" },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to proxy image" },
      { status: 500 }
    );
  }
}
