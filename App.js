
import { useState } from "react"
import UserContext from "./src/contexts/userContext"
import BagContext from "./src/contexts/bagContext"
import FilterContext from "./src/contexts/filterContext"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// import PromotionsScreen from "./src/screens/promotions";
import LaunchScreen from "./src/screens/launch"
import GenderchoiceScreen from "./src/screens/genderchoice";
import AccountScreen from "./src/screens/account";
// import SignOut from "./src/components/auth/signout";
// import DropDownMenu from "./src/components/dropdownmenu";
// import ProfileScreen from "./src/screens/profile";
import FilteredBySelectedCategoryScreen from "./src/screens/account/dashboard/filteredBySelectedCategoryScreen";
import SingleItemScreen from "./src/screens/account/dashboard/singleItemScreen";
import Header from "./src/components/header";
import CategorySelect from "./src/screens/account/newitem/categorySelect";
import ConditionSelect from "./src/screens/account/newitem/conditionSelect";
import GenderSelect from "./src/screens/account/newitem/genderSelect"
import MessagesScreen from "./src/screens/account/messaging/messagesScreen";
import ChatScreen from "./src/screens/account/messaging/chatScreen"
import SizeSelect from "./src/screens/account/newitem/sizeSelect";
import ColourSelect from "./src/screens/account/newitem/colourSelect";
import FiltersScreen from "./src/screens/account/filters/filtersScreen";
import ColourFilterScreen from "./src/screens/account/filters/colourFilter";
import SizeFilterScreen from "./src/screens/account/filters/sizeFilter";
import ConditionFilterScreen from "./src/screens/account/filters/conditionFilter";
import FilterIcon from "./src/components/filterIcon";
import SearchResults from "./src/screens/account/searchresults";
import NotificationsScreen from "./src/screens/account/notifications"
import CheckoutScreen from "./src/screens/account/checkout/checkoutScreen"
import AddressScreen from "./src/screens/account/checkout/address"
import MyOrdersScreen from "./src/screens/account/myorders"
import OrderDetailsScreen from "./src/screens/account/orderDetailsScreen"
import RecycleScreen from "./src/screens/account/recycle"

import * as Notifications from 'expo-notifications';
import ImportPurchaseScreen from "./src/screens/account/importpurchase"
import MyWardRobeScreen from "./src/screens/account/mywardrobe"

// to ignore error message when user adds address or at adding new item selects category, size, colour, condition, gender
import { LogBox } from 'react-native';
LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {

  const [ userData, setUserData ] = useState({
    user: undefined,
    uid: undefined,
    filter: undefined
  })
  const [ bagData, setBagData ] = useState([])
  const [ filterData, setFilterData ] = useState({
    size: undefined,
    condition: undefined,
    colour: undefined,
    fromValue: 0,
    toValue: 0
  })

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BagContext.Provider value={{bagData, setBagData}}>
        <FilterContext.Provider value={{filterData, setFilterData}}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Launch" 
                component={LaunchScreen} 
                options={{headerShown: false}} 
              />
              <Stack.Screen 
                name="Gender Choice" 
                component={GenderchoiceScreen} 
                options={{headerShown: false}} 
              />
              <Stack.Screen 
                  name="Account" 
                  component={AccountScreen}
                  options= {{ 
                    title: "",
                    headerRight: () => <Header/>
                  }}
              />
              <Stack.Screen 
                name="Messages Screen" 
                component={MessagesScreen}
              />
              <Stack.Screen 
                name="Notifications" 
                component={NotificationsScreen}
              />
              <Stack.Screen 
                name="Chat Screen" 
                component={ChatScreen}
              />
              <Stack.Screen 
                name="Filtered By Category Screen" 
                component={FilteredBySelectedCategoryScreen}
                options={{
                  title: "",
                  headerRight: () => <FilterIcon/>
                }}  
              />
              <Stack.Screen 
                name="Search Results" 
                component={SearchResults}
                options={{
                  title: "",
                }}  
              />
              <Stack.Screen 
                name="Single Item" 
                component={SingleItemScreen} 
                options={{
                  title: "",
                }}  
              />
              <Stack.Screen 
                name="Category" 
                component={CategorySelect} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="Condition" 
                component={ConditionSelect} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="Gender" 
                component={GenderSelect} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="Size" 
                component={SizeSelect} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="Colour" 
                component={ColourSelect} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="Filters" 
                component={FiltersScreen}
              />
              <Stack.Screen 
                name="ColourFilterScreen" 
                component={ColourFilterScreen} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="ConditionFilterScreen" 
                component={ConditionFilterScreen} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="SizeFilterScreen" 
                component={SizeFilterScreen} 
                options={{
                  title: ""
                }} 
              />
              <Stack.Screen 
                name="Checkout" 
                component={CheckoutScreen} 
              />
              <Stack.Screen 
                name="Address" 
                component={AddressScreen} 
              />
              <Stack.Screen 
                name="My Orders Screen" 
                component={MyOrdersScreen} 
                options={{
                  title: "My Orders"
                }} 
              />
              <Stack.Screen 
                name="Order Details" 
                component={OrderDetailsScreen} 
              />
              <Stack.Screen 
                name="Import Purchase Screen" 
                component={ImportPurchaseScreen} 
                options={{
                  title: "Import Your Purchase"
                }} 
              />
              <Stack.Screen 
                name="My Wardrobe" 
                component={MyWardRobeScreen} 
              />
              <Stack.Screen 
                name="RecycleScreen" 
                component={RecycleScreen} 
                options={{
                  title: "Recycle Now"
                }}  
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FilterContext.Provider>
      </BagContext.Provider>
    </UserContext.Provider>
  );
}


