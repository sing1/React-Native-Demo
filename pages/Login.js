import React, {Component} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
// 这里引入
import Input from './Input'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: "",
            pass: "",
        }
    }

    render() {
        return (
            <View>

                <Input
                    textHint={"请输入用户名"}
                    textChangeCallBack={(data) => {
                        this.setState({
                            user: data.text
                        })
                    }}/>

                <Input
                    textHint={"请输入密码"}
                    textChangeCallBack={(data) => {
                        this.setState({
                            pass: data.text
                        })
                    }}/>

                <View style={styles.button_parent}>
                    <Button
                        style={styles.btn}
                        onPress={() => {
                            this.click()
                        }}
                        title="登录"/>
                </View>

            </View>
        );
    }

    click() {
        if (this.state.user.length === 0) {
            Alert.alert("账号为空");
        } else if (this.state.pass.length === 0) {
            Alert.alert("密码为空");
        } else {
            this.props.clickCallBack({"user":this.state.user,"pass":this.state.pass})
            // Alert.alert({"user":this.state.user,"pass":this.state.pass});
        }
    };
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
