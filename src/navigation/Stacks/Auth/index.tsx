import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../../../screens/Welcome';

// import { Container } from './styles';

const Stack = createNativeStackNavigator();

const Auth: React.FC = () => {
  return (
    <Stack.Navigator
        screenOptions={({ navigation }) => ({
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
        //   headerLeft: () => <BarIconBack navigation={navigation} />,
        })}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}

export default Auth;