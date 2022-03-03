import React, { Component } from 'react'; 
import { TextInput, View, Text, ScrollView, Button, StyleSheet } from 'react-native';

class Barang extends Component {

    constructor(props){
        super(props)
        this.state = {
            textBiasa : 'TUGAS2 REACT NATIVE',
            namaBelanja : this.props.namaBelanja,
            namaBarang : '',
            jumlahBarang : ''
        }

    }

    handleInput1 = (events) => {
        this.setState({namaBarang:events})
    }

    handleInput2 = (events) => {
        this.setState({jumlahBarang:events})
    }

    render() {

        return(
            <View>
                <Text>{this.state.textBiasa}</Text>
                <TextInput onChangeText = {this.handleInput1} placeholder="Masukan Nama Barang" value={this.state.namaBarang} />
                <TextInput onChangeText = {this.handleInput2} placeholder="Masukan Jumlah Barang" keyboardType="numeric" value={this.state.jumlahBarang} />
                <Text>{this.state.namaBelanja}</Text>
                <Text>Nama Barang : {this.state.namaBarang}</Text>
                <Text>Jumlah Barang : {this.state.jumlahBarang}</Text>
            </View>
        )
    }
}

class Coba extends Component {

    state = {
        namaDepan : 'Muhammad',
        namaTengah : 'Ashari',
        namaBelakang : 'Abdillah',
        usia : this.props.usia,
        hoby : this.props.hoby
    }

    render(kazuya){

        return(
        <ScrollView>
        <View>
            <Text>Nama Depan : {this.state.namaDepan} </Text>
            <Text>Nama Tengah : {this.state.namaTengah} </Text>
            <Text>Nama Belakang : {this.state.namaBelakang} </Text>
            <Text>UsiaKu : {this.props.usia}</Text>
            <Text>Hobyku : {this.props.hoby} </Text>
        </View>
        </ScrollView>
        )

    }
}

class Login extends Component {

    // constructor(){

        
    // }
    state = {
        userName : '',
        passWord : ''
    }

    userNameTextChange = (inputText) => {

        this.setState({userName:inputText})

    }

    passTextChange = (inputText) => {

        this.setState({passWord:inputText})

    }

    login = () => {
        const userName = this.state.userName
        const passWord = this.state.passWord
        if(userName == 'Abdillah' && passWord == '123')
        {
            alert(
                `Username : ${this.state.userName} \n Password : ${this.state.passWord}`
            )
        } else {

            alert(
                'Username dan password salah'
            )
        }
    }

    render(){
        return(
            
            <View style={styles.container}>
            <Text style={styles.textLogin}>User Login</Text>
            <TextInput 
                style={styles.textInputStyle}
                onChangeText = {this.userNameTextChange}
                placeholder="Masukan Username"
                placeholderTextColor="grey"
            />

            <TextInput 
                style={styles.textInputStyle}
                onChangeText={this.passTextChange}
                placeholder="Masukan Password"
                placeholderTextColor="grey"
                secureTextEntry={true}
            />
            <View style={{margin : 50}}>
            <Button 
                title="Login"
                color="green"
                onPress={this.login}
            />

            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 10,
        justifyContent : 'flex-start',
        alignContent : 'center',
        margin : 10,
    },
    textLogin : {
        textAlign : 'center',
        fontSize : 20,
    },
    textInputStyle : {
        textAlign : 'center',
        marginTop : 5
    }

})


export {Barang, Coba, Login}