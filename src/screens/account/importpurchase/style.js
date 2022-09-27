import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    shopBtn: {
        height: 70,
        borderBottomWidth:1,
        borderBottomColor: '#ececec',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 30,
    },
    shopBtnTxt: {
        fontSize: 16
    },
    userDataPopUp: {
        position: 'absolute',
        backgroundColor: "#ffffffcc",
        width: '100%',
        height: '100%',
    },
    userDataPopUpInnerContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    userInputContainer: {
        marginTop: 20,
        padding: 3,
        width: '90%',
        alignSelf: 'center'
    },  
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 13,
        marginTop: 10,
    },
    importDataContainer: {
        alignItems: 'center'
    },
    uploadBtn: {
        width: '90%',
        marginTop: 20,
        padding: 15,
        backgroundColor: 'black',
        alignItems: 'center',
        alignSelf: 'center'
    },
    uploadBtnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
}) 

export default styles