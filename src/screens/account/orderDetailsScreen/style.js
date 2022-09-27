import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center'
    },
    itemContainer: {
        width: '100%',
        padding: 6,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec'
    },  
    orderImg: {
        height: 70,
        width: 70
    },
    detailsContainer: {
        width: '80%',
        marginLeft: 5
    },
    orderTitle: {
        fontSize: 18
    },
    priceAndSizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
        marginTop: 10
    },
    statusContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec'
    },
    statusTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    shippingAddressContainer: {
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
    },
    shippingAddressTxt: {
        textAlign: 'center'
    }, 
    shippingDetailsContainer: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    shippingDetailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    }, 
    shippingDetailsTxt: {
        fontSize: 16,
        marginBottom: 15
    },
    addShippingContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    addShippingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    addShippingInput: {
        margin: 10,
        padding: 5,
        height: 40,
        backgroundColor: "#ececec",
        borderRadius: 10,
        width: '70%'
    },
    addShippingBtn: {
        marginTop: 10,
        width: 70,
        borderRadius: 10,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    addShippingBtnTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
}) 

export default styles