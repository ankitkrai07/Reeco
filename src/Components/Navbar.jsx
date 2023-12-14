import styled from "styled-components";
import { ChevronDown } from "react-feather"; // Assuming you have an alternative icon library

const Navbar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>Reeco</Logo>
      </LogoContainer>

      <NavigationLinks>
        <Link>Store</Link>
        <Link>Orders</Link>
        <Link>Analytics</Link>
      </NavigationLinks>

      <UserContainer>
        <UserName>Hello, Ankit</UserName>
        <ChevronDown />
      </UserContainer>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: #498768;
  height: 70px;
  display: flex;
  justify-content: space-around;
  color: white;
  font-family: "Trebuchet MS", sans-serif;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 32px;
  /* font-family: "Brush Script MT", "Brush Script Std", cursive; */
  font-family: "URW Chancery L", cursive;
`;

const NavigationLinks = styled.div`
  display: flex;
  width: 80%;
  font-size: 20px;
  padding: 20px;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
`;

const Link = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  margin-right: 25px;

  &:hover {
    color: dodgerblue;
  }
`;

const UserContainer = styled.div`
  display: flex;
  width: 30%;
  /* justify-content: space-around; */
  font-size: 20px;
  padding: 10px;
  align-items: center;
`;

const UserName = styled.span`
  margin-right: 5px;
`;
