import React from 'react';
import { View, Text, TouchableHighlight} from 'react-native';
import styles from '../styles/noteItemStyles'

export default function components({data,index,onPress}) {
 return (
   <TouchableHighlight style={styles.box}>
     <Text style={styles.text}> Titulo da anotação </Text>
   </TouchableHighlight>
  );
}