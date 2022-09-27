import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        marginTop: 0,
    },
    innerContainer: {
        paddingBottom: 100
    },
    inputContainer: {
        marginTop: 20,
    },
    inputText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    titleAndPriceInputField: {
        borderWidth: 1,
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    priceMsgTxt: {
        marginLeft: 25,
        color: 'grey',
        fontSize: 13
    }, 
    descriptionInputField: {
        borderWidth: 1,
        width: '90%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    touchBtn: {
        borderWidth: 1,
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 5, 
        padding: 10,
        paddingTop: 14,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    touchBtnText: {
        color: 'grey',
        fontSize: 16
    },
}) 

export default styles