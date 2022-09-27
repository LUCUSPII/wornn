import { Text, TouchableOpacity, TextInput, View } from "react-native"
import { useContext, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import UserContext from "../../../contexts/userContext"
import { db, auth} from "../../../../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';
import BlackButton from "../../blackbutton"
import styles from "./style"
import { doc, getDoc } from "firebase/firestore"

const Login = () => {
    const navigation = useNavigation()
    const { userData, setUserData } = useContext(UserContext)
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    useEffect(() => {
        if(userData.user !== undefined){
            const unsubscribe = auth.onAuthStateChanged(user => {
                if(user){
                    navigation.replace("Gender Choice")
                }
            })
            return unsubscribe; 
        }
    }, [userData.user])

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            getDoc(doc(db, 'users', userCredentials.user.uid))
            .then(docSnap => {
                if(docSnap.exists()){
                    setUserData({
                        user: docSnap.data(),
                        uid: userCredentials.user.uid
                    })
                    AsyncStorage.setItem('password', password)
                    AsyncStorage.setItem('email', email)
                } else {
                    alert("User Not Found")
                }
            }).catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }

    return(
        <View style={styles.container}>
            <View style={styles.userInputContainer}>
                <Text>EMAIL ADDRESS:</Text>
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                    autoCapitalize= "none"
                />
            </View>
            <View style={styles.userInputContainer}>
                <Text>PASSWORD:</Text>
                <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            
            <BlackButton text="SIGN IN" func={login}/>

            <Text style={styles.miniText}>
                Forgot password?
            </Text>
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
            <TouchableOpacity
                onPress={()=> {}}
                style={styles.signInOptsBtn}    
            >
                <Text style={styles.signInOptsBtnText}>TWITTER</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login