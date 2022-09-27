import { useEffect, useState, useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Register from "../../components/auth/register"
import Login from "../../components/auth/login"
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from '../../contexts/userContext'
import { auth, db } from '../../../firebase/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";


const LaunchScreen = ({navigation}) => {
    const [ showLogin, setShowLogin ] = useState('login')
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const { setUserData} = useContext(UserContext)

    // using asyncstorage to check if user is logged in or not
    useEffect(() => {  
        //get the email and password from asyncstorage and setting the state
        AsyncStorage.getItem('email').then(emailValue=> {
            setEmail(emailValue)
        })
        AsyncStorage.getItem('password').then(passwordValue=> {
            setPassword(passwordValue)
        })
        
        if(email !== null && password !== null){
            if(email !== undefined && password !== undefined){
                signInWithEmailAndPassword(auth, email, password)
                .then(userCredentials => {
                    getDoc(doc(db, 'users', userCredentials.user.uid))
                    .then(docSnap => {
                        if(docSnap.exists()) {
                            setUserData({
                                user: docSnap.data(),
                                uid: userCredentials.user.uid
                            })
                            navigation.replace("Gender Choice")
                        } else {
                            alert("User Not Found")
                        }
                    }).catch(error => console.log(error))
                }).catch(error => console.log(error))
            }
        }
    }, [email, password])

    const handleShow = (e) => {
        setShowLogin(e)
    }

    // navigating between register and login with using handleShow function on button press
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.btnsOutsideContainer}>
                <TouchableOpacity
                    onPress={()=> handleShow("register")} 
                    style={showLogin === "register" ? styles.navBtnSelected : styles.navBtn}
                >   
                    <Text style={styles.navBtnText}>REGISTER</Text>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity
                    onPress={()=> handleShow("login")}
                    style={showLogin === "login" ? styles.navBtnSelected : styles.navBtn}
                >   
                    <Text style={styles.navBtnText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {showLogin === "register" ? <Register/> : <Login/> }
            </ScrollView>
        </SafeAreaView>
    )
}

export default LaunchScreen