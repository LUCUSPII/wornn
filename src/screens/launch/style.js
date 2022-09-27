import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
    },
    btnsOutsideContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25, 
        marginBottom: '10%' ,
    },
    navBtn: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        padding: 2,
        alignItems: 'center',
        width: '50%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    navBtnSelected: {
        borderBottomWidth: 2,
        borderBottomColor: '#0385FF',
        padding: 2,
        alignItems: 'center',
        width: '50%',
        paddingTop: 10,
        paddingBottom: 10,
    },
    divider: {
        borderRightWidth: 1,
        borderRightColor: 'grey',
        height: '60%',
    },
    navBtnText: {
        letterSpacing: 2,
        fontSize: 16,
        color: 'grey'
    }   
}) 

export default styles