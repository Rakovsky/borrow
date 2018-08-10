import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class Debt extends Component {
    render() {
        const { 
            debtContainerStyle,
            payoffContainerStyle,
            moneyContainerStyle,
            addButtonContainerStyle,
            addButtonStyle,
            recipientInputedStyle,
            currencyInputedStyle,
            amountInputedStyle,
            dateInputedStyle,
            descriptionInputedStyle,
            amountTextStyle,
            payoffTextStyle,
            descriptionTextStyle,
        } = styles;    
        
        return (
            <View>
                <View style={debtContainerStyle}>
                    <View>
                        <Text style={recipientInputedStyle}>
                            {this.props.recipient}
                        </Text>
                        <View style={payoffContainerStyle}>
                            <Text style={payoffTextStyle}>Payoff date:</Text>
                            <Text style={dateInputedStyle}>{this.props.date}</Text>
                        </View>
                        <Text style={descriptionTextStyle}>Description:</Text>
                        <Text style={descriptionInputedStyle}>{this.props.description}</Text>
                    </View>
                
                    <View>
                        <Text style={amountTextStyle}>Amount:</Text>
                        <View style={moneyContainerStyle}>
                            <Text style={currencyInputedStyle}>{this.props.currency}</Text>
                            <Text style={amountInputedStyle}>{this.props.amount}</Text>
                        </View>
                    </View>
                </View>

                    <View style={addButtonContainerStyle}>
                        <TouchableOpacity style={addButtonStyle}>

                        </TouchableOpacity>
                    </View>
            </View>
        );
    };
}



const styles = {
    debtContainerStyle: {
        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    payoffContainerStyle: {
        //backgroundColor: 'red',
        flexDirection: 'column',
    },
    moneyContainerStyle: {
        //backgroundColor: 'blue',
        flexDirection: 'row',
    },
    addButtonContainerStyle: {
        //backgroundColor: 'purple',
        alignItems: 'center',
        paddingTop: -30,
    },
    addButtonStyle: {
        borderWidth: 10,
        borderRadius: 20,
        borderColor: 'lightgrey',
    },
    recipientInputedStyle: {
        paddingLeft: -5,
        width: 175,
        color: '#000',
        fontSize: 21.5,
    },
    dateInputedStyle: {
        paddingTop: -30,
        width: 77,
        color: '#000',
        fontSize: 16,
    },
    currencyInputedStyle: {
        width: 20,
        color: '#000',
        fontSize: 17,
    },
    amountInputedStyle: {
        width: 53,
        color: '#000',
        fontSize: 17,
        paddingRight: -100,
    },
    descriptionInputedStyle: {
        paddingTop: -30,
        width: 205,
        color: '#000',
        fontSize: 16,
    },
    amountTextStyle: {
        fontSize: 20,
        paddingTop: 7,
        color: '#000',
    },
    payoffTextStyle: {
        fontSize: 18,
        color: '#000',
        paddingTop: 0,
    },
    descriptionTextStyle: {
        fontSize: 20,
        color: '#000',
        paddingTop: 0,
    },
}

export default Debt;