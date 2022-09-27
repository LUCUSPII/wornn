import { ScrollView, SafeAreaView, Text, View, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/core"
import { useState, useContext } from "react"
import UserContext from "../../../../contexts/userContext"
import { db, storage } from "../../../../../firebase/firebase"
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { MaterialIcons } from '@expo/vector-icons'; 
import BlackButton from "../../../../components/blackbutton"
import ImageUpload from "../../../../components/imageUpload"
import styles from "./style"

const AddNewItemScreen = () => {
    const navigation = useNavigation()
    const { userData } = useContext(UserContext)
    const [ image, setImage ] = useState()
    const [ title, setTitle ] = useState()
    const [ description, setDescription ] = useState()
    const [ condition, setCondition ] = useState()
    const [ category, setCategory ] = useState()
    const [ gender, setGender ] = useState()
    const [ size, setSize ] = useState()
    const [ colour, setColour ] = useState()
    const [ price, setPrice ] = useState()
    const [ brand, setBrand ] = useState()
    const [ location, setLocation ] = useState()

    // for logic please see handover documentation

    const updateCategoryData = (data) => {
        setCategory(data)
    } 
    const updateConditionData = (data) => {
        setCondition(data)
    } 
    const updateGenderData = (data) => {
        setGender(data)
    }
    const updateSizeData = (data) => {
        setSize(data)
    }
    const updateColourData = (data) => {
        setColour(data)
    }

    const handlePress = (pageName) => {
        if(pageName === "Category"){
            navigation.navigate(pageName, {
                pageName: pageName,
                updateData: updateCategoryData
            })
        } else if (pageName === "Condition") {
            navigation.navigate(pageName, {
                pageName: pageName,
                updateData: updateConditionData
            })
        } else if (pageName === "Gender") {
            navigation.navigate(pageName, {
                pageName: pageName,
                updateData: updateGenderData
            })
        } else if (pageName === "Size") {
            navigation.navigate(pageName, {
                pageName: pageName,
                updateData: updateSizeData
            })
        } else if (pageName === "Colour") {
            navigation.navigate(pageName, {
                pageName: pageName,
                updateData: updateColourData
            })
        }
    }

    // first the function checks if each field are filled and if image is chosen, then uploads the image to the storage and the item to the database, the the function updated the item's details in the database with the image url from the storage

    // the upload progress is commmented out at the moment, could be added to show user the % of the upload

    // select button is not designed
    const uploadItem = async () => {
        if(!title || !description || !condition || !category || !gender || !size || !colour || !price || !brand || !location){
            alert("Please fill in missing fields!")
        } else if(!image) {
            alert("Please upload an image!")
        } else {
            try {
                const docRef = await addDoc(collection(db, "clothes"), {
                    title: title,
                    description: description,
                    condition: condition,
                    category: category,
                    gender: gender,
                    size: size,
                    colour: colour,
                    price: parseInt(price),
                    brand: brand,
                    location: location,
                    userId: userData.uid,
                    sold: false
                })
    
                const blob = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = () => {
                        resolve(xhr.response)
                    }
                    xhr.onerror = () => {
                        reject(new TypeError('Network request failed'))
                    }
                    xhr.responseType = 'blob'
                    xhr.open('GET', image, true)
                    xhr.send(null)
                })
                const storageRef = ref(storage, `/${userData.uid}/${docRef.id}/firstPicture`);
                const uploadTask = uploadBytesResumable(storageRef, blob);
                uploadTask.on(
                    "state_changed", 
                    (snapshot) => {
                        // const prog = Math.round(
                        //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        // );
                    // setUploadProgress(prog)
                }, 
                (error) => console.log(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        const itemRef = doc(db, 'clothes', docRef.id)
                        updateDoc(itemRef, {
                            imageUrl: url,
                        })
                    })
                    .then(() => {
                        alert("Item uploaded")
                    })
                    .catch(error => console.log(error))
                })
            } catch(error){
                console.log(error)
            }       
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageUpload image={image} setImage={setImage}/>
                <View style={styles.innerContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={title}
                            placeholder="Title"
                            placeholderTextColor={'grey'}
                            onChangeText={text => setTitle(text)}
                            style={styles.titleAndPriceInputField}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Description"
                            multiline = {true}
                            numberOfLines = {8}
                            placeholderTextColor={'grey'}
                            value={description}
                            onChangeText={text => setDescription(text)}
                            style={styles.descriptionInputField}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity 
                            onPress={() => handlePress("Category")} 
                            style={styles.touchBtn}
                        >
                            
                            <Text style={styles.touchBtnText}>Category</Text>
                            {category === undefined ? (
                                <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
                            ) : (
                                <Text style={styles.touchBtnText}>{category}</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            onPress={() => handlePress("Condition")} 
                            style={styles.touchBtn}
                        >
                            <Text style={styles.touchBtnText}>Condition</Text>
                            {condition === undefined ? (
                                <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
                            ) : (
                                <Text style={styles.touchBtnText}>{condition}</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            onPress={() => handlePress("Size")} 
                            style={styles.touchBtn}
                        >
                            <Text style={styles.touchBtnText}>Size</Text>
                            {size === undefined ? (
                                <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
                            ) : (
                                <Text style={styles.touchBtnText}>{size}</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            onPress={() => handlePress("Colour")} 
                            style={styles.touchBtn}
                        >
                            <Text style={styles.touchBtnText}>Colour</Text>
                            {colour === undefined ? (
                                <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
                            ) : (
                                <Text style={styles.touchBtnText}>{colour}</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            onPress={() => handlePress("Gender")} 
                            style={styles.touchBtn}
                        >
                            <Text style={styles.touchBtnText}>Gender</Text>
                            {gender === undefined ? (
                                <MaterialIcons name="keyboard-arrow-right" size={24} color="grey" />
                            ) : (
                                <Text style={styles.touchBtnText}>{gender}</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Price - Include Shipping"
                            placeholderTextColor={"grey"}
                            value={price}
                            onChangeText={text => setPrice(text)}
                            style={styles.titleAndPriceInputField}
                            
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Brand"
                            placeholderTextColor={"grey"}
                            value={brand}
                            onChangeText={text => setBrand(text)}
                            style={styles.titleAndPriceInputField}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Location"
                            placeholderTextColor={"grey"}
                            value={location}
                            onChangeText={text => setLocation(text)}
                            style={styles.titleAndPriceInputField}
                        />
                    </View>
                </View>
            </ScrollView>
            <BlackButton text="Add Item" func={uploadItem}/>
        </SafeAreaView>
    )
}

export default AddNewItemScreen