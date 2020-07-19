import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome5";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const ButtonInner = styled.View`
  width: 120px;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${props => props.color};
  width: 150px;
  border-radius: 25px;
  text-align: center;
  padding: 10px 10px;
`;

export const Text = styled.Text`
  color: white;
`;

export const Icon = styled(FaIcon)`
  margin-right: 5px;
`;
