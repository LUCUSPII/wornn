import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import UserContext from "../../contexts/userContext"
import styles from "./style"


const GenderchoiceScreen = ({navigation}) => {

    const { userData, setUserData } = useContext(UserContext)

    // adding the filter of gender to the userdata and then redericteng user to the account
    const addGenderFilterAndNavigate = (gender) => {
        setUserData({...userData, genderfilter : gender})
        navigation.navigate("Account")
    }       
    
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                onPress={() => addGenderFilterAndNavigate("Women")}
                style={styles.genderBtn}>
                <Text style={styles.genderBtnText}>
                    Women
                </Text>
            </TouchableOpacity>
            <TouchableOpacity                 
                onPress={() => addGenderFilterAndNavigate("Men")}
                style={[styles.genderBtn, styles.lastBtn]}
            >
                <Text style={styles.genderBtnText}>
                    Men
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default GenderchoiceScreen