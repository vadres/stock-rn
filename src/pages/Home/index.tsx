import React, { useEffect } from "react";

import { config } from "../../services/stockService";

import { DataBox } from "../../types/DataBox";
import { MenuItem } from "../../types/Menu";

import { Container, Div } from "./styles";
import Button from "../../components/Button";
import Box from "../../components/Box";
import Fab from "../../components/Fab";

export const Home: React.FC = () => {
  useEffect(() => {
    config();
  }, []);

  const list: Array<MenuItem> = new Array<MenuItem>();

  list.push({ label: "Limpar Estoque", id: 1 });
  list.push({ label: "Limpar Saídas", id: 2 });

  const data: DataBox[] = new Array<DataBox>();

  data.push({
    amount: 12,
    stock: 120,
    text: "Itens a receber",
    icon: "arrow-up"
  });

  data.push({
    amount: 103,
    stock: 120,
    text: "Itens em estoque",
    icon: "arrow-up"
  });

  const boxItems = data.map((dataBox, key) => (
    <Div>
      <Box data={dataBox} key={key} />
    </Div>
  ));

  return (
    <Container>
      {boxItems}
      <Div>
        <Button color="#64BAEB" value="Nova Entrada" />
        <Button color="#D8B604" value="Nova Saída" />
      </Div>
      <Fab list={list} icon={"arrow-up"} />
    </Container>
  );
};
