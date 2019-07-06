import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    placeholder={"请输入用户名"}
                    style={styles.inputText}/>


                <TextInput
                    placeholder="请输入密码"
                    style={styles.inputText}/>

                <View style={styles.button_parent}>
                    <Button
                        style={styles.welcome}
                        title="登录"/>

                </View>
            </View>
        );
    }
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
        height: 50,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'blue',
        marginTop: 10,
    },
    welcome: {
        width: 200,
        height: 30,
        backgroundColor: 'red',
        color: 'red',
        marginTop: 10,
    },
    container: {
        marginTop: 200,
        flex: 1,
        justifyContent: 'flex-start',// 上下
        alignItems: 'center',// 左右居中
        backgroundColor: '#F5FCFF',
    },
});
