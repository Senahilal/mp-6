import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f8f0df;
`;

export default function Navbar() {
    return (
        <NavbarContainer>
        <h1>CS391 OAuth</h1>
        <div>
            <Link href="/api/sign-in">Sign In</Link>
            <Link href="/profile">Profile</Link>
        </div>
        </NavbarContainer>
    );
}
