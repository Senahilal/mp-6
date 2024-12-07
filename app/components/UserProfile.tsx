'use client';

import styled from 'styled-components';
import LogoutButton from '@/app/components/LogoutButton';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 80%;
    max-width: 500px;
    margin: 50px auto;
`;

const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProfileText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin: 5px 0;
`;

export default function ProfileClient({ user }: { user: { id: string; name: string; email: string; picture: string } }) {
    return (
        <ProfileContainer>
        {user.picture && <ProfileImage src={user.picture} alt="Profile" />}
        <ProfileText>Name: {user.name}</ProfileText>
        <ProfileText>User ID: {user.id}</ProfileText>
        <ProfileText>Email: {user.email}</ProfileText>
        <LogoutButton />
        </ProfileContainer>
    );
}
