import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 6,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
    },  
    notificationImg: {
        height: 70,
        width: 70
    }
}) 

export default styles