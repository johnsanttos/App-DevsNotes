import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/editNoteStyles';

export default function Pages(props) {

const navigation = useNavigation()

const name = props.route.params?.name ?? 'Visitante';

function handleBackButton(){
    navigation.goBack()
}

 return (
    <View style= {styles.container}>
       <Text> Tela sobre: {name}</Text>
       <Button 
       title= " Voltar para Home"
       onPress={handleBackButton}
       />
   </View>
  );
}