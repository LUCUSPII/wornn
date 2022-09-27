import { Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { db } from "../../../firebase/firebase"
import { getDoc, doc } from "firebase/firestore"
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from './style'

const OrderCard = ({order}) => {
    const navigation = useNavigation()
    const [ itemDetails, setItemDetails ] = useState()

    useEffect(() => {
        getItemDetails()
    }, [])
    
    const getItemDetails = async () => {
        try {
            const docRef = doc(db, "clothes", order.itemId)
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){                
                setItemDetails(docSnap.data())
            }
        } catch(error){
            console.log(error)
        }
    }

    // component used in boughtOrSoldORderSelector component, to render a single item

  return (
    <ScrollView>
        <TouchableOpacity 
            onPress={() => navigation.navigate("Order Details", {
                order: order,
            })}
            style={styles.orderCardBtnContainer}
        >
            <Image
                style={styles.orderCardImg}
                source={{uri : itemDetails?.imageUrl}}
            />
            <Text style={styles.orderCardTitleTxt}>{itemDetails?.title}</Text>
            <MaterialIcons style={styles.orderCardArrowIcon} name="keyboard-arrow-right" size={26} color="grey" />
        </TouchableOpacity>
    </ScrollView>
  )
}

export default OrderCard