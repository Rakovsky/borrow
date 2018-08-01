import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    ProgressBarAndroid, 
} from 'react-native';

import { 
    Plus, 
} from './icons/index';

import FontAwesome from 'react-native-vector-icons/FontAwesome';


class addDebt extends Component {
    state = { 
        recipient: '',
        date: '',
        currency: '',
        amount: '',
        description: '', 
    };

    render() {
        const { 
            addDebtContainerStyle,
            payoffContainerStyle,
            moneyContainerStyle,
            iconContainerStyle,
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
                            value={this.recipient}
                            onChangeText={recipient => this.setState({ recipient })}
                            placeholder='Name of recipient'
                            placeholderTextColor='#666666'
                            style={recipientInputStyle}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                        <View style={payoffContainerStyle}>
                            <Text style={payoffTextStyle}>Payoff date:</Text>
                            <TextInput
                                value={this.state.date}
                                onChangeText={date => this.setState({ date })}
                                placeholder='00/00/00'
                                placeholderTextColor='#666666'
                                style={dateInputStyle}
                                underlineColorAndroid='rgba(0,0,0,0)'
                            />
                        </View>
                        <Text style={descriptionTextStyle}>Description:</Text>
                        <TextInput
                                value={this.description}
                                onChangeText={description => this.setState({ description })}
                                placeholder='e.g. paid for my coffee'
                                placeholderTextColor='#666666'
                                style={descriptionInputStyle}
                                underlineColorAndroid='rgba(0,0,0,0)'
                            />
                    </View>

                    <View>
                        <Text style={amountTextStyle}>Amount:</Text>
                        <View style={moneyContainerStyle}>
                            <TextInput
                                value={this.currency}
                                onChangeText={currency => this.setState({ currency })}
                                placeholder='$'
                                placeholderTextColor='#666666'
                                style={currencyInputStyle}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                //keyboardType=''
                            />
                            <TextInput
                                value={this.amount}
                                onChangeText={amount => this.setState({ amount })}
                                placeholder='0000'
                                placeholderTextColor='#666666'
                                style={amountInputStyle}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                </View>
                <View style={iconContainerStyle}>
                    {plus}
                </View>
            </View>
        );
    };
}

const plus = (<FontAwesome name='plus' size={50} color="#2b78e4" />)

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
    iconContainerStyle: {
        //backgroundColor: '#a6a6a6',
        alignItems: 'center',
        paddingTop: -30,
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

export default addDebt;