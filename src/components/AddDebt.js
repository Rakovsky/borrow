import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    TouchableOpacity, 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
                    <TouchableOpacity /*onPress={ this.addDebt.bind(this) }*/>
                        {check}
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
    };
};



const check = (<FontAwesome name='check' size={50} color="#2b78e4" />)

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