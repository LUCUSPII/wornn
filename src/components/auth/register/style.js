import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    outsideContainer: {
        height: "100%",
        backgroundColor: 'white',
        alignItems: 'center'
    },
    signInOptsBtn: {
        width: '90%',
        marginTop: 20,
        padding: 15,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center'
    },
    signInOptsBtnText: {
        fontWeight: '700',
    }, 
    userInputContainer: {
        marginTop: 20,
        padding: 3,
        width: '90%',
    },  
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 13,
        marginTop: 10,
    },
    signIngBtn: {
        width: '90%',
        marginTop: 20,
        marginBottom: 100,
        padding: 15,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    signIngBtnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    miniText: {
        margin: 30,
        width: '70%',
        textAlign: 'center',
        color: 'grey',
        fontSize: 12
    },
    signInOptsText: {
        fontWeight: '700',
        letterSpacing: 2,
        margin: 20,
    },
}) 

export default styles