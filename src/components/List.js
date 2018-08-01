import React from 'react';
import { } from 'react-native';
import { Container, ContainerSection } from './common';
import AddDebt from './AddDebt';

const List = () => {
    return (
        <Container>
            <ContainerSection>
                <AddDebt />
            </ContainerSection>
        </Container>
    );
};

export default List;