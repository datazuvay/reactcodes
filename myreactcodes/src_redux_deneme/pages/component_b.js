import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Component_B = (props) => {
    const dispatch = useDispatch();
    const myColor = useSelector(herhangibirisim => herhangibirisim.backgroundColor);

    const name = useSelector(news => news.userName);

    return(
        <SafeAreaView style={{flex:1, backgroundColor: myColor}}>
            <View style={{flex:1}}>
                <Text>{name}</Text>
                <Button title= 'kare' onPress={()=> dispatch({type: 'kare2'})}/> 
            </View>
        </SafeAreaView>
    )
}

export default Component_B