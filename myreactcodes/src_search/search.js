/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


const deneme = () => {
    return (
        <SafeAreaView>
            <View>
                <TextInput style={styles.container} />
                <TouchableOpacity onPress={() =>
                    <Text>onpress text</Text>}>
                <Text style={styles.text}>search</Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>

        // const [bos, setBos] = useState("");
    );
};

export default deneme;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    text: {
        fontSize: 24,
    },

});