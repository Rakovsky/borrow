import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Debt extends Component {
    render() {
        const { 
            debtContainerStyle,
            payoffContainerStyle,
            moneyContainerStyle,
            buttonContainerStyle,
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
            <View key={this.props.keyval}>
                <View style={debtContainerStyle}>
                    <View>
                        <Text style={recipientInputedStyle}>
                            {this.props.val.recipient}
                        </Text>
                        <View style={payoffContainerStyle}>
                            <Text style={payoffTextStyle}>Payoff date:</Text>
                            <Text style={dateInputedStyle}>{this.props.val.date}</Text>
                        </View>
                        <Text style={descriptionTextStyle}>Description:</Text>
                        <Text style={descriptionInputedStyle}>{this.props.val.description}</Text>
                    </View>
                
                    <View>
                        <Text style={amountTextStyle}>Amount:</Text>
                        <View style={moneyContainerStyle}>
                            <Text style={currencyInputedStyle}>{this.props.val.currency}</Text>
                            <Text style={amountInputedStyle}>{this.props.val.amount}</Text>
                        </View>
                        <View style={buttonContainerStyle}>
                            <TouchableOpacity onPress={this.props.deleteMethod}>
                                {times}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const times = (<FontAwesome name='times' size={50} color="#2b78e4" />);

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
    buttonContainerStyle: {
        //backgroundColor: 'purple',
        alignItems: 'center',
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
};

export default Debt;
