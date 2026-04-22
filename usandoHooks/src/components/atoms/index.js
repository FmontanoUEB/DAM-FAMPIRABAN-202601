import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import space from '../../themes/space';

export const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    padding: space.md,
    margin: space.sm,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
  },
  text: { color: colors.white, fontSize: 18 },
});