import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
                                        // top, item details with image
    productContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#ececec',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        padding: 10
    },
    checkoutImg: {
        width: 90,
        height: 90
    },
    itemDetailsTxt: {
        fontSize: 16,
        margin: 3,
    },

                                // total and prices
    totalPriceContainer: {
        padding: 10,
    },
    totalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20
    },
    itemTxtContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    totalTxt: {
        margin: 5
    },

                                // address 
    addAddressBtnContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    addAddressBtnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addAddressIconAndTxt: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    addressContainer: {
        padding: 10,
        paddingTop: 0,
        alignSelf: 'center',
    },
    addressTxt: {
        textAlign: 'center',
    },

                                // payment
    paymentContainer: {
        padding: 10,
    },
    paymentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    paymentLongInput: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,
        padding: 3
    },
    shortInputContainer: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    paymentShortInput: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
        width: 80,
        padding: 3,
        borderRadius: 10
    },
}) 

export default styles