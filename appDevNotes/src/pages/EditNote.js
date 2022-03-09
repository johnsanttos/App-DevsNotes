import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, TextInput, TouchableHighlight, Image, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/editNoteStyles';
import { useDispatch, useSelector } from 'react-redux';


export default function Pages(props) {

    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const list = useSelector(state => state.notes.list)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [status, setStatus] = useState('new')


    useEffect(() => {
        if (route.params?.key != undefined && list[route.params.key]) {
            setStatus('edit')
            setTitle(list[route.params.key].title)
            setBody(list[route.params.key].body)
        }

    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status == 'new' ? 'Nova Anotação' : 'Editar Anotação',
            headerLeft: () => (
                <TouchableHighlight
                    style={styles.closeButton}
                    onPress={handleClose}
                    underlayColor="transparent">
                    <Image
                        style={styles.closeButtonImage}
                        source={require('../assets/close.png')} />
                </TouchableHighlight>
            ),

            headerRight: () => (
                <TouchableHighlight style={styles.saveButton}
                    underlayColor="transparent"
                    onPress={handleSaveButton}
                >
                    <Image style={styles.saveButtonImage} source={require('../assets/save.png')} />
                </TouchableHighlight>


            )

        })

    }, [status, title, body])

    const handleSaveButton = () => {
        if (title != '' && body != '') {

            if (status == 'edit') {
                dispatch({
                    type: 'EDIT_NOTES',
                    payload: {
                        key: route.params.key,
                        title, body
                    }
                })

            } else {
                dispatch({
                    type: 'ADD_NOTE',
                    payload: {
                        title: title,
                        body: body
                    } // voce pode substituir por body,title por serem iguais
                })
            }
            navigation.goBack()
        } else {
            alert('Preencha título e corpo!')

        }
    }

    const handleClose = () => {
        navigation.goBack()
    }

    const handleDeleteNoteButton = () => {
        dispatch({
            type: 'DELETE_NOTE',
            payload: {
                key: route.params.key
            }
        })

        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.titleInput}
                placeholder="Digite o titulo da anotação"
                placeholderTextColor='#ccc'
                value={title}
                onChangeText={t => setTitle(t)}
                autoFocus={true}
            />

            <TextInput style={styles.bodyInput}
                placeholder="Digite o corpo da anotação"
                placeholderTextColor='#ccc'
                multiline={true}
                textAlignVertical='top'
                value={body}
                onChangeText={t => setBody(t)}

            />

            {status == 'edit' &&
                <TouchableHighlight
                    style={styles.deleteButton}
                    underlayColor='#ff0000'
                    onPress={handleDeleteNoteButton}
                >
                    <Text
                        style={styles.deleteButtonText}
                    >Excluir anotação </Text>
                </TouchableHighlight>
            }

        </View>
    );
}