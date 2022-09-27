import { SafeAreaView, ScrollView } from "react-native"
import { useState, useEffect, useContext } from "react"
import UserContext from "../../../../contexts/userContext"
import FilterContext from "../../../../contexts/filterContext"
import { db } from "../../../../../firebase/firebase"
import { getDocs, query, collection, where } from "firebase/firestore"
import styles from "./style"
import ClothesCard from "../../../../components/clothesCard"

const FilteredBySelectedCategoryScreen = ({route}) => {
    const { userData } = useContext(UserContext)
    const { filterData } = useContext(FilterContext)
    const chosenCategory = route.params.categoryFilter 
    const [ clothes, setClothes ] = useState([])

    // using the filterData Context Api, (which can be set from the filtersScreen) to render all clothes
    useEffect(() => {
        getClothes()
        .then(()=>{
            if(filterData.fromValue !== undefined) {
                setClothes(clothes.filter(item => item.price > filterData.fromValue))
            }
            if(filterData.toValue !== undefined ) {
                setClothes(clothes.filter(item => item.price < filterData.toValue))
            }
            if(filterData.colour !== undefined){
                setClothes(clothes.filter(item => item.colour === filterData.colour))
            }
            if(filterData.size !== undefined){
                setClothes(clothes.filter(item => item.size === filterData.size))
            }
            if(filterData.condition !== undefined){
                setClothes(clothes.filter(item => item.condition === filterData.condition))
            }
        })
    }, [filterData])

    // get the clothes by the chosen category from dashboard, (clothes == all clothes as there are no accessorize included in categories)
    const getClothes = async () => {
        try {
            const q = chosenCategory === "Clothes" 
            ? (query(collection(db, "clothes"), where("gender", "==", userData.genderfilter), where("sold", '==', false))) 
            : (query(collection(db, "clothes"), where("category", "==", chosenCategory), where("gender", "==", userData.genderfilter), where("sold", '==', false)))
            
            const querySnapshot = await getDocs(q);

            const clothesList = querySnapshot.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            })

            setClothes(clothesList)
        } catch(error) {
            console.log(error)
        }
    }


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                {clothes.map((item, index) => (
                    <ClothesCard key={index} item={item}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default FilteredBySelectedCategoryScreen