import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this._onChangeText = this._onChangeText.bind(this);
    }

    render() {
        return (
            <View >

                <TextInput
                    value={this.props.txt}
                    onChangeText={this._onChangeText}
                    placeholder={this.props.placeholder}
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
