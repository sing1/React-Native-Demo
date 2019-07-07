import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// 这里引入
import Login from './pages/Login'

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Login
                    clickCallBack={(data)=>{
                        alert("用户名："+data.user+"，密码：" +data.pass)
                    }}
                    />
            </View>
        );
    }
}


const styles = StyleSheet.create({

    button_parent: {
        width: 300,
        height: 50,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'blue',
        marginTop: 10,
    },
    btn: {
        width: 200,
        height: 30,
        backgroundColor: 'white',
        color: 'white',
        marginTop: 10,
    },
    container: {
        paddingTop: 200,
        flex: 1,

        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});