import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../styles/noteItemStyles'

export default function components({ data, index, onPress }) {
  return (
    <TouchableHighlight style={styles.box} onPress = {()=> onPress(index)}>

      <Text style={styles.text}> {data.title} </Text>

    </TouchableHighlight>
  );
}