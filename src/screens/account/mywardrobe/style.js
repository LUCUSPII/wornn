import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    dressCardContainer: {
        flexDirection: 'row',
        padding: 10
    },
    wardrobeDressImg: {
        height: 140,
        width: 140,
        marginRight: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    titleInner : {
        fontWeight: '400',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    detail: {
        marginBottom: 10
    },
    detailInner: {
        color: 'grey',
    },
    listBtn: {
        width: 90,
        height: 35,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        bottom: 20
    },
    listBtnTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
}) 

export default styles