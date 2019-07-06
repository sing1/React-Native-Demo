import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this._onUserChangeText = this._onUserChangeText.bind(this);
        this._onPassChangeText = this._onPassChangeText.bind(this);
        this.state = {
            user: "",
            pass: "",
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    onChangeText={this._onUserChangeText}
                    placeholder="请输入用户名"
                    style={styles.inputText}/>


                <TextInput
                    onChangeText={this._onPassChangeText}
                    placeholder="请输入密码"
                    style={styles.inputText}/>


                <View style={styles.button_parent}>
                    <Button
                        style={styles.welcome}
                        onPress={() => {
                            this.click()
                        }}
                        title="登录"/>
                </View>
            </View>
        );
    }

    _onUserChangeText(inputUser) {
        //把获取到的内容，设置给user
        this.setState({
            user: inputUser
        });
    }

    _onPassChangeText(inputPassWord) {
        //把获取到的内容，设置给pass
        this.setState({
            pass: inputPassWord
        });
    }

    click() {
        if (this.state.user.length === 0) {
            Alert.alert("账号为空");
        } else if (this.state.pass.length === 0) {
            Alert.alert("密码为空");
        } else {
            Alert.alert("成功");
        }

    };
}


const styles = StyleSheet.create({
    inputText: {
        width: 300,
        borderRadius: 5,
        borderColor: '#123123',
        marginBottom: 10,
        borderWidth: 1,
        height: 50,
        padding: 10,
    },
    button_parent: {
        width: 300,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#123123',
        marginTop: 10,
    },
    welcome: {
        width: 200,
        height: 30,
        backgroundColor: 'white',
        color: 'white',
        marginTop: 10,
    },
    container: {
        paddingTop:200,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
