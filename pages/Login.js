import React, {Component} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
// 这里引入
import Input from './Input'

export default class Login extends Component {

    render() {
        return (
            <View>

                <Input/>
                <Input/>

                <View style={styles.button_parent}>
                    <Button
                        style={styles.btn}
                        title="登录"/>
                </View>

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
        backgroundColor: '#123123',
        marginTop: 10,
    },
    btn: {
        width: 200,
        height: 30,
        backgroundColor: 'white',
        color: 'white',
        marginTop: 10,
    },
});
