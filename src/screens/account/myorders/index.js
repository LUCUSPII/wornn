import {View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useState } from "react"
import BoughtOrSoldOrderSelector from '../../../components/boughtOrSoldOrderSelector'
import styles from "./style"

const MyOrdersScreen = () => {
  const [ show, setShow ] = useState("bought")

  // using boughtorsold component to render the sold or bought items

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnsOutsideContainer}>
        <TouchableOpacity
          onPress={() => setShow("sold")}
          style={show === "sold" ? styles.navBtnSelected : styles.navBtn}
        >
          <Text style={styles.navBtnText}>SALES</Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>

        <TouchableOpacity
          onPress={() => setShow("bought")}
          style={show === "bought" ? styles.navBtnSelected : styles.navBtn}
        >
          <Text style={styles.navBtnText}>ORDERS</Text>
        </TouchableOpacity>
      </View>

        <View>
          {show === "sold" && <BoughtOrSoldOrderSelector filter={show}/>}
        </View>
    </SafeAreaView>
  )
}

export default MyOrdersScreen