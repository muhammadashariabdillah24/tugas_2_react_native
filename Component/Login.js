import { styles } from "ansi-colors"
import React, { Component } from "react"
import { TextInput, Text, ScrollView, View, Button, StyleSheet } from "react-native"

class Logins extends Component {

    state = {

        userName : '',
        passWord : ''
    }

    usernameTextChange = (Input) => {

        this.setState({userName:Input})
    }

    passwordTextChange = (Input) => {

        this.setState({passWord:Input})
    }

    userLogin = () => {

        const userName = this.state.userName
        const passWord = this.state.passWord
        if(userName !== '' || userName === 'Abdillah')
        {
            if(passWord !== '' || passWord === '123')
            {
                alert(`Username ${this.state.userName} Dan Password ${this.state.passWord}`)
            } else {
                
                alert(`Username Dan Password Salah`)
            }
        } else {

            alert(`Username Dan Password salah`)
        }
    }

    render(){
        
        return(
            <View style={gaya.container}>
                <Text style={gaya.textLogin}>Halaman Login</Text>
                <TextInput
                    style={gaya.styleInput}
                    onChangeText = {gaya.usernameTextChange}
                    placeholder="Masukan Username"
                    placeholderTextColor="grey"
                />

                <TextInput 
                    style={gaya.styleInput}
                    onChangeText = {this.passwordTextChange}
                    placeholder="Masukan Password"
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                />

                <View>
                    <Button 
                        title="Login"
                        color="green"
                        onPress = {this.userLogin}
                    />
                </View>
            </View>
        )
    }
}

const gaya = StyleSheet.create({
    flex : '10',
    justifyContent : 'flex-start'
})



export { Logins }