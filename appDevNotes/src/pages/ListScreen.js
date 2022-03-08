import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { View, TouchableHighlight, Image, FlatList, Text } from 'react-native';
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
      headerRight: () => (
        <TouchableHighlight style={styles.addButton} underlayColor="tranparent" onPress={() => navigation.navigate('EditNote')}>
          <Image style={styles.addButtonImage} source={require('../assets/more.png')} />
        </TouchableHighlight>
      )

    })
  }, [])

const handleNotesPress = (index) => {

    navigation.navigate('EditNote', {
      key: index
    })

  }

  return (
   
    <View style={styles.container}>
      { list.length  > 0 &&  
      <FlatList style={styles.NotesList}
        data={list}
        renderItem={({ item, index }) => (
          <NoteItem
            data={item}
            index={index}
            onPress={handleNotesPress}
          />
        )}
        keyExtractor={(item, index) => toString()}
      />
        }

        {list.length == 0 &&
        <View style ={styles.noNotes}> 

          <Image style = {styles.noNotesImage} source={require('../assets/note.png')  }/>
          <Text style = {styles.noNotesText} > Nenhuma anotação</Text>

        </View>
        
        }
    </View>

  );
}