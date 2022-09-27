import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from "react-native"
import styles from "./style"

const CategorySelect = ({route, navigation}) => {

    const categories = ['Skirts', 'Dresses', 'Jackets & Coats', 'Tops', 'Shoes']

    // callback function from add new item screen
    const setsCategoryAndNav = (category) => {
        route.params.updateData(category)
        navigation.goBack()
    }

    const renderCategory = (category) => {
        return(
            <TouchableOpacity 
                onPress={() => setsCategoryAndNav(category)}
                style={styles.categoryBtn}
            >
                <Text style={styles.categoryBtnText}>{category}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={categories}
                    renderItem={({item}) => renderCategory(item)}
                />
            </View>
        </SafeAreaView>
    )
}

export default CategorySelect