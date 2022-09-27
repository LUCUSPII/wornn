import { SafeAreaView, FlatList } from "react-native"
import { useContext } from "react"
import UserContext from "../../../../contexts/userContext"
import { db } from "../../../../../firebase/firebase"
import { getDocs, where, query, collection, addDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import ConversationCard from "../../../../components/conversationCard"
import styles from "./style"

const MessagesScreen = ({ route, navigation }) => {
    const { userData } = useContext(UserContext)
    const [ conversations, setConversations ] = useState([])
    const itemId = route.params?.itemId
    const currentUser = route.params?.userMessageFromId
    const messageToUser = route.params?.userMessageToId

    // useEffect will call getconversationOfUSer or the getConvoOrAddConv functions

    // more information in handover doc
    // this is because the messages screen is accessible through the envelope sign on the account screen in the header, or the chat icon on the single view of an item
    useEffect(() => {
        if(itemId && currentUser && messageToUser !== undefined){
            getConvOrAddConv()
        } else {
            getConversationsOfUSer()
        }
    },[])

    // 
    const getConvOrAddConv = async () => {
        try {
            const convoRef = collection(db, 'conversations')

            //the query checks if the conversation is about the same item with the same people
            const q = query(convoRef, where("members", "array-contains", currentUser), where( "about", "==", itemId))

            const querySnapshot = await getDocs(q) 

            if(querySnapshot.empty){
                // create a conversation
                await addDoc(collection(db, 'conversations'), {
                    about: itemId,
                    members: [currentUser, messageToUser]
                })
                await navigation.navigate("Chat Screen", {
                    itemId: itemId,
                    userMessageFromId: currentUser,
                    userMessageToId: messageToUser
                })
            } else {
                navigation.navigate("Chat Screen", {
                    itemId: itemId,
                    userMessageFromId: currentUser,
                    userMessageToId: messageToUser
                })
            }

        } catch(error){
            console.log(error)
        }
    }

    const getConversationsOfUSer = async () => {
        try {
            const q = query(collection(db, "conversations"), where("members", "array-contains-any", [`${userData.uid}`]))
            
            const querySnapshot = await getDocs(q)
            
            const convoList = querySnapshot.docs.map(doc => {
                return {...doc.data(), id: doc.id}

            })
            setConversations(convoList)
        } catch(error){
            console.log(error)
        }   
    }

    const renderConversation = (conversation) => {
        return(
            <ConversationCard 
                conversation={conversation} 
                memberIdArray={conversation.members.filter(c => c !== userData.uid)}
            />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={conversations}
                renderItem={({item}) => renderConversation(item)}
            />
        </SafeAreaView>
    )
}

export default MessagesScreen