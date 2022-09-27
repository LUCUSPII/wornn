import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: '100%'
    },
    insideContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    categoryImg: {
        width: 170,
        height: 170,
        margin: 10
    },
    txtContainer: {
        width: 170,
        height: 170,
        margin: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgTxt : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 27,
        textAlign: 'center'
    }
}) 

export default styles