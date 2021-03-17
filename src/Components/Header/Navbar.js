import React from 'react';
import styled from 'styled-components';
import icons from '../../img/icons/icons.svg';

const Nav = styled.nav`
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    padding-top: 10px;
    padding-bottom: 10px;
    background: transparent;
    z-index: 99;

    &.sticy {
        background: #0253b2;
        box-shadow: 0px 4px 13px rgba(0,0,0,0.7);
    }
`;

const NavContainer = styled.div`
    position: relative;
    max-width: 1240px;
    width: 95%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;

`;

const NavLogo = styled.a`
    width: 120px;
    height: 42px;
    cursor: pointer;
    position: relative;

    & svg {
        position: relative;
        left: -10px;
        width: 100%;
        height: 100%;
        -webkit-transition: all .3s;
        transition: all .3s;
        fill: #FCFCFC;

        &:hover {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            fill: #999999;
        }
    }
`;

const HeaderMenu = styled.div`
    @media screen and ( max-width: 900px ) {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background: #1c1c1c;
        padding: 0px 15px;
        transform: translateX(-100%);
        transition: 0.3s;

        &.active {
            transform: translateX(0);
        }
    }
`;

const NavList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;

    li {
        margin-right: 19px;
        -webkit-transition: all .3s;
        transition: all .3s;

        &:last-child {
            margin: 0;
        }

        &:hover {
            -webkit-transform: scale(1.1);
                    transform: scale(1.1);
        }
    }

    @media screen and ( max-width: 900px ) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        & li {
            padding-bottom: 40px;
            text-align: center;
            margin: 0;
        }
    }
`;

const NavLink = styled.a`
    position: relative;
    text-decoration: none;
    color: #fff;
    font-size: 21px;
    -webkit-transition: all .3s;
    transition: all .3s;

    &:hover {
        color: #999999;
    }

    @media screen and ( max-width: 900px ) {
        font-size: 35px;
    }
`;

const HeaderSocial = styled.div`
    @media screen and ( max-width: 900px ) {
        display: none;
    }
`;

const HeaderSocialLink = styled.a`
    margin-right: 22px;
    &:last-child {
        margin: 0;
    }

    svg {
        fill: #FCFCFC;
        -webkit-transition: all .3s;
        transition: all .3s;
        &:hover {
            fill: #999999;
            webkit-transform: scale(1.1);
                    transform: scale(1.1);
        }
    }
`;

const BurgerMenu = styled.div`
    display: none;
    width: 32px;
    height: 32px;

    @media ( max-width: 900px ) {
        display: block;
        width: 32px;
        height: 32px;
        position: relative;
        top: 0;
        right: 20px;
        bottom: 32px;
        transition: all .3s;

        & span {
            position: relative; 
            display: block;
            top: 10px;
            width: 32px;
            height: 2px;
            background: #FFF;
        }

        &:after {
            content: '';
            width: 16px;
            height: 2px;
            background: #FFF;
            position: absolute;
            top: 20px;
            left: 8px;
            transition: all .3s;
        }
                
        &:before {
            content: '';
            width: 32px;
            height: 2px;
            background: #FFF;
            position: absolute;
            top: 0;
            left: 0;
            transition: all .3s;
        }

        &.active {
            z-index: 11;
            & span{
                display: none;
            }
            
            &::after{
                top: 10px;
                left: 0;
                transform: rotate(-45deg);
                width: 32px;
            }
                    
            &::before{
                top: 10px;
                transform: rotate(45deg);
            }    
        }   
    }
`;

const Navbar = ({ openNavMenu, setOnpenNavMenu, scrolling }) => {
    
    return (
        
        <Nav className={scrolling ? 'sticy' : ''}>
            <NavContainer>
                <NavLogo href="/">
                    <svg className="logo-icon">
                        <use xlinkHref={`${icons}#logo`} />
                    </svg>
                </NavLogo>
                <BurgerMenu onClick={() => setOnpenNavMenu(!openNavMenu)} className={openNavMenu ? 'active' : '' }>
                    <span></span>
                </BurgerMenu>
                <HeaderMenu className={openNavMenu ? 'active' : '' }>
                    <NavList>
                        <li><NavLink href="#header">Информация</NavLink></li>
                        <li><NavLink href="#work">Работы</NavLink></li>
                        <li><NavLink href="#contact">Контакты</NavLink></li>
                    </NavList>
                </HeaderMenu>
                <HeaderSocial>
                    <HeaderSocialLink href="https://vk.com/ivanovdimanpsk" target="_blank" rel="noreferrer">
                        <svg className="social-icon">
                            <use xlinkHref={`${icons}#vk`} />
                        </svg>
                    </HeaderSocialLink>
                    <HeaderSocialLink href="https://tlgg.ru/diman_ivanov" target="_blank" rel="noreferrer">
                        <svg className="social-icon">
                            <use xlinkHref={`${icons}#telegram`} />
                        </svg>
                    </HeaderSocialLink>
                    <HeaderSocialLink href="https://www.instagram.com/diman_ivanov_official/" target="_blank" rel="noreferrer">
                        <svg className="social-icon">
                            <use xlinkHref={`${icons}#instagram`} />
                        </svg>
                    </HeaderSocialLink>     
                </HeaderSocial>
            </NavContainer>
        </Nav>
    )
};

export default Navbar;