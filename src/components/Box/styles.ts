import styled from "styled-components/native";
import FaIcon from "react-native-vector-icons/FontAwesome5";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  position: relative;
  width: 200px;
  align-items: center;
`;

export const Box = styled.View`
  background-color: white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
  border-radius: 4px;
  width: 100%;
`;

export const BoxDepth = styled.View`
  justify-content: center;
  background-color: white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  align-items: center;
  margin-bottom: 5px;
  position: absolute;
  border-radius: 4px;
  top: 10px;
  width: 60%;
  height: 100%;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const BoxContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Footer = styled.Text`
  color: #b7b7b7;
  align-self: center;
`;

export const Badge = styled.Text`
  padding: 5px;
  background-color: ${props => props.color};
  border-radius: 15px;
  font-size: 9px;
  color: white;
  text-align: center;
  width: 35px;
`;

export const Icon = styled(FaIcon)``;

export const Amount = styled.Text`
  color: #2d3748;
  font-size: 40px;
  line-height: 1;
`;

export const Stock = styled.Text`
  color: #ffc700;
  font-size: 15px;
  align-self: flex-end;
`;
