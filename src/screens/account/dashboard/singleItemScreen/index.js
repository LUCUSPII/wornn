import { useContext } from "react"
import { useNavigation } from "@react-navigation/core"
import { SafeAreaView, Text, TouchableOpacity, Image, View, ScrollView } from "react-native"
import BagContext from "../../../../contexts/bagContext"
import UserContext from "../../../../contexts/userContext"
import BlackButton from "../../../../components/blackbutton"
import { AntDesign } from '@expo/vector-icons'; 
import styles from "./style"

const SingleItemScreen = ({route}) => {
    const navigation = useNavigation()
    const itemDetails = route.params.item
    const { bagData, setBagData} = useContext(BagContext)
    const { userData } = useContext(UserContext)

    // adding the item to the bag: checking if the item is already in the bag if not item is added to the bag
    const addToBag = () => {
        const result = bagData.some(item => {
            return item.id === itemDetails.id
        })
        if(result){
            alert('Item is already in your basket')
        } else {
            setBagData(bagData => [...bagData, itemDetails])
            navigation.goBack()
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView  contentContainerStyle={{ alignItems: 'center' }}>
                <Image
                    style={styles.img}
                    source={{uri: itemDetails.imageUrl}}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.titleTxt}>{itemDetails.title}</Text>
                    <Text style={styles.priceTxt}>£{itemDetails.price.toFixed(2)}</Text>
                    <Text style={styles.sizeTxt}>Size: {itemDetails.size}</Text>
                    <Text style={styles.conditionTxt}>Condition: {itemDetails.condition}</Text>
                    <Text style={styles.detailsTxt}>{itemDetails.description}</Text>
                </View>
                {itemDetails.userId !== userData.uid && (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Messages Screen", {
                            userMessageToId: itemDetails.userId,
                            userMessageFromId: userData.uid,
                            itemId: itemDetails.id,
                        })}
                    >
                        <AntDesign name="message1" size={24} color="black" />
                    </TouchableOpacity>
                )}
            </ScrollView>
            {
                itemDetails.userId !== userData.uid && (
                    <BlackButton text="Add to Bag" func={addToBag}/>
                )
            }
        </SafeAreaView>
    )
}

export default SingleItemScreen