import { useState, useContext, useEffect } from 'react'
import UserContext from "../../../../contexts/userContext"
import BagContext from "../../../../contexts/bagContext"
import { ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import BlackButton from '../../../../components/blackbutton';
import { db } from "../../../../../firebase/firebase"
import { addDoc, collection, updateDoc, doc, getDoc } from "firebase/firestore"

import styles from './style'

const CheckoutScreen = ({route, navigation}) => {
    const item = route.params.itemDetails
    const { userData } = useContext(UserContext)
    const { bagData, setBagData } = useContext(BagContext)
    const [ address, setAddress ] = useState()
    const [ eToken, setEToken ] = useState()

    useEffect(() => {
        getPushTokenOfSeller()
    }, [])

    const getPushTokenOfSeller = async () => {
        try {
            const docRef = doc(db, "users", item.userId)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setEToken(docSnap.data().expoPushToken)
            }
        } catch(error) {
            console.log(error)
        }
    }

    const updateAddress = (data) => {
        setAddress(data)
    } 

    // send push notification is a function provided by expo to test the push notification with their api
    // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
    async function sendPushNotification(itemtitle) {
        const message = {
            to: eToken,
            sound: 'default',
            title: "You have sold an item!",
            body: itemtitle,
            data: { someData: 'goes here' },
            };
        fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    }

    const handlePress = (pageName) => {
        if(pageName === "Address"){
            setAddress()
            navigation.navigate("Address", {
                pageName: pageName,
                updateData: updateAddress
            })
        }
    }

    // create order
    // first creating an order in the database with all the order details
    // then removes the item from the bagData context Api
    // then redirects the user to the My Orders Screen and then updates the item details in the database to sold and adds the order id
    const handlePay = async () => {
        if(address){
            try {
                // create order
                const orderRef = await addDoc(collection(db, 'orders'), {
                    address: address,
                    itemId: item.id,
                    sellerId: item.userId,
                    buyerId: userData.uid, 
                    shipped: false,
                    buyerName: `${userData.user.firstname} ${userData.user.lastname}`
                })
                const newData = await bagData.filter(element => {
                    return element.id !== item.id
                })
                await setBagData(newData)
                await navigation.navigate("My Orders Screen")
                
                // update the item to sold
                const itemRef = doc(db, "clothes", item.id)
                await updateDoc(itemRef, {
                    sold: true,
                    orderId: orderRef.id
                })
                await createNotification()
            } catch(error){
                console.log(error)
            }
        } else {
            alert("Please Insert Address")
        }
    } 

    // creates a notification in the database which will be rendered for the user on the notifications screen
    const createNotification = async () => {
        try {
            await addDoc(collection(db, "notifications"), {
                itemId: item.id,
                itemTitle: item.title,
                buyerName: `${userData.user.firstname} ${userData.user.lastname}`,
                sellerId: item.userId,
                imageUrl: item.imageUrl
            })
            await sendPushNotification(item.title)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.productContainer}>
                <Image
                    style={styles.checkoutImg}
                    source={{ uri:item.imageUrl }}
                />
                <View>
                    <Text style={styles.itemTxt}>{item.title}</Text>
                    <Text style={styles.itemTxt}>£{item.price.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.totalPriceContainer}>
                <Text style={styles.totalTitle}>Total</Text>
                <View style={styles.itemTxtContainer}>
                    <Text style={styles.totalTxt}>Item price</Text>
                    <Text>£{item.price.toFixed(2)}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => handlePress("Address")}
                    style={styles.addAddressBtnContainer}
                >
                    <Text style={styles.addAddressBtnTxt}>
                        Address
                    </Text>
                    <View style={styles.addAddressIconAndTxt}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Add</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
                    </View>  
                </TouchableOpacity>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTxt}>{address?.addressLineOne}</Text>
                    <Text style={styles.addressTxt}>{address?.addressLineTwo}</Text>
                    <Text style={styles.addressTxt}>{address?.city}</Text>
                    <Text style={styles.addressTxt}>{address?.county}</Text>
                    <Text style={styles.addressTxt}>{address?.postcode}</Text>
                    <Text style={styles.addressTxt}>{address?.phoneNumber}</Text>
                </View>
            </View>
            <View style={styles.paymentContainer}>
                <Text style={styles.paymentTitle}>Payment</Text>
                <TextInput
                    style={styles.paymentLongInput}
                    placeholder="Name on Card"
                />
                <TextInput
                    style={styles.paymentLongInput}
                    placeholder="Card Number"
                />
                <View style={styles.shortInputContainer}>
                    <TextInput
                        style={styles.paymentShortInput}
                        placeholder="Exp"
                    />
                    <TextInput
                        style={styles.paymentShortInput}
                        placeholder="CVV"
                    />
                </View>
            </View>
        </ScrollView>
        <BlackButton text="Pay" func={handlePay}/>
    </SafeAreaView>
  )
}

export default CheckoutScreen