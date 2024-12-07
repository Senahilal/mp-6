import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {

    //Getting environment variables
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

    if (!GOOGLE_CLIENT_ID || !REDIRECT_URI) {
        throw new Error("Missing environment variables");
    }

    //contructing the googleAuthUrl
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`;

    //redirecting googleAuthUrl to enable user to signin with google to this app
    return NextResponse.redirect(googleAuthUrl);
}
