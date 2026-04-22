import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Button } from '../components/atoms';
import colors from '../themes/colors';
import space from '../themes/space';

const CalculateScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [operation, setOperation] = useState('');

  useEffect(() => {
    if (operation) {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let res = 0;
      if (operation === '+') res = a + b;
      if (operation === '-') res = a - b;
      if (operation === '*') res = a * b;
      if (operation === '/') res = b !== 0 ? a / b : NaN;
      setResult(res);
      setOperation('');
    }
  }, [operation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadora con Hooks</Text>
      <TextInput style={styles.input} placeholder="Número 1"
        keyboardType="numeric" value={num1} onChangeText={setNum1} />
      <TextInput style={styles.input} placeholder="Número 2"
        keyboardType="numeric" value={num2} onChangeText={setNum2} />
      <View style={styles.row}>
        <Button label="+" onPress={() => setOperation('+')} />
        <Button label="-" onPress={() => setOperation('-')} />
        <Button label="×" onPress={() => setOperation('*')} />
        <Button label="÷" onPress={() => setOperation('/')} />
      </View>
      {result !== null && (
        <Text style={styles.result}>
          Resultado: {isNaN(result) ? 'Error (÷0)' : result}
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: space.lg, backgroundColor: colors.background, flexGrow: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: space.md, color: colors.text },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: space.md, marginBottom: space.sm, backgroundColor: colors.white },
  row: { flexDirection: 'row', marginVertical: space.md },
  result: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: space.md },
});

export default CalculateScreen;