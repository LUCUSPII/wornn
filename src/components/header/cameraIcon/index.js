import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 


const CameraIcon = () => {
    const navigation = useNavigation()

    const navigteToAddItem = () => {
        navigation.navigate("Add New Item")
    }
    
    return(
        <TouchableOpacity onPress={() => navigteToAddItem()}>
            <FontAwesome name="camera" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default CameraIcon