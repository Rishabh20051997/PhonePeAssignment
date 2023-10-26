import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/home-screen/home-screen';
import DetailScreen from '../screen/detail-screen/detail-screen';

const Stack = createNativeStackNavigator();



export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerShown:false
                }}/>
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}