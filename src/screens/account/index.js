import { useContext } from "react"
import BagContext from "../../contexts/bagContext"
import PromotionsScreen from "./promotions"
import ProfileScreen from "./profile"
import DashboardScreen from "./dashboard/dashboardscreen"
import BagScreen from "./bag"
import AddNewItemScreen from "./newitem/addNewItemScreen"
import { FontAwesome } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()

const AccountScreen = () => {
    const { bagData } = useContext(BagContext)

    // tabnavigator determines the colour of the icons
    return(
        <Tab.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Promotions") {
                        iconName = "home"
                    } else if (route.name === "Dashboard") {
                        iconName = "list"
                    } else if (route.name === "Add New Item") {
                        iconName = "plus"
                    } else if (route.name === "Bag") {
                        iconName = "shopping-cart"
                    } else if (route.name === "Profile") {
                        iconName = "user"
                  }
                    return <FontAwesome name={iconName} size={size} color={color}/>
                }, 
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}>
            <Tab.Screen 
                name="Promotions" 
                component={PromotionsScreen} 
                options={{
                    headerShown: false,
                    title: ''
                }}
            />
            <Tab.Screen 
                name="Dashboard" 
                component={DashboardScreen} 
                options={{
                    headerShown: false,
                    title: ''
                }}
            />
            <Tab.Screen 
                name="Add New Item" 
                component={AddNewItemScreen} 
                options={{
                    headerTitle: "Upload Item", 
                    headerShadowVisible: false,
                    title: ''
                }} 
            />
            <Tab.Screen 
                name="Bag" 
                component={BagScreen} 
                options={{
                    headerTitle: "My Bag",
                    headerShadowVisible: false,
                    tabBarBadge: bagData.length ? bagData.length : null,
                    title: ''
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{ 
                    headerShown: false,
                    title: ''
                }}
            />
        </Tab.Navigator>
    )
}

export default AccountScreen