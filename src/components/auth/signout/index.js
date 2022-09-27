import { useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import UserContext from "../../../contexts/userContext"
import { auth } from "../../../../firebase/firebase"
import { signOut } from "firebase/auth"
import BlackButton from "../../blackbutton"
import AsyncStorage from "@react-native-async-storage/async-storage"

const SignOut = () => {
    const navigation = useNavigation()
    const { setUserData } = useContext(UserContext)

    // signing out
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            AsyncStorage.removeItem('email')
            AsyncStorage.removeItem('password')
            navigation.replace("Launch")
            setUserData({
                user: undefined,
                uid: undefined,
                filter: undefined
            })

        }).catch(error => alert(error.message))
    }

    return(
        <BlackButton text="Sign Out" func={handleSignOut}/>
    )
}

export default SignOut