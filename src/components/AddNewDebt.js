import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

class AddNewDebt extends Component {
    render() {

        const {
            addNewDebtButtonContainer,
            addNewDebtButton,
        } = styles;

        return (
            <View style={addNewDebtButtonContainer}>
                <TouchableOpacity style={addNewDebtButton}>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    addNewDebtButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addNewDebtButton: {
        borderWidth: 10,
        borderRadius: 20,
        color: 'lightgrey',
    },
};


export default AddNewDebt;
