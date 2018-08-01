import React from 'react';
import { View } from 'react-native';

const ContainerSection = (props) => {
    return (
        <View style={styles.containerSectionStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerSectionStyle: {
        borderBottomWidth: 1,
        paddingLeft: 3,
        borderColor: '#ddd',
    }
};

export { ContainerSection };