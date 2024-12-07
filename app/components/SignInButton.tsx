'use client';

import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;
    padding: 8px 15px;
    background-color: #84c7e4;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
`;

export default function SignInButton() {
    const handleSignIn = () => {
        window.location.href = "/api/sign-in";
    };

    return (
        <StyledButton onClick={handleSignIn}>Sign In with Google</StyledButton>
    );
}
