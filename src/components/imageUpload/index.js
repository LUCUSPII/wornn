import { View, TouchableOpacity, Image, Text} from "react-native"
import styles from "./style"
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = ({image, setImage}) => {
    
    // using imagepicker to upload an image
    // the img ratio is not set
    const addImage = async () => {
        try{
            let _image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 0,
              });
              if (!_image.cancelled) {
                  setImage(_image.uri);
              }
        } catch(err){
            console.log(err)
        }
    };

    return(
        <View style={styles.container}>
            {   
                image ? (
                    <View>
                        <Image source={{uri : image}} style={{width: 200, height:250}}/>
                        <TouchableOpacity onPress={() => addImage()}>
                            <Text>Select</Text>
                        </TouchableOpacity>
                    </View>

                ) : (
                    <TouchableOpacity 
                    style={styles.cameraContainer}
                    onPress={() => addImage()}
                >
                    <Entypo name="circle-with-plus" size={14} color="red" style={styles.plusIcon}/>
                    <Feather name="camera" size={36} color="lightgrey" />     
                </TouchableOpacity> 
                )
            }  
        </View>
    )
}

export default ImageUpload