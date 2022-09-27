import { useNavigation } from "@react-navigation/core"
import { Ionicons } from '@expo/vector-icons'; 

const FilterIcon = () => {
    const navigation = useNavigation()
    
    // filterIcon is visible only on the filteredby category' header
    return(
        <Ionicons name="filter" size={24} color="black" onPress={() => navigation.navigate("Filters")}/>
    )
}

export default FilterIcon