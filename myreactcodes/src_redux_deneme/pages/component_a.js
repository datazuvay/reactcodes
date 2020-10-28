import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useDispatch,useSelector} from 'react-redux';


const Component_A = (props) => {
//     const myCounter = useSelector(herhangibirisim => herhangibirisim.backgroundColor);

    const newnumber = useSelector(news => news.number);
    const dispatch = useDispatch();

    return (
        <View style={{flex:1}}>
            <TouchableOpacity 
            style={{backgroundColor: 'red', flex:1}}
            onPress={() => dispatch({ type: "red" })} 
            >
                <Text style={{fontSize:30}}>{newnumber}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{backgroundColor: 'black', flex:1}}
            onPress={() => dispatch({ type: "black" })}
            ></TouchableOpacity>
            
        </View>
    )
}

export default Component_A