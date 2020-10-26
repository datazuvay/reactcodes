import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native';

const number = 55;

const First = (props) => {
    const [userName, setUserName] = useState("")
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 40 }}>First Hello</Text>
                <Text style={{ fontSize: 40 }}>{number}</Text>

                <Text style={{fontWeight: 'bold'}}>Girilen deger: {userName}</Text>
                <View style={{backgroundColor: '#e0e0e0', padding: 10, margin: 10, borderRadius: 5,}}/>
                    <TextInput
                        style={{backgroundColor: '#e0e0e0', padding: 10, margin: 10, borderRadius: 5}}
                        value={userName}
                        onChangeText={text => setUserName(text)}
                />
                <Button 
                title="GO"
                onPress={() => props.navigation.navigate("SecondPage", {selectedValue: userName})}/>
            </View>
        </SafeAreaView>
    );
}

export default First;