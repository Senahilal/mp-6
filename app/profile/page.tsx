import { cookies } from 'next/headers';
import axios from 'axios';
import { redirect } from 'next/navigation';
import UserProfile from '@/app/components/UserProfile';

export default async function ProfilePage() {
    // Await cookies since it returns a Promise
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    //if no token exists go to sign-in 
    if (!token) {
        return redirect('/api/sign-in');
    }

    try {
        // Fetch user info using Google API
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
        });

        const user = {
            id: userInfoResponse.data.id,
            name: userInfoResponse.data.name,
            email: userInfoResponse.data.email,
            picture: userInfoResponse.data.picture || '',
        };

        return (
            <UserProfile user={user} />
        );
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
        return <div>Error loading profile</div>;
    }
}