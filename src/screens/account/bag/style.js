import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    itemContainer: {
        minWidth: '40%',
        height: 300,
        margin: 5,
        alignItems: 'center',
        padding: 8
    },
    checkOutBtnContainer: {
        width: '90%',
        height: 60,
        padding: 15,
        marginBottom: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkOutBtnContainerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
    }, 
    removeIconContainer: {
        position: 'absolute',
        right: 0,
        top: 3,
        zIndex: 3
    },
    img: {
        borderRadius: 10,
        width: 160,
        height: 230
    },
    checkoutBtn: {
        marginTop: 5,
    },
    checkoutBtnTxt: {
        fontWeight: 'bold'
    },
    emptyBagContainer: {
        marginTop: '50%',
        alignItems: 'center'
    }, 
    emptyBagText: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 10
    }
}) 

export default styles