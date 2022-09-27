import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    },
    img: {
        marginTop: 20,
        width: 270,
        height: 350
    },
    detailsContainer: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
        padding: 10,
        minWidth: '70%'
    },
    titleTxt:{
        fontSize: 18,
    },
    priceTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    sizeTxt: {
        marginTop: 10,
        fontSize: 16,
    },
    conditionTxt: {
        fontSize: 16
    },
    detailsTxt: {
        fontSize: 16,
        marginTop: 10
    },
}) 

export default styles