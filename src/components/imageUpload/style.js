import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center'
    },
    cameraContainer: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'lightgrey',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusIcon: {
        position: 'absolute',
        left: 3,
        zIndex: 3
    }
}) 

export default styles