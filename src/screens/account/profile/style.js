import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: 'white',
    },
    greetingContainer: {
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    hi: {
        fontSize: 28, 
    },
    name: {
        fontSize: 26, 
        fontWeight: 'bold',
        letterSpacing: 2
    },
    signOutContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignSelf: 'center'
    },
    optionBtn: {
        borderBottomWidth: 1,
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20
    },
    optionBtnTxt: {
        fontSize: 20,
        fontWeight: '300'
    }   
}) 

export default styles