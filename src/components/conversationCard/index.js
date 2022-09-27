import { View, Text, TouchableOpacity } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import UserContext from "../../contexts/userContext"
import { useNavigation } from '@react-navigation/native'
import { db } from "../../../firebase/firebase"
import { doc, getDoc }  from "firebase/firestore"
import styles from "./style"

const ConversationCard = ({conversation, memberIdArray}) => {
    const navigation = useNavigation()
    const memberId = memberIdArray[0]
    const [ memberDetails, setMemberDetails ] = useState()
    const [ itemDetails, setItemDetails ] = useState()
    const {userData} = useContext(UserContext)


    // conversationcard is rendered in the messages screen

    useEffect(() => {
        const getDetails = async () => {
            try{
                const docRef = doc(db, "users", memberId)
                const itemRef = doc(db, "clothes", conversation.about)
                const docSnap = await getDoc(docRef)
                const itemDocSnap = await getDoc(itemRef)

                if(docSnap.exists()){
                    setMemberDetails(docSnap.data())
                }
                if(itemDocSnap.exists()){
                    setItemDetails(itemDocSnap.data().title)
                }
            } catch(error){
                console.log(error)
            }
        }       
        getDetails()
    }, [])

    // navigates the user to the selected chatscreen, with the correct details
    const navToChat = () => {
        navigation.navigate("Chat Screen", {
            userMessageToId: memberId,
            itemId: conversation.about,
            userMessageFromId: userData.uid,
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.btnContainer}
                onPress={() => {navToChat()}}
            >
                <Text style={styles.nameText}>{memberDetails?.firstname} {memberDetails?.lastname}</Text>
                <Text style={styles.itemText}>{itemDetails}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConversationCard