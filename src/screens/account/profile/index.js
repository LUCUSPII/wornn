import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/core";
import UserContext from "../../../contexts/userContext"
import SignOut from "../../../components/auth/signout"
import styles from "./style.js"

const ProfileScreen = () => {   
    const navigation = useNavigation()
    const { userData } = useContext(UserContext)

    const firstName = userData.user.firstname.charAt(0).toUpperCase() + userData.user.firstname.slice(1)
    const lastName = userData.user.lastname.charAt(0).toUpperCase() + userData.user.lastname.slice(1)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.greetingContainer}>
                <Text style={styles.hi}>Hi,</Text>
                <Text style={styles.name}>{firstName} {lastName}</Text>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity 
                    style={styles.optionBtn}
                    onPress={() => {navigation.navigate("My Orders Screen")}}
                >
                    <Text style={styles.optionBtnTxt}>Sales and Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    <Text style={styles.optionBtnTxt}>Payment Methods</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionBtn}>
                    <Text style={styles.optionBtnTxt}>My Details</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.optionBtn}
                    onPress={() => {navigation.navigate("Messages Screen")}}
                >
                    <Text style={styles.optionBtnTxt}>Messages</Text>
                </TouchableOpacity>                
                <TouchableOpacity 
                    style={styles.optionBtn}
                    onPress={() => {navigation.navigate("Import Purchase Screen")}}
                >
                    <Text style={styles.optionBtnTxt}>Import Purchase</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.optionBtn}
                    onPress={() => {navigation.navigate("My Wardrobe")}}
                >
                    <Text style={styles.optionBtnTxt}>My Wardrobe</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signOutContainer}>
                <SignOut/>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen