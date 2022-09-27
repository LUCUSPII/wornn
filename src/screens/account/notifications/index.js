import { Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import { useEffect, useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import UserContext from "../../../contexts/userContext"
import styles from "./style"
import { MaterialIcons } from '@expo/vector-icons'; 
import { db } from "../../../../firebase/firebase"
import { getDocs, collection, where, query } from "firebase/firestore"

const NotificationsScreen = () => {
  const navigation = useNavigation()
  const { userData } = useContext(UserContext)
  const [ notifications, setNotifications ] = useState([])

  useEffect(() => {
    getNotifications()
  }, [])


  // getting all the notifications of the currently logged in user

  // user doesnt have a chance to delete notifications at the moment
  const getNotifications = async () => {
    try {
      const q = query(collection(db, "notifications"), where("sellerId", "==", userData.uid))

      const querySnapshot = await getDocs(q)

      const notificationList = querySnapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      })
      setNotifications(notificationList)
    } catch (error) {
      console.log(error)
    }
  }

  const renderNotifications = (notification) => {

    return(
        <TouchableOpacity
          onPress={() => navigation.navigate("My Orders Screen")}
          style={styles.notificationContainer}
        >
          <Image
            source={{uri:notification.imageUrl}}
            style={styles.notificationImg}
          />
          <Text>You have sold an item to {notification.buyerName}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
        </TouchableOpacity>
    )
    
  }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={notifications}
        renderItem={({item}) => renderNotifications(item)}
        keyExtractor={notification => notification.itemId}
      />
    </SafeAreaView>
  )
}

export default NotificationsScreen