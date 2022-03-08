import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',

        alignItems: 'center'
    },

    addButton: {
        marginRight: 15,
    },

    addButtonImage: {
        width: 24,
        height: 24
    },
    NotesList: {
        flex: 1,
        width: '100%',
    },

    noNotes: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    noNotesImage: {
        width: 50,
        height: 50,
        marginBottom: 10
    },

    noNotesText: {
        fontSize: 17,
        color: '#fff'
    }


})