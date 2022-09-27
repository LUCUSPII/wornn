import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import dress1 from "../../../../assets/images/mywardrobeImgs/dress1.png"
import { AntDesign } from '@expo/vector-icons'; 
import styles from './style'

const RecycleScreen = () => {
  const [ current, setCurrent ] = useState()
  const [ price, setPrice ] = useState()
  const [ delivery, setDelivery ] = useState()

  // hard coded page for showing purposes
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.topTxt}>Relist your item by choosing the condition when listing the product</Text>
        <View>
          <Text style={styles.recTitle}>Item Condition:</Text>
            <RadioButtonGroup
              containerStyle={{ marginBottom: 10, marginLeft: 10 }}
              selected={current}
              onSelected={(value) => setCurrent(value)}
              radioBackground="black"
            >
              <RadioButtonItem value="never" label={
                <View style={styles.radioBtnTxtContainer}>
                  <Text>Never Worn</Text>
                </View>
              }/>
              <RadioButtonItem value="hardly" label={
                <View style={styles.radioBtnTxtContainer}>
                  <Text>Hardly Worn 2-3 times</Text>
                </View>
              }/>
              <RadioButtonItem value="occasionally" label={
                <View style={styles.radioBtnTxtContainer}>
                  <Text>Occasionally Worn 4-6 times</Text>
                </View>
              }/>
              <RadioButtonItem value="more" label={
                <View style={styles.radioBtnTxtContainer}>
                  <Text>Worn 8+ times. Add an image</Text>
                </View>
              }/>
              <RadioButtonItem value="more" label={
                <View style={styles.radioBtnTxtContainer}>
                  <Text>Recycle with Wornn</Text>
                </View>
              }/>
            </RadioButtonGroup>
        </View>
        <View>
          <Text style={styles.recTitle}>Price: </Text>
          <TextInput
            value={price}
            onChangeText={text => setPrice(text)}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.recTitle}>Delivery: </Text>
          <TextInput
            value={delivery}
            onChangeText={text => setDelivery(text)}
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.recTitle}>Add an image:</Text>
          <View style={styles.imageUploadContainer}>
            <Image
              source={dress1}
              style={styles.recyclePlaceHolderImg}
            />
            <View style={styles.imageUploadPlaceHolder}>
              <AntDesign name="plus" size={40} color="black" />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.recTitle}>Description: </Text>
          <TextInput
            style={styles.textAreaDesc}
          />
        </View>
        <TouchableOpacity
          style={styles.submitBtnContainer}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RecycleScreen