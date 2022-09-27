import { useEffect, useState, useContext } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import UserContext from '../../../contexts/userContext'
import { db } from "../../../../firebase/firebase"
import { getDoc, doc, updateDoc } from "firebase/firestore"
import styles from "./style"

const OrderDetailsScreen = ({route}) => {
    const order = route.params.order
    const[ item, setItem ] = useState()
    const { userData } = useContext(UserContext)
    const [ shippingProvider, setShippingProvider ] = useState()
    const [ trackingNumber, setTrackingNumber ] = useState()

    useEffect(() => {
        getItemDetails()
    }, [])

    // getting the order details from the database
    const getItemDetails = async () => {
        try {
            const docRef = doc(db, 'clothes', order.itemId)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()){
                setItem(docSnap.data())
            } else {
                alert("Can't find order")
            }
        } catch(error){
            console.log(error)
        }
    }

    // updates the shipping details for the user
    const updateShippingDetails = async () => {
        try {
            const orderRef = doc(db, "orders", item.orderId)
            await updateDoc(orderRef, {
                shipped: true,
                trackingNumber: trackingNumber,
                shippingProvider: shippingProvider
            })
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.itemContainer}>
            <Image
                source={{uri:item?.imageUrl}}
                style={styles.orderImg}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.orderTitle}>{item?.title}</Text>
            <View style={styles.priceAndSizeContainer}>
                    <Text>Size: {item?.size}</Text>
                    <Text>£{item?.price}</Text>
                </View>
            </View>
        </View>
        <View style={styles.statusContainer}>
            <Text style={styles.statusTitle}>Order Status:</Text>
            { order.shipped === false ? (
                <Text>Awaiting shippment</Text>
            ) : (
                <Text>On the way!</Text>
            )}
        </View>
        <View style={styles.shippingAddressContainer}>
            <Text style={styles.shippingAddressTxt}>{order.buyerName}</Text>
            <Text style={styles.shippingAddressTxt}>{order.address.addressLineOne}</Text>
            <Text style={styles.shippingAddressTxt}>{order.address.addressLineTwo}</Text>
            <Text style={styles.shippingAddressTxt}>{order.address.city}</Text>
            <Text style={styles.shippingAddressTxt}>{order.address.county}</Text>
            <Text style={styles.shippingAddressTxt}>{order.address.postCode}</Text>
        </View>
        {order.shipped === true ? (
            <View style={styles.shippingDetailsContainer}>
                <Text style={styles.shippingDetailsTitle}>Shipping Provider</Text>
                <Text style={styles.shippingDetailsTxt}>{order.shippingProvider}</Text>
                <Text style={styles.shippingDetailsTitle}>Tracking Number</Text>
                <Text style={styles.shippingDetailsTxt}>{order.trackingNumber}</Text>
            </View>
        ) : (
            order.sellerId === userData.uid && (
                <View style={styles.addShippingContainer}>
                    <Text style={styles.addShippingTitle}>Add Shipping Details</Text>
                    <TextInput
                        value={shippingProvider}
                        onChangeText={text => setShippingProvider(text)}
                        placeholder='Shipping Provider'
                        style={styles.addShippingInput}
                    />
                    <TextInput
                        placeholder='Tracking Number'
                        onChangeText={text => setTrackingNumber(text)}
                        value={trackingNumber}
                        style={styles.addShippingInput}
                    />
                    <TouchableOpacity
                        onPress={updateShippingDetails}
                        style={styles.addShippingBtn}
                    >
                        <Text style={styles.addShippingBtnTxt}>Add</Text>
                    </TouchableOpacity>
                </View>
            )
        ) }
    </SafeAreaView>
  )
}

export default OrderDetailsScreen