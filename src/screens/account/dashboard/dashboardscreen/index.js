import { useContext, useEffect } from "react"
import { SafeAreaView, Text, TouchableOpacity, ScrollView, View, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import FilterContext from "../../../../contexts/filterContext"
import clothes from "../../../../../assets/images/Clothes.png"
import tops from "../../../../../assets/images/Tops.png"
import dresses from "../../../../../assets/images/Dresses.png"
import shoes from "../../../../../assets/images/Shoes.png"
import skirts from "../../../../../assets/images/Skirts.png"
import jacketsandcoats from "../../../../../assets/images/Jacketsandcoats.png"
import styles from "./style"


const DashboardScreen = () => {
    const navigation = useNavigation()
    const { setFilterData } = useContext(FilterContext)

    // resets filterData context API to undefined
    useEffect(()=>{
        setFilterData({
            colour: undefined,
            size: undefined,
            condition: undefined
        })
    }, [])

    // sends the chosen category as route parameter to the filtered by category screen
    const filterAndNavigate = (category) => {
        navigation.navigate("Filtered By Category Screen", {
            categoryFilter: category
        })
    }

    // rendering the categories, categories and pictures chosen by the client
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={{alignItems: 'center', paddingTop: 40}} 
            >
                <View style={styles.insideContainer}>
                    <TouchableOpacity
                        onPress={() => filterAndNavigate("Clothes")}
                    >
                        <Image
                            source={clothes}
                            style={styles.categoryImg}
                        />
                        <View style={styles.txtContainer}>
                            <Text style={styles.imgTxt}>
                                CLOTHES
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => filterAndNavigate("Shoes")}
                    >
                        <Image
                            source={shoes}
                            style={styles.categoryImg}
                        />
                        <View style={styles.txtContainer}>
                            <Text style={styles.imgTxt}>
                                SHOES
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => filterAndNavigate("Dresses")}
                    >
                        <Image
                            source={dresses}
                            style={styles.categoryImg}
                        />
                        <View style={styles.txtContainer}>
                            <Text style={styles.imgTxt}>
                                DRESSES
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => filterAndNavigate("Skirts")}
                    >
                        <Image
                            source={skirts}
                            style={styles.categoryImg}
                        />
                        <View style={styles.txtContainer}>
                            <Text style={styles.imgTxt}>
                                SKIRTS
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => filterAndNavigate("Jackets & Coats")}
                    >
                        <Image
                            source={jacketsandcoats}
                            style={styles.categoryImg}
                        />
                        <View style={styles.txtContainer}>
                            <Text style={styles.imgTxt}>
                                JACKETS & COATS
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => filterAndNavigate("Tops")}
                    >
                        <Image
                            source={tops}
                            style={styles.categoryImg}
                        />
                        <View style={styles.txtContainer}>
                            <Text style={styles.imgTxt}>
                                TOPS
                            </Text>
                        </View>
                    
                    </TouchableOpacity>
                </View>
                
                {/* {userData.genderfilter === "Women" ? (
                    categoriesWomen.map((category, index) => (
                        <TouchableOpacity 
                            onPress={() => filterAndNavigate(category)}
                            style={styles.btnContainer}
                            key={index}
                        >
                            <Text style={styles.btnText}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    categoriesMen.map(category => (
                        <TouchableOpacity 
                            onPress={() => filterAndNavigate(category)}
                            style={styles.btnContainer}
                        >
                            <Text style={styles.btnText}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Text>
                        </TouchableOpacity>
                    ))
                )} */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashboardScreen