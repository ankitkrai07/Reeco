import React from "react";

import styled from "styled-components";
import OrderList from "./OrderList";

const MiddleSection = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <StyledInputContainer>
          <StyledInput placeholder="Search.." />
          <StyledSearchIcon>{/* You can add an icon here */}</StyledSearchIcon>
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledButton>Add Item</StyledButton>
        </StyledButtonContainer>
      </StyledBox>
      <OrderList />
    </StyledContainer>
  );
};

export default MiddleSection;

const StyledContainer = styled.div`
  padding-top: 20px;
  width: 70%;
  margin: auto;
  background-color: #f5eeed;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", sans-serif;
`;

const StyledBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledInputContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;

const StyledSearchIcon = styled.div`
  /* You can add styles for the search icon here */
`;

const StyledButtonContainer = styled.div`
  width: 100%;
`;

const StyledButton = styled.button`
  width: 20%;
  color: #498768;
  border-radius: 30px;
  border: 1px solid #498768;
  background-color: transparent;
  cursor: pointer;
`;
