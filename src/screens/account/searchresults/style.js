import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
    noMatchContainer: {
        alignItems: 'center',
        marginTop: '50%'
    },
    noMatchText: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 10
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    itemContainer: {
        height: 310,
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