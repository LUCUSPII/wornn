import { useContext } from "react"
import { SafeAreaView, Text, TouchableOpacity, FlatList } from "react-native"
import FilterContext from "../../../../contexts/filterContext"
import styles from "./style"

const ConditionFilterScreen = ({navigation}) => {
    const { filterData, setFilterData } = useContext(FilterContext)
    const conditions = ["Never Worn", "Hardly Worn 2-3 times", "Occasionally Worn 4-6 times", "Worn 8+ times. Add an image" ]

    // go back sends the user back to the filtersScreen with the set data, filterData is a ContextApi set in App.js when the app first renders
    const setContextAPIandNav = (condition) => {
        setFilterData({...filterData, condition: condition})
        navigation.goBack()
    }

    const renderCondition = (condition) => {
        return(
            <TouchableOpacity 
                onPress={() => setContextAPIandNav(condition)}
                style={styles.conditionBtn}
            >
                <Text style={styles.conditionBtnText}>{condition}</Text>
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

export default ConditionFilterScreen