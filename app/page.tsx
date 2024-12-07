"use client";

import styled from "styled-components";
import SignInButton from "./components/SignInButton";


const StyledDiv = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  color: #333;
`;


export default function Home() {
  const handleSignIn = () => {
    window.location.href = "/api/sign-in";
  };

  return (
    <StyledDiv>
      <StyledP>This is the demo for the CS391 OAuth assignment.</StyledP>
      <SignInButton/>
    </StyledDiv>
  );
}
