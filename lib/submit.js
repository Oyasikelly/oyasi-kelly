import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Preparing authentication to Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.firstname,
            body.lastname,
            body.email,
            body.phoneNumber,
            body.service,
            body.message,
          ],
        ],
      },
    });

    return NextResponse.json({
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Only POST requests are allowed" },
    { status: 405 }
  );
}
