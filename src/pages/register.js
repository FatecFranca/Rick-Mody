import { useNavigation } from '@react-navigation/native';
import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    const navigation = useNavigation();

    const resgisterNewUser = () => {
        navigation.navigate('login')
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={cpf}
                onChangeText={setCPF}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Curso"
                value={course}
                onChangeText={setCourse}
            />
            <TouchableOpacity style={styles.button} onPress={resgisterNewUser}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button:{
        backgroundColor: '#3498db',
        borderRadius: 4,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default Register;