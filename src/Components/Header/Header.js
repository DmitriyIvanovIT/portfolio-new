import React from 'react';
import styled from 'styled-components';
import bg from '../../img/bg.jpg';
import { Container } from '../style/Style';
import HeaderBlock from './HeaderBlock';

const HeaderWrapp = styled.header` 
    color: #ffffff;
    position: relative;
    height: 100vh;
    background: url('${bg}') no-repeat center top/cover;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 2;
    }
`;

const Header = () => (
        <HeaderWrapp id="header">
            <Container>
                <HeaderBlock />
            </Container>
        </HeaderWrapp>
    );

export default Header;