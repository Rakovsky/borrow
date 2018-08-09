import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Debt extends Component {
    render() {
        const { 
            addDebtContainerStyle,
            payoffContainerStyle,
            moneyContainerStyle,
            addButtonContainerStyle,
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
                <View style={addDebtContainerStyle}>
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
                        <TouchableOpacity>
                        {times}
                        </TouchableOpacity>
                    </View>
            </View>
        );
    };
}

const times = (<FontAwesome name='times' size={50} color="#2b78e4" />)

const styles = {
    addDebtContainerStyle: {
        //backgroundColor: '#5b5b5b',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    payoffContainerStyle: {
        //backgroundColor: '#bfbfbf',
        flexDirection: 'row',
    },
    moneyContainerStyle: {
        //backgroundColor: '#a3a3a3',
        flexDirection: 'row',
    },
    addButtonContainerStyle: {
        //backgroundColor: '#a6a6a6',
        alignItems: 'center',
        paddingTop: -30,
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
        paddingTop: 100,
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