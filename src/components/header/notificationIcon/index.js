import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

const NotificationIcon = () => {
    const navigation = useNavigation()

    const navigteToNotifications = () => {
        navigation.navigate("Notifications")
    }
    
    return (
        <TouchableOpacity onPress={() => navigteToNotifications()}>
            <FontAwesome5 name="bell" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default NotificationIcon