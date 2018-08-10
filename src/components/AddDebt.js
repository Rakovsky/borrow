import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    TouchableOpacity, 
} from 'react-native';

import Debt from './Debt';


class addDebt extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            debtArray: [],
            recipient: '',
            date: '',
            currency: '',
            amount: '',
            description: '', 
        };
    }

    render() {
        const { 
            addDebtContainerStyle,
            payoffContainerStyle,
            moneyContainerStyle,
            addButtonContainerStyle,
            addButtonStyle,
            recipientInputStyle,
            currencyInputStyle,
            amountInputStyle,
            dateInputStyle,
            descriptionInputStyle,
            amountTextStyle,
            payoffTextStyle,
            descriptionTextStyle,
        } = styles;        

        return (
            <View>
                <View style={addDebtContainerStyle}>
                    <View>
                        <TextInput
                            onChangeText={(recipient) => this.setState({ recipient })}
                            value={this.state.recipient}
                            placeholder='Name of recipient'
                            placeholderTextColor='#666666'
                            style={recipientInputStyle}
                            underlineColorAndroid='transparent'
                        />
                        <View style={payoffContainerStyle}>
                            <Text style={payoffTextStyle}>Payoff date:</Text>
                            <TextInput
                                onChangeText={(date) => this.setState({ date })}
                                value={this.state.date}
                                placeholder='00/00/00'
                                placeholderTextColor='#666666'
                                style={dateInputStyle}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <Text style={descriptionTextStyle}>Description:</Text>
                        <TextInput
                            onChangeText={(description) => this.setState({ description })}
                            value={this.state.description}
                                placeholder='e.g. paid for my coffee'
                                placeholderTextColor='#666666'
                                style={descriptionInputStyle}
                                underlineColorAndroid='transparent'
                        />
                    </View>

                    <View>
                        <Text style={amountTextStyle}>Amount:</Text>
                        <View style={moneyContainerStyle}>
                            <TextInput
                                onChangeText={(currency) => this.setState({ currency })}
                                value={this.state.currency}
                                placeholder='$'
                                placeholderTextColor='#666666'
                                style={currencyInputStyle}
                                underlineColorAndroid='transparent'
                            />
                            <TextInput
                                onChangeText={(amount) => this.setState({ amount })}
                                value={this.state.amount}
                                placeholder='0000'
                                placeholderTextColor='#666666'
                                style={amountInputStyle}
                                underlineColorAndroid='transparent'
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                </View>
                <View style={addButtonContainerStyle}>
                    <TouchableOpacity style={addButtonStyle} /*onPress={ this.addDebt.bind(this) }*/>
                        
                    </TouchableOpacity>
                </View>

                <Debt 
                    recipient={this.state.recipient}
                    date={this.state.date}
                    currency={this.state.currency}
                    amount={this.state.amount}
                    description={this.state.description}
                />
            </View>
        );
    }
}

const styles = {
    addDebtContainerStyle: {
        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
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
    recipientInputStyle: {
        paddingLeft: -5,
        width: 175,
        color: '#000',
        fontSize: 21.5,
    },
    dateInputStyle: {
        paddingTop: -30,
        width: 77,
        color: '#000',
        fontSize: 16,
    },
    currencyInputStyle: {
        width: 20,
        color: '#000',
        fontSize: 17,
    },
    amountInputStyle: {
        width: 53,
        color: '#000',
        fontSize: 17,
        paddingRight: -100,
    },
    descriptionInputStyle: {
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
        paddingTop: 0,
        fontSize: 18,
        color: '#000',
    },
    descriptionTextStyle: {
        fontSize: 20,
        color: '#000',
        paddingTop: 0,
    },
};

export default addDebt;
