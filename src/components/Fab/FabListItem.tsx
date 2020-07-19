import React from "react";
import { View, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { toggleActive } from "../../store/fab/actions";
import { ContainerListItem, ContentListItem, Label } from "./styles";
import { MenuItem } from "../../types/Menu";

const FabListItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const dispatch = useDispatch();
  const active = useSelector(state => state.fab.active);

  return (
    <ContainerListItem>
      <TouchableHighlight onPress={() => dispatch(toggleActive(active))}>
        <ContentListItem>
          <Label>{item.label}</Label>
        </ContentListItem>
      </TouchableHighlight>
    </ContainerListItem>
  );
};

export default FabListItem;
