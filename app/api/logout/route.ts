import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.redirect('/');
    
    // Clearing token
    response.cookies.set('token', '', { httpOnly: true, maxAge: 0, path: '/' }); 
    return response;
}
