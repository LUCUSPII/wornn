import { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

const AddressScreen = ({navigation, route}) => {
  const [ address, setAddress ] = useState({
    addressLineOne:'',
    addressLineTwo: '',
    city: '',
    county: '',
    postcode: '',
  })

  // callback function from the checkout screen to add address
  // triggers error message which is disabled in app.js
  const setsAddressAndNav = (address) => {
    route.params.updateData(address)
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={address.addressLineOne}
          onChangeText={text => setAddress({...address, addressLineOne: text})}
          style={styles.input}
          placeholder="Address line 1"
        />
        <TextInput
          value={address.addressLineTwo}
          onChangeText={text => setAddress({...address, addressLineTwo: text})}
          style={styles.input}
          placeholder="Address line 2"
        />
        <TextInput
          value={address.city}
          onChangeText={text => setAddress({...address, city: text})}
          style={styles.input}
          placeholder="City"
        />
        <TextInput
          value={address.county}
          onChangeText={text => setAddress({...address, county: text})}
          style={styles.input}
          placeholder="County"
        />
        <TextInput
          value={address.postcode}
          onChangeText={text => setAddress({...address, postcode: text})}
          style={styles.input}
          placeholder="Postcode"
        />
        <TouchableOpacity
          style={styles.addBtnContainer}
          onPress={() => setsAddressAndNav(address)}
        >
          <Text style={styles.addBtnTxt}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AddressScreen