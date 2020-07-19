import React from "react";
import { View } from "react-native";

import { Container, Button, Text, Icon } from "./styles";

const Bt: React.FC<{ value: string; color: string }> = props => {
  return (
    <Container>
      <Button color={props.color}>
        <Text>
          <Icon name="apple" />
          {props.value}
        </Text>
      </Button>
    </Container>
  );
};

export default Bt;
