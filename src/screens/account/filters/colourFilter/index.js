import { useContext } from "react"
import { SafeAreaView, Text, TouchableOpacity, ScrollView, FlatList } from "react-native"
import FilterContext from "../../../../contexts/filterContext"
import styles from "./style.js"

const ColourFilterScreen = ({navigation}) =>{
    const { filterData, setFilterData } = useContext(FilterContext)
    const colours = ['Black', 'White', 'Yellow', 'Orange', 'Blue', 'Green', 'Purple', 'Pink', 'Red', 'Grey', 'Cream', 'Brown', 'Gold', 'Silver', 'Turquise', 'Navy', 'Multi']

    // go back sends the user back to the filtersScreen with the set data, filterData is a ContextApi set in App.js when the app first renders
    const setContextAPIandNav = (colour) => {
        setFilterData({...filterData, colour: colour})
        navigation.goBack()
    }

    const renderColours = (colour) => {
        return (
            <TouchableOpacity
                onPress={() => setContextAPIandNav(colour)}
                style={styles.colourBtn}
            >
                <Text style={styles.colourBtnText}>{colour}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView>
            <FlatList
                data={colours}
                renderItem={({item}) => renderColours(item)}
            />
        </SafeAreaView>
    )
}

export default ColourFilterScreen