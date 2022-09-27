import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dress1 from "../../../../assets/images/mywardrobeImgs/dress1.png"
import dress2 from "../../../../assets/images/mywardrobeImgs/dress2.png"
import dress3 from "../../../../assets/images/mywardrobeImgs/dress3.png"
import dress4 from "../../../../assets/images/mywardrobeImgs/dress4.png"
import dress5 from "../../../../assets/images/mywardrobeImgs/dress5.png"
import styles from './style'



const MyWardRobeScreen = () => {

    const navigation = useNavigation()
    // uses hard coded dummy data

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.dressCardContainer}> 
                <Image
                    source={dress1}
                    style={styles.wardrobeDressImg}
                />
                <View>
                    <Text style={styles.title}>ASOS - <Text style={styles.titleInner}>The LifeStyle Navy Blue</Text></Text>
                    <Text style={styles.price}>£55.00</Text>
                    <Text style={styles.detail}>Colour: <Text style={styles.detailInner}>Blue</Text></Text>
                    <Text style={styles.detail}>Size: <Text style={styles.detailInner}>W30</Text></Text>
                    <Text style={styles.detail}>Qty: <Text style={styles.detailInner}>1</Text></Text>
                </View>
                <TouchableOpacity
                        style={styles.listBtn}    
                        onPress={() => navigation.navigate("RecycleScreen")}
                    >
                        <Text style={styles.listBtnTxt}>List</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dressCardContainer}> 
                <Image
                    source={dress2}
                    style={styles.wardrobeDressImg}
                />
                <View>
                    <Text style={styles.title}>Boohoo - <Text style={styles.titleInner}>Ultralyte Woman Dress</Text></Text>
                    <Text style={styles.price}>£55.00</Text>
                    <Text style={styles.detail}>Colour: <Text style={styles.detailInner}>Yellow</Text></Text>
                    <Text style={styles.detail}>Size: <Text style={styles.detailInner}>W30</Text></Text>
                    <Text style={styles.detail}>Qty: <Text style={styles.detailInner}>1</Text></Text>
                </View>
                <TouchableOpacity
                        style={styles.listBtn}
                        onPress={() => navigation.navigate("RecycleScreen")}    
                    >
                        <Text style={styles.listBtnTxt}>List</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dressCardContainer}> 
                <Image
                    source={dress3}
                    style={styles.wardrobeDressImg}
                />
                <View>
                    <Text style={styles.title}>H&M - <Text style={styles.titleInner}>Woman Maroon Cotton</Text></Text>
                    <Text style={styles.price}>£55.00</Text>
                    <Text style={styles.detail}>Colour: <Text style={styles.detailInner}>Maroon</Text></Text>
                    <Text style={styles.detail}>Size: <Text style={styles.detailInner}>W30</Text></Text>
                    <Text style={styles.detail}>Qty: <Text style={styles.detailInner}>1</Text></Text>
                </View>
                <TouchableOpacity
                        style={styles.listBtn}  
                        onPress={() => navigation.navigate("RecycleScreen")}  
                    >
                        <Text style={styles.listBtnTxt}>List</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dressCardContainer}> 
                <Image
                    source={dress4}
                    style={styles.wardrobeDressImg}
                />
                <View>
                    <Text style={styles.title}>River Island - <Text style={styles.titleInner}>Pink Solid Stylish</Text></Text>
                    <Text style={styles.price}>£55.00</Text>
                    <Text style={styles.detail}>Colour: <Text style={styles.detailInner}>Blue</Text></Text>
                    <Text style={styles.detail}>Size: <Text style={styles.detailInner}>W30</Text></Text>
                    <Text style={styles.detail}>Qty: <Text style={styles.detailInner}>1</Text></Text>
                </View>
                <TouchableOpacity
                        style={styles.listBtn} 
                        onPress={() => navigation.navigate("RecycleScreen")}   
                    >
                        <Text style={styles.listBtnTxt}>List</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dressCardContainer}> 
                <Image
                    source={dress5}
                    style={styles.wardrobeDressImg}
                />
                <View>
                    <Text style={styles.title}>Nasty Gal - <Text style={styles.titleInner}>Sequined Knot Dress</Text></Text>
                    <Text style={styles.price}>£55.00</Text>
                    <Text style={styles.detail}>Colour: <Text style={styles.detailInner}>Blue</Text></Text>
                    <Text style={styles.detail}>Size: <Text style={styles.detailInner}>W30</Text></Text>
                    <Text style={styles.detail}>Qty: <Text style={styles.detailInner}>1</Text></Text>
                </View>
                <TouchableOpacity
                        style={styles.listBtn}  
                        onPress={() => navigation.navigate("RecycleScreen")}  
                    >
                        <Text style={styles.listBtnTxt}>List</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default MyWardRobeScreen