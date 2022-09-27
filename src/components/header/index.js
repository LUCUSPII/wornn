import { View } from "react-native"
import CameraIcon from "./cameraIcon"
import MessagesIcon from "./messagesIcon"
import SearchBar from "./searchbar"
import NotificationIcon from "./notificationIcon"
import styles from "./style"

const Header = () => {

    // the header renders the searchbar the camera the message and the notification icon
    return(
        <View style={styles.container}>
            <SearchBar/>
            <View style={styles.icons}>            
                <NotificationIcon/>
                <CameraIcon/>
                <MessagesIcon/>
            </View>
        </View>
    )
}

export default Header