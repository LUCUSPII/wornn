import { useState } from "react"
import { useNavigation } from "@react-navigation/core";
import { View, TextInput } from "react-native"
import { Feather } from '@expo/vector-icons'; 
import styles from "./style"

const SearchBar = () => {
    const navigation = useNavigation()
    const [ searchValue, setSearchValue ] = useState('')
    const [ clicked, setClicked ] = useState(false)

    const searchWord = () => {
        if(searchValue.length !== 0){
            navigation.navigate("Search Results", {
                searchValue: searchValue.toLowerCase()
            })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={searchValue}
                onChangeText={text => setSearchValue(text)}
                style={styles.textInput}
                placeholder="Search..."
                onPressIn={() => setClicked(true)}
            />
            {clicked && <Feather onPress={() => searchWord()} name="arrow-right-circle" size={22} color="black" />}
        </View>
    )
}

export default SearchBar