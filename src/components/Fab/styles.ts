import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  bottom: 40px;
  right: 20px;
  align-items: flex-end;
`;

export const Fab = styled.View`
  border-radius: 50%;
  background-color: #64baeb;
  width: 40px;
  padding: 11px 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const FabText = styled.Text`
  color: white;
`;

export const ContainerList = styled.View``;

export const ContainerListItem = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ContentListItem = styled.View`
  padding: 4px 6px 4px 6px;
  border-radius: 3px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.Text`
  font-size: 11px;
  color: #2d3748;
  width: auto;
`;
