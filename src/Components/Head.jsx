import styled from "styled-components";
import { ChevronRight } from "react-feather";

const Head = () => {
  return (
    <StyledContainer>
      <TitleContainer>
        <Title>Orders</Title>
        <StyledChevron />
        <StyledText>Order 32457ABC</StyledText>
      </TitleContainer>

      <OrderDetailsContainer>
        <OrderDetailsLeft>
          <h2 style={{ fontSize: "22px", textAlign: "left" }}>
            Order 32457ABC
          </h2>
        </OrderDetailsLeft>

        <OrderDetailsRight>
          <StyledButton>Back</StyledButton>
          <StyledButton wide>Approve Order</StyledButton>
        </OrderDetailsRight>
      </OrderDetailsContainer>
    </StyledContainer>
  );
};

export default Head;

const StyledContainer = styled.div`
  padding: 15px;
  background-color: #f5eeed;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-family: "Trebuchet MS", sans-serif;
`;

const TitleContainer = styled.div`
  display: flex;
  padding-left: 60px;
`;

const Title = styled.h2`
  margin-right: 5px;
  margin-top: 10px;
`;

const StyledChevron = styled(ChevronRight)`
  margin-top: 15px;
  font-size: 30px;
`;

const StyledText = styled.p`
  text-decoration: underline;
`;

const OrderDetailsContainer = styled.div`
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
`;

const OrderDetailsLeft = styled.div`
  padding-left: 60px;
`;

const OrderDetailsRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
`;

const StyledButton = styled.button`
  width: ${({ wide }) => (wide ? "30%" : "20%")};
  border-radius: 30px;
  border: 1px solid #498768;
  color: ${({ wide }) => (wide ? "white" : "#498768")};
  background-color: ${({ wide }) => (wide ? "#498768" : "transparent")};
  cursor: pointer;
`;
