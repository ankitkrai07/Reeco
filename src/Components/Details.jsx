import React from "react";
import styled from "styled-components";
// import { Products } from '../component/Products';

const Details = () => {
  return (
    <StyledContainer>
      <OrderDetailsContainer>
        <OrderDetailBox>
          <OrderDetailText>Supplier</OrderDetailText>
          <OrderDetailHeading>
            East coast fruits & vegetables
          </OrderDetailHeading>
        </OrderDetailBox>
        <OrderDetailBox>
          <OrderDetailText>Supplier</OrderDetailText>
          <OrderDetailHeading>Another supplier name</OrderDetailHeading>
        </OrderDetailBox>
        <OrderDetailBox>
          <OrderDetailText>Supplier</OrderDetailText>
          <OrderDetailHeading>Another supplier name</OrderDetailHeading>
        </OrderDetailBox>
        <OrderDetailBox>
          <OrderDetailText>Supplier</OrderDetailText>
          <OrderDetailHeading>Another supplier name</OrderDetailHeading>
        </OrderDetailBox>
      </OrderDetailsContainer>
      {/* <Container><Products /></Container> */}
    </StyledContainer>
  );
};

export default Details;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: "Trebuchet MS", sans-serif;
`;

const OrderDetailsContainer = styled.div`
  width: 70%;
  margin: auto;
  background-color: #f5eeed;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  font-weight: bold;
`;

const OrderDetailBox = styled.div`
  border-right: 1px solid black;
  padding: 5px;

  &:last-child {
    border-right: none;
  }
`;

const OrderDetailText = styled.p`
  text-align: left;
`;

const OrderDetailHeading = styled.h2`
  text-align: left;
`;
