import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, TouchableWithoutFeedback } from "react-native";

import { toggleActive } from "../../store/fab/actions";
import { Container, Fab, FabText } from "./styles";
import FabList from "./FabList";
import { MenuItem } from "../../types/Menu";

const Fabb: React.FC<{ icon: string; list: Array<MenuItem> }> = ({
  icon,
  list
}) => {
  const dispatch = useDispatch();
  const active = useSelector(state => state.fab.active);

  return (
    <Container>
      <FabList active={active} list={list} />
      <TouchableWithoutFeedback onPress={() => dispatch(toggleActive(active))}>
        <Fab>
          <FabText>C</FabText>
        </Fab>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Fabb;
