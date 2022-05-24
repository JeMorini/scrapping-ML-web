import styled from "styled-components";

export const ContainerProductCard = styled.div`
  display: flex;
  width: 60%;
  height: 250px;
  flex-direction: row;
  background-color: white;
  margin: 10px 0px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px gray;
`;

export const Image = styled.img`
  height: 100%;
  width: 20%;
  border-radius: 20px;
  margin-right: 5px;
`;

export const Logo = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #000;
  text-align: left;
`;

export const SubTitle = styled.h1`
  font-size: 15px;
  color: #000;
`;

export const Price = styled.p`
  font-size: 40px;
  color: #000;
`;

export const ContainerDescription = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  flex-direction: column;
  background-color: white;
  align-items: flex-start;
  border-radius: 5px;
`;

export const ContainerLogo = styled.div`
  display: flex;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
