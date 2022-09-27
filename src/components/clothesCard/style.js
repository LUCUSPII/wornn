import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    itemContainer: {
        height: 310,
        width: 180,
        margin: 5,
        alignItems: 'center',
    },
    img: {
        width: 180,
        height: 250,
    },
    itemDetailsContainer: {
        paddingLeft: 15,
        width: '100%'
    },
    itemTitleText: {
        paddingBottom: 5
    }, 
    itemPriceText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
}) 

export default styles