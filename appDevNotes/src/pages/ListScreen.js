import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { View, Text, Button, TextInput, TouchableHighlight, Image, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/listStyles';
import { useReducer, useSelector } from 'react-redux';
import NoteItem from '../components/NoteItem'

export default function Pages() {



  const navigation = useNavigation()
  const list = useSelector(state => state.notes.list)


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerRight: () =>(
        <TouchableHighlight  style ={styles.addButton} underlayColor= "tranparent" onPress={()=>navigation.navigate('EditNote')}>
          <Image style ={styles.addButtonImage} source={ require ('../assets/more.png')}/>
        </TouchableHighlight>
      )

    })
  }, [])

  function handleNotesPress() {
    
  }

  return (
    <View style={styles.container}>

      <FlatList style={styles.NotesList}
      data={list}
      renderItem={({item,index})=>(
        <NoteItem
        data ={item}
        index={index}
        onPress={handleNotesPress}
        />
      )}
      keyExtractor={(item,index)=>toString()}
      />
     
    </View>

  );
}