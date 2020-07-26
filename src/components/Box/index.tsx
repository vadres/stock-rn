import React from 'react';
import {View, Text} from 'react-native';

import {
  Container,
  Content,
  Box,
  BoxDepth,
  Amount,
  Header,
  Badge,
  Icon,
  Stock,
  Footer,
} from './styles';
import {DataBox} from '../../types/DataBox';

const Boxx: React.FC<{data: DataBox}> = ({data}) => {
  const colors = [
    '#00864B',
    '#71BE45',
    '#CBBE00',
    '#F6A41F',
    '#F28329',
    '#EF3F3B',
  ];

  const percent = Math.min(
    100,
    Math.max(1, Math.trunc((data.amount * 100) / data.stock))
  );
  const color =
    colors[Math.trunc(Math.min(99, percent) / (100 / colors.length))];

  return (
    <Container>
      <Content>
        <BoxDepth />
        <Box>
          <Header>
            <Icon name={data.icon} />
            <Badge color={color}>{percent}%</Badge>
          </Header>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Amount>{data.amount}</Amount>
            <Stock>/{data.stock}</Stock>
          </View>
          <Footer>{data.text}</Footer>
        </Box>
      </Content>
    </Container>
  );
};

export default Boxx;
