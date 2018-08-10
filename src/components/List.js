import React, { Component } from 'react';
import {
    ScrollView,
} from 'react-native';
import AddNewDebt from './AddNewDebt';
 
class List extends Component {
    render() {
        return (
            <ScrollView>
                <AddNewDebt />
            </ScrollView>
        );
    }
}
 
export default List;
