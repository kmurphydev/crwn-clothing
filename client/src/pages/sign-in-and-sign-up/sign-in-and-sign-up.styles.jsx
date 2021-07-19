import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  @media screen and (min-width: 900px) {
    width: 800px;
  display: flex;
  justify-content: space-between;
  margin: auto auto;
  }
  
  @media screen and (max-width: 900px) {
    display:grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    align-self: center;
    margin: 30px 30px;
  }

`;
