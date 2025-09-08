import React, {useState} from "react";
import {StyleSheet, View, Text, TextInput, Alert, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () =>  {
        if(email === '' && password === ''){
            navigation.navigate('main');
        }else{
            Alert.alert('Email ou Senha incorretos')
        }
    };
    
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
       
            <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%'
    },
    button:{
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default Login;