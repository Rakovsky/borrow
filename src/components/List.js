import React, { Component } from 'react';
import {
    ScrollView,
} from 'react-native';
import AddDebt from './AddDebt';
import Debt from './Debt';
 
class List extends Component {
    render() {
        return (
            <ScrollView>
                <AddDebt />
                <Debt />
            </ScrollView>
        );
    };
}
 
export default List;