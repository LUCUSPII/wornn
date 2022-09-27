import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import logoplaceholder from "../../../../assets/images/iconplaceholder.png"
import styles from './style'
import { ScrollView } from 'react-native-gesture-handler'

const ImportPurchaseScreen = () => {
    const navigation = useNavigation()
    const [ shop, setShop ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ show, setShow ] = useState(false)

    const shops = ["ASOS", "Boohoo", "H&M", "Misguided", "Next", "River Island", "PLT", "Miss Selfridges", "Nasty Gal", "Zalando"]

    const handleShopChoice = () => {
        setShop(shop)
        setShow(true)
    }

    // using hard coded data
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            {shops.map((shop, index) => (
                <TouchableOpacity 
                    style={styles.shopBtn}
                    onPress={() => handleShopChoice()}
                    key={index}
                >
                    <Image
                        style={styles.logo}
                        source={logoplaceholder}
                    />
                    <Text style={styles.shopBtnTxt}>{shop}</Text>
                </TouchableOpacity>
            ))}
            {show && (
                <View style={styles.userDataPopUp}>
                    <View style={styles.userDataPopUpInnerContainer}>
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
                        <TouchableOpacity
                            style={styles.uploadBtn}  
                            onPress={() => navigation.navigate("My Wardrobe")}
                        >   
                            <Text style={styles.uploadBtnText}>Upload Products</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            )}
        </ScrollView>

    </SafeAreaView>
  )
}

export default ImportPurchaseScreen