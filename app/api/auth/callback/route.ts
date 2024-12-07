import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
        return NextResponse.json({ error: "No authorization code provided" }, { status: 400 });
    }

    try {
        // Get access tokennn
        const tokenResponse = await axios.post(
        'https://oauth2.googleapis.com/token',
        null,
        {
            params: {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        );

        const accessToken = tokenResponse.data.access_token;

        // Fetch user info using access token
        const userResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${accessToken}` },
        });

        const user = {
        id: userResponse.data.id,
        name: userResponse.data.name,
        email: userResponse.data.email,
        picture: userResponse.data.picture || '',
        };

        console.log('User Info:', user);

        // Redirect to home page and set a cookie for the access token
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const homeUrl = `${baseUrl}/profile`;

        const response = NextResponse.redirect(homeUrl);
        response.cookies.set('token', accessToken, { httpOnly: true });

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
        console.error('Error during callback processing:', error.response?.data || error.message);
        } else {
        console.error('Error during callback processing:', error);
        }
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

