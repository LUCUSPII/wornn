import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    orderCardBtnContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    orderCardImg: {
        height: 70,
        width: 70
    },
    orderCardTitleTxt: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    orderCardArrowIcon: {
        position: 'absolute',
        right: 10        
    }
}) 

export default styles