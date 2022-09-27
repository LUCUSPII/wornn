import { useState, useContext, useEffect} from 'react'
import { FlatList } from 'react-native'
import UserContext from '../../contexts/userContext'
import { db } from "../../../firebase/firebase"
import { getDocs, query, where, collection } from "firebase/firestore"
import OrderCard from '../orderCard'

const BoughtOrSoldOrderSelector = ({filter}) => {
    const { userData } = useContext(UserContext)
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        getOrders()
    }, [filter])

    // gets the orders of the user, 
    // destinction between bought or sold orders by the user
    const getOrders = async () => {
        let q;
        try {
            if(filter === "bought"){
                q = query(collection(db, 'orders'), where("buyerId", "==", userData.uid))
            } else {
                q = query(collection(db, 'orders'), where("sellerId", "==", userData.uid))
            }
            
            const querySnapshot = await getDocs(q)
            const orderList = querySnapshot.docs.map(doc => {
                return doc.data()
            })
            setOrders(orderList)
        } catch(error) {
            console.log(error)
        }
    }

    const renderOrders = (order) => {
        return(
            <OrderCard order={order}/>
        )
    }

  return (
    <>
        <FlatList
            data={orders}
            renderItem={({item}) => renderOrders(item)}
        />
    </>
  )
}

export default BoughtOrSoldOrderSelector