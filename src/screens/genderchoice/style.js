import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    genderBtn: {
        width: '85%',
        height: 70,
        padding: 15,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    lastBtn: {
        marginBottom: 70,
    },
    genderBtnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    }

}) 

export default styles