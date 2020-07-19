import React from "react";
import { View } from "react-native";

import { ContainerList } from "./styles";
import { MenuItem } from "../../types/Menu";
import FabListItem from "./FabListItem";

const FabList: React.FC<{ list: Array<MenuItem>; active: Boolean }> = ({
  list,
  active
}) => {
  const items = list.map(el => <FabListItem key={el.id} item={el} />);

  return active ? <ContainerList>{items}</ContainerList> : <View />;
};

export default FabList;
