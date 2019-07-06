import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class Input extends Component {

    render() {
        return (
            <View >
                <TextInput
                    placeholder={"请输入.."}
                    style={styles.inputText}/>
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
});
