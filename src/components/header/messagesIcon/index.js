import { TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/core";

const MessagesIcon = () => {
    const navigation = useNavigation()

    const navigteToAddItem = () => {
        navigation.navigate("Messages Screen")
    }

    return (
        <TouchableOpacity onPress={() => navigteToAddItem()}>
            <FontAwesome name="envelope" size={20}/>
        </TouchableOpacity>
    )
}

export default MessagesIcon