import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 30
    },
    input: {
        margin: 10,
        padding: 5,
        height: 40,
        backgroundColor: "#ececec",
        borderRadius: 10
    },
    addBtnContainer: {
        width: '85%',
        height: 70,
        padding: 15,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    addBtnTxt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    }
}) 

export default styles