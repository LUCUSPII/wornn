import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
        paddingTop: 100,
    },
    filterBtnContainer: {
        borderWidth: 2,
        height: 60,
        margin: 20,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
    },
    filterBtnTxt: {
        paddingLeft: 20,
        fontSize: 18,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: -20
    },
    priceTxt: {
        fontSize: 18,
    },
    sliderContainer: {
        height: 100,
    },
    filterSetOrClearBtnContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    setOrClearFilterBtn: {
        backgroundColor: 'black',
        width: 120,
        alignItems: 'center'
    }, 
    setOrClearFilterBtnTxt: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 16
    }
}) 

export default styles