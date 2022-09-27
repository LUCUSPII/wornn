import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from "./style"

const ClothesCard = ({item}) => {

  const navigation = useNavigation()

  // clothescard component is rendered in filtereBySelectedCategoryScreen
  const openItemForView = (clickedOnItem) => {
    navigation.navigate("Single Item", {
      item: clickedOnItem,
    })
  } 

  return (
      <TouchableOpacity onPress={() => openItemForView(item)} style={styles.itemContainer}>
        <View>
          <Image
             style={styles.img}
             source={{uri: item.imageUrl}}
             />
         </View>
         <View style={styles.itemDetailsContainer}>                        
             <Text style={styles.itemPriceText}>£{item.price.toFixed(2)}</Text>
             <Text style={styles.itemTitleText}>{item.title}</Text>
         </View>
     </TouchableOpacity>
  )
}

export default ClothesCard
