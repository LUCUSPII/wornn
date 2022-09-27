import { SafeAreaView, TouchableOpacity, Text, FlatList } from "react-native"
import styles from "./style"

const GenderSelect = ({route, navigation}) => {

    const genders = ["Women", "Men"]

    // callback function from add new item screen
    const setsGenderAndNav = (gender) => {
        route.params.updateData(gender)
        navigation.goBack()
    }

    const renderGender = (gender) => {
        return(
            <TouchableOpacity 
                onPress={() => setsGenderAndNav(gender)}
                style={styles.genderBtn}
            >
                <Text style={styles.genderBtnText}>
                    {gender}
                </Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={genders}
                renderItem={({item}) => renderGender(item)}
            />
        </SafeAreaView>
    )
}

export default GenderSelect