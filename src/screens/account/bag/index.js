import { useContext } from "react"
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native"
import BagContext from "../../../contexts/bagContext"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import styles from "./style"

const BagScreen = ({navigation}) => {
    const { bagData, setBagData } = useContext(BagContext)

    // removes an item from the bag
    const removeItem = (toRemove) => {
        const newBag = bagData.filter(item => toRemove !== item)
        setBagData(newBag)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                {bagData.length === 0 ? (
                    <View style={styles.emptyBagContainer}>
                        <Text style={styles.emptyBagText}>Your Bag is Empty!</Text>
                        <FontAwesome5 name="sad-tear" size={36}/>
                    </View>
                ) : (
                bagData.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <TouchableOpacity 
                            onPress={() => removeItem(item)}
                            style={styles.removeIconContainer}
                        >
                            <Ionicons name="remove-circle" size={26} color="black" />
                        </TouchableOpacity>
                        <Image
                            style={styles.img}
                            source={{uri: item.imageUrl}}
                        />
                    
                        <Text>{item.title}</Text>
                        <Text>£{item.price.toFixed(2)}</Text>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("Checkout", {itemDetails: item})}
                            style={styles.checkoutBtn}
                            >
                            <Text style={styles.checkoutBtnTxt}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                ))
                    
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default BagScreen