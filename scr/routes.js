import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Main from './pages/main';
import Login from './pages/login';
// import User from './pages/user';

const Stack = createStackNavigator();

export default function Routes()
{
    //Determina as rotas pra eu clicar
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="login" 
                    component={Login} 
                    options={{title: 'LOGIN', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#3498DB'}, headerTitleStyle: {fontWeight: 'bold', color: '#fff'}}}
                    
                />
                {/* <Stack.Screen 
                    name="Main"
                    component={Main}
                    options={{title: 'GitHub VIEWER', headerTitleAlign: 'center', headerStyle:{backgroundColor: '#3498DB'}, headerTitleStyle: {fontWeight: 'bold', color: '#fff'}}}
                /> */}
                {/* <Stack.Screen
                    name="User"
                    component={User}
                    options={{title: 'Perfil do Usuário', headerTitleAlign: 'center', headerStyle:{backgroundColor: '#3498DB'}, headerTitleStyle: {fontWeight: 'bold', color: '#fff'}}}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}