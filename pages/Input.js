import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class Input extends Component {

    constructor(props) {
        super(props);
        // bind()方法会创建一个新函数，当这个新函数被调用时，它的this值是传
        // 递给bind()的第一个参数, 它的参数是bind()的其他参数和其原本的参数
        this._onChangeText = this._onChangeText.bind(this);
    }

    render() {
        return (
            <View >

                <TextInput
                    onChangeText={this._onChangeText}
                    placeholder={this.props.textHint}
                    style={styles.inputText}/>
            </View>
        );
    }

    _onChangeText(input) {
        this.props.textChangeCallBack({"text":input})
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
});
