import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './pages/login';
import Main from './pages/main';
import User from './pages/user';
import Cadastro from './pages/cadastro';

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
                <Stack.Screen 
                    name="main"
                    component={Main}
                    options={{title: 'GitHub VIEWER', headerTitleAlign: 'center', headerStyle:{backgroundColor: '#3498DB'}, headerTitleStyle: {fontWeight: 'bold', color: '#fff'}}}
                />
                <Stack.Screen
                    name="user"
                    component={User}
                    options={{title: 'Perfil do Usuário', headerTitleAlign: 'center', headerStyle:{backgroundColor: '#3498DB'}, headerTitleStyle: {fontWeight: 'bold', color: '#fff'}}}
                />
                <Stack.Screen 
                    name="cadastro" 
                    component={Cadastro} 
                    options={{title: 'Pagina de Cadastro', headerTitleAlign: 'center', headerStyle: { backgroundColor: '#3498DB'}, headerTitleStyle: {fontWeight: 'bold', color: '#fff'}}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}