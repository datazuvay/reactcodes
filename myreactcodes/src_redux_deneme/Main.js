import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

import reducer from './context/reducer';
import initialState from './context/store';

import Component_A from './pages/component_a';
import Component_B from './pages/component_b';

const store = createStore( reducer, initialState);

const Main = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex:1}}>
                <Component_A />
                <Component_B />
            </SafeAreaView>
        </Provider>
    )
};

export default Main;