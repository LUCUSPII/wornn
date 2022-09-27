import { View, Text, TouchableOpacity } from "react-native"
import { useContext } from "react";
import FilterContext from "../../../../contexts/filterContext"
import { MaterialIcons } from '@expo/vector-icons'; 
import RangeSlider from 'react-native-range-slider-expo';

import styles from "./style"

const FiltersScreen = ({navigation}) => {
    const { filterData, setFilterData } = useContext(FilterContext)

    // rendering the filters
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.filterBtnContainer}
                onPress={() => navigation.navigate("ColourFilterScreen")}
            >
                <Text style={styles.filterBtnTxt}>Colour</Text>
                {filterData.colour === undefined ? (
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                ) : (
                    <Text style={styles.touchBtnText}>{filterData.colour}</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.filterBtnContainer}
                onPress={() => navigation.navigate("SizeFilterScreen")}
            >
                <Text style={styles.filterBtnTxt}>Size</Text>
                {filterData.size === undefined ? (
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                ) : (
                    <Text style={styles.touchBtnText}>{filterData.size}</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.filterBtnContainer}
                onPress={() => navigation.navigate("ConditionFilterScreen")}
            >
                <Text style={styles.filterBtnTxt}>Condition</Text>
                {filterData.condition === undefined ? (
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                ) : (
                    <Text style={styles.touchBtnText}>{filterData.condition}</Text>
                )}
            </TouchableOpacity>
            <View style={styles.sliderContainer}>          
                <RangeSlider 
                    min={0} 
                    max={250}
                    fromValueOnChange={value => setFilterData({...filterData, fromValue: value})}
                    toValueOnChange={value => setFilterData({...filterData, toValue: value})}
                />
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTxt}>Min. Price: £{filterData.fromValue}</Text>
                    <Text style={styles.priceTxt}>Max. Price: £{filterData.toValue}</Text>  
                </View>
            </View>
            <View style={styles.filterSetOrClearBtnContainer}>            
                <TouchableOpacity 
                    style={styles.setOrClearFilterBtn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.setOrClearFilterBtnTxt}>
                        Set Filters
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.setOrClearFilterBtn}
                    onPress={() => setFilterData({colour: undefined, size: undefined, condition: undefined})}
                >
                    <Text style={styles.setOrClearFilterBtnTxt}>
                        Clear Filters
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FiltersScreen