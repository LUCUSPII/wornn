import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from "react-native"
import { useEffect, useState } from "react"
import { db } from "../../../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import styles from "./style"

const SearchResults = ({route, navigation}) => {
    const searchValue = route.params.searchValue
    const [ clothes, setClothes ] = useState([])

    // searching for clothes looks through the title of the clothes, lowercase/uppercase included
    useEffect(() => {
        getClothes()
    }, [searchValue])

    const getClothes = async () => {
        try {
            const q = query(collection(db, "clothes"), where("sold", "==", false))
            const querySnapshot = await getDocs(q)
            const listOfClotheswithoutID = querySnapshot.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            })
            // id needs for the messages' about key (itemId)
            listOfClotheswithoutID.forEach(item => {
                if(item.title.toLowerCase().includes(searchValue)){
                    setClothes(previousArray => [...previousArray, item])
                }
            })
        } catch(error){
            console.log(error)
        }
    }

    const openItemForView = (clickedOnItem) => {
        navigation.navigate("Single Item", {item: clickedOnItem})
    }

    const renderClothes = (item) => {
        return (
            <TouchableOpacity 
                onPress={() => openItemForView(item)} 
                style={styles.itemContainer}
            >
                <View>
                    <Image
                        style={styles.img}
                        source={{ uri: item.imageUrl}}
                    />
                </View>
                <View style={styles.itemDetailsContainer}>                        
                    <Text style={styles.itemPriceText}>£{item.price}</Text>
                    <Text style={styles.itemTitleText}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            {
                clothes.length === 0 ? (
                    <View style={styles.noMatchContainer}>
                        <Text style={styles.noMatchText}>
                            Unfortunately No Matches!
                        </Text>
                    </View>
                ) : (
                    <View style={styles.innerContainer}>
                            <FlatList
                                data={clothes}
                                renderItem={({item}) => renderClothes(item)}
                            />
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default SearchResults