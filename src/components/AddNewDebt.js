import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AddDebt from './AddDebt';

class AddNewDebt extends Component {
    render() {
        const {
            newDebtButtonContainer,
            newDebtButton,
        } = styles;

        return (
            <View>
                <AddDebt />
                <View style={newDebtButtonContainer}>
                    <TouchableOpacity style={newDebtButton}>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    newDebtButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    newDebtButton: {
        borderWidth: 10,
        borderRadius: 20,
        borderColor: 'lightgrey',
    },
};


export default AddNewDebt;
