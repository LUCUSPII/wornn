import { useState, useCallback, useLayoutEffect } from "react"
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { auth, db } from "../../../../../firebase/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import styles from "./style";
import { View } from "react-native";

const ChatScreen = ({route}) => {
    const [messages, setMessages] = useState([]);

    const itemId = route.params.itemId
    const currentUserId = route.params.userMessageFromId
    const messageToUserId =  route.params.userMessageToId

    // getMsgs function get all the messages by the user, with the user about the item being sent through the route (itemId, currentUserId, messageToUserId)
    // then it sets the messages to the returned value after some filtering, for more explanation visit the handover doc 
    useLayoutEffect(() => {
        const getMsgs = async () => {
            try {
                const q = query(collection(db, 'chats'), where("about", "==", route.params.itemId), where("members", "array-contains", currentUserId))
                // orderBy('createdAt', 'desc')
                const querySnapshot = await getDocs(q)

                const messageListIncludingUndefinedValues = querySnapshot.docs.map(doc => {
                    if(doc.data().members.includes(messageToUserId)){
                        return {
                            _id: doc.data()._id,
                            createdAt: doc.data().createdAt.toDate(),
                            text: doc.data().text,
                            user: doc.data().user,
                        }
                    }
                })

                const filteredMessageList = messageListIncludingUndefinedValues.filter(item => {
                    return item !== undefined
                })

                const filteredMessageListSortedByDate = filteredMessageList.sort((a,b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })

                setMessages(filteredMessageListSortedByDate)
            } catch(error){
                console.log(error)
            }
        }

        getMsgs()
    }, [messages])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {
        _id,
        createdAt,
        text,
        user
      } = messages[0]

      const convoRef = collection(db, 'conversations')
      //the query checks if the conversation already exists with the current user and about this item
      const q = query(convoRef, where("members", "array-contains", currentUserId), where( "about", "==", itemId))
      const querySnapshot = getDocs(q) 

        if(querySnapshot.empty){
            // create a conversation
            addDoc(collection(db, 'conversations'), {
                about: itemId,
                members: [currentUserId, messageToUserId]
            })
        } 
      addDoc(collection(db, 'chats'), {
        _id,
        createdAt,
        text,
        user,
        about: route.params.itemId,
        members: [ messageToUserId , currentUserId]
      })
    }, [])
  
    // renderbubble is used to make a difference with the colours between the members of the chat(sender, receiver)
    function renderBubble(props) {
        return(
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: 'blue'
                    },
                    left: {
                        backgroundColor: 'lightgrey',
                    }
                }}
            />
        )
    }

    return(
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: auth?.currentUser?.uid,
                    messageTo: route.params.userMessageToId,
                    about: route.params.itemId
                }}
                listViewProps={{
                    style: {
                        backgroundColor: 'white',
                    }
                }}
                renderAvatar={null}
                renderBubble={renderBubble}
                scrollToBottom
            />
        </View>
    )
}

export default ChatScreen