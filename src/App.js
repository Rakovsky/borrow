import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import List from './components/List';

const App = () => {
    return (
        <View>
            <Header headerText={'Borrow'}/>
            <List />
        </View>
    );
};

export default App;