import { SafeAreaView, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import styles from "./style"
import UserContext from "../../../contexts/userContext"
import BlackButton from "../../blackbutton";
import { auth,db } from "../../../../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc} from "firebase/firestore"


const Register = () => {
    const navigation = useNavigation()
    const { setUserData } = useContext(UserContext)
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ lastname, setLastname ] = useState()
    const [ firstname, setFirstname ] = useState()
    const [ phoneNumber, setPhoneNumber ] = useState()

    // register sets the user in the database, in the firebase auth and the user Context Api
    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            setDoc(doc(db, 'users', userCredentials.user.uid), {
                "email": email,
                "firstname": firstname,
                "lastname": lastname,
                "phoneNumber": phoneNumber
            })
            setUserData({
                user: {
                    "email": email,
                    "firstname": firstname,
                    "lastname": lastname,
                    "phoneNumber": phoneNumber
                },
                uid: userCredentials.user.uid
            })
            navigation.replace("Gender Choice")
        })
        .catch(error => console.log(error))
    }

    return(
        <View style={styles.outsideContainer}>
                <Text style={styles.signInOptsText}>
                    OR SIGN IN WITH...
                </Text>
                <TouchableOpacity
                onPress={()=> {}}
                style={styles.signInOptsBtn}  
                >
                    <Text style={styles.signInOptsBtnText}>GOOGLE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {}}
                    style={styles.signInOptsBtn}    
                >
                    <Text style={styles.signInOptsBtnText}>FACEBOOK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {}}
                    style={styles.signInOptsBtn}    
                >
                    <Text style={styles.signInOptsBtnText}>APPLE</Text>
                </TouchableOpacity>
                <Text style={styles.miniText}>
                    Signing up with social is quick. No extra passwords to remember - no brain fall. Don't worry, we'd never share any of your data or post anything on your behalf #notevil
                </Text>
                <Text style={styles.signInOptsText}>
                    OR SIGN UP WITH EMAIL...
                </Text>
                <View style={styles.userInputContainer}>
                    <Text>EMAIL ADDRESS:</Text>
                    <TextInput
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                        autoCapitalize = 'none'
                    />
                </View>
                <View style={styles.userInputContainer}>
                    <Text>FIRST NAME:</Text>
                    <TextInput
                        value={firstname}
                        onChangeText={text => setFirstname(text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.userInputContainer}>
                    <Text>LAST NAME:</Text>
                    <TextInput
                        value={lastname}
                        onChangeText={text => setLastname(text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.userInputContainer}>
                    <Text>PHONE NUMBER:</Text>
                    <TextInput
                        value={phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.userInputContainer}>
                    <Text>PASSWORD:</Text>
                    <TextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                        autoCapitalize = 'none'
                    />
                </View>
                <BlackButton text="JOIN WORNN" func={register}/>
        </View>
    )
}

export default Register