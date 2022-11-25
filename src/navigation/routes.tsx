import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";
import { useRef } from "react";
import Auth from './Stacks/Auth';


// import Constants from "expo-constants";


//Types
const Stack = createNativeStackNavigator();



export default function Routes() {
    const navigationRef = useRef();
    const routeNameRef = useRef();

  
    return (

      <NavigationContainer
        ref={navigationRef}
        
      >
          <Stack.Navigator
            initialRouteName={"Auth"}
            screenOptions={({ navigation }) => ({
              gestureEnabled: true,
              gestureDirection: "horizontal",
              headerTitleAlign: "center"
              // headerLeft: () => <BarIconBack navigation={navigation} />,
            })}
          >
            {/* {(isLoggedIn || key !== null) && (
              <Stack.Screen
                name="App"
                component={AppStackScreen}
                options={{ headerShown: false }}
              />
            )} */}
            {/* {!(isLoggedIn || key !== null) && ( */}
              <Stack.Screen
                name="Auth"
                component={Auth}
                options={{ headerShown: false }}
              />
            {/* )} */}
          </Stack.Navigator>
      </NavigationContainer>
    );

  }