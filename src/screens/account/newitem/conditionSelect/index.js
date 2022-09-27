import { SafeAreaView, Text, TouchableOpacity, FlatList } from "react-native"
import styles from "./style"


const ConditionSelect = ({route, navigation}) => {
    const conditions = ["Never Worn", "Hardly Worn 2-3 times", "Occasionally Worn 4-6 times", "Worn 8+ times. Add an image" ]

    // callback function from add new item screen
    const setsConditionAndNav = (condition) => {
        route.params.updateData(condition)
        navigation.goBack()
    }

    const renderCondition = (condition) => {
        return (
            <TouchableOpacity 
                onPress={() => setsConditionAndNav(condition)}
                style={styles.conditionBtn}
            >
                <Text style={styles.conditionBtnText}>
                    {condition}
                </Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={conditions}
                renderItem={({item}) => renderCondition(item)}
            />
        </SafeAreaView>
    )
}

export default ConditionSelect