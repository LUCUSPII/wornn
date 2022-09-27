import { SafeAreaView, View, Image, ScrollView} from "react-native";
import { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../../../contexts/userContext"
import styles from "./style";
import promo1 from "../../../../assets/images/promo/promo1.jpg"
import promowomen from "../../../../assets/images/promo/promowomen.jpg"
import promomen from "../../../../assets/images/promo/promomen.jpeg"
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { db } from "../../../../firebase/firebase"
import { setDoc, doc } from "firebase/firestore";

const PromotionsScreen = () => {
    const { userData } = useContext(UserContext)
    const [ expoPushToken, setExpoPushToken] = useState('');
    const [ notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    // asking user for permisson to access album then saves a notification token for the logged in user on the device
    async function registerForPushNotificationsAsync() {

        let token;
        if (Device.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
    
          // SAVE THE PUSH TOKEN TO FIRESTORE
            const userRef = doc(db, 'users', userData.uid);
            setDoc(userRef, { expoPushToken: token }, { merge: true });
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      
        return token;
    }

    // pictures used below are from the asos website MUST BE CHANGED ASAP
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View  style={styles.img1container}>
                        <Image
                            style={styles.promoImg1}
                            source={promo1}
                        />
                    </View>
                    <View style={styles.imgGenderContainer}>
                        {userData.genderfilter === "Women" ? (
                            <Image
                                style={styles.promoImgGender}
                                source={promowomen}
                            />
                        ) : (
                            <Image
                            style={styles.promoImgGender}
                            source={promomen}
                        />
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PromotionsScreen