import { SafeAreaView, Text, TouchableOpacity, View, FlatList } from "react-native"
import styles from "./style"

const ColourSelect = ({route, navigation}) => {
    const colours = ['Black', 'White', 'Yellow', 'Orange', 'Blue', 'Green', 'Purple', 'Pink', 'Red', 'Grey', 'Cream', 'Brown', 'Gold', 'Silver', 'Turquise', 'Navy', 'Multi']

    // callback function from add new item screen
    const setsColourAndNav = (colour) => {
        route.params.updateData(colour)
        navigation.goBack()
    }

    const renderColours = (colour) => {
        return(
            <TouchableOpacity 
                onPress={() => setsColourAndNav(colour)}
                style={styles.colourBtn}
            >
                <Text style={styles.colourBtnText}>{colour}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={colours}
                    renderItem={({item}) => renderColours(item)}
                />
            </View>
        </SafeAreaView>
    )
}

export default ColourSelect