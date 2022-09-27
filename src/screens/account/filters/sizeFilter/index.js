import { useContext } from "react"
import { SafeAreaView, Text, TouchableOpacity, FlatList } from "react-native"
import FilterContext from "../../../../contexts/filterContext"
import styles from "./style"

const SizeFilterScreen = ({navigation}) => {
    const { filterData, setFilterData } = useContext(FilterContext)
    const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

    // go back sends the user back to the filtersScreen with the set data, filterData is a ContextApi set in App.js when the app first renders
    const setContextAPIandNav = (size) => {
        setFilterData({...filterData, size: size})
        navigation.goBack()
    }

    const renderSize = (size) => {
        return(
            <TouchableOpacity
                onPress={() => setContextAPIandNav(size)}
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

export default SizeFilterScreen