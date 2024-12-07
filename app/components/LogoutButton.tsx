'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    background-color: #ff0000;
`;

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        // Call API to clear the token and logout
        await fetch('/api/logout');
        // Redirect to the homepage
        router.push('/'); 
    };

    return (
        <StyledButton onClick={handleLogout}> Logout </StyledButton>
    );
}
