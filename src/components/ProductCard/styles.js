import styled from "styled-components";

export const ContainerProductCard = styled.div`
  display: flex;
  width: 60%;
  height: 200px;
  flex-direction: row;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Image = styled.img`
  height: 100%;
  width: 20%;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #000;
`;

export const Price = styled.p`
  font-size: 40px;
  color: #000;
`;

export const ContainerDescription = styled.div`
  display: flex;
  width: 80%;
  height: 200px;
  flex-direction: column;
  background-color: white;
  align-items: flex-start;
  border-radius: 5px;
`;
