import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 15px;
`;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 15px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.Button``;

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [porcent, setPorcent] = useState(10);

  const handleCalculate = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip((porcent / 100) * nBill);
    }
  };

  useEffect(() => {
    handleCalculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [porcent, bill]);

  return (
    <Page>
      <HeaderText> Calculadora de Gorjeta</HeaderText>

      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />

      <PctArea>
        <PctItem title="5%" onPress={() => setPorcent(5)} />
        <PctItem title="10%" onPress={() => setPorcent(10)} />
        <PctItem title="15%" onPress={() => setPorcent(15)} />
        <PctItem title="20%" onPress={() => setPorcent(20)} />
      </PctArea>

      {tip > 0 && bill !== '' && (
        <ResultArea>
          <ResultItemTitle>Valor da conta</ResultItemTitle>
          <ResultItem> R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {tip.toFixed(2)} ({porcent})%
          </ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};
