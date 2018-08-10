import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
                    <TouchableOpacity style={newDebtButton} onPress={this.addNewDebt.bind(this)}>
                        {plus}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    addNewDebt() {
        <AddDebt />
    };
}

const plus = (<FontAwesome name='plus' size={50} color="#2b78e4" />);

const styles = {
    newDebtButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    }
};


export default AddNewDebt;
