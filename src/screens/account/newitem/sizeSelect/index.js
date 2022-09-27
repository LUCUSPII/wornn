import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from "react-native"
import styles from "./style"

const SizeSelect = ({route, navigation}) => {
    const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

    // callback function from add new item screen
    const setsSizeAndNav = (size) => {
        route.params.updateData(size)
        navigation.goBack()
    }

    const renderSize = (size) => {
        return(
            <TouchableOpacity 
                onPress={() => setsSizeAndNav(size)}
                style={styles.sizeBtn}
            >
                <Text style={styles.sizeBtnText}>{size}</Text>
            </TouchableOpacity> 
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={sizes}
                renderItem={({item}) => renderSize(item)}
            />
        </SafeAreaView>
    )
}

export default SizeSelect