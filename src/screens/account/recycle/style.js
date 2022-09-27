import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
    topTxt: {
        textAlign: 'center',
        padding: 30
    },
    recTitle: {
        letterSpacing: 1,
        marginBottom: 15,
        marginLeft: 10
    },
    radioBtnTxtContainer: {
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
    },
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 13,
        marginBottom: 15,
        width: '90%',
        alignSelf: 'center'
    },
    imageUploadContainer: {
        flexDirection: 'row'
    },
    recyclePlaceHolderImg: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginLeft: 20
    },
    imageUploadPlaceHolder: {
        width: 100,
        height: 100,
        backgroundColor: '#ececec',
        borderRadius: 10,
        marginLeft: 20,
        borderStyle: 'dashed',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    textAreaDesc: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 170,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20
    },
    submitBtnContainer: {
        width: '85%',
        height: 70,
        padding: 15,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        alignSelf: 'center',
    },
    submitBtnText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    }
}) 

export default styles