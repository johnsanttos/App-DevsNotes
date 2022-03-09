import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',


    },

    titleInput: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: '#fff'
    },

    bodyInput: {
        flex: 1,
        padding: 15,
        fontSize: 15,
        color: '#fff',
        backgroundColor: '#333'
    },

    saveButton: {
        marginRight: 15
    },

    saveButtonImage: {
        width: 24,
        height: 24
    },

    closeButton: {
        marginLeft: 15
    },

    closeButtonImage: {
        width: 21,
        height: 21

    },
    deleteButton: {
        height: 40,
        backgroundColor: '#ff3333',
        justifyContent: 'center',
        alignItems: 'center'
    },

    deleteButtonText: {
        fontSize: 14,
        color: '#fff'
    }

})