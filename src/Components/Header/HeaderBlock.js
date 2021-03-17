import React from 'react';
import styled from 'styled-components';

const Wrapp = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;

    @media screen and ( max-width: 650px ) {
        box-sizing: border-box;
        padding-top: 10%;

    }
`;

const HeaderTitle = styled.h2`
    font-size: 20px;
    margin: 0;
    margin-bottom: 15px;
    text-transform: uppercase;

    @media screen and ( max-width: 650px ) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;

const HeaderSubtitle = styled.h3`
    font-size: 40px;
    margin: 0;
    margin-bottom: 15px;
    text-transform: uppercase;

    @media screen and ( max-width: 650px ) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

const HeaderDescription = styled.p`
    display: inline-block;
    font-size: 18px;
    max-width: 470px;
    margin-bottom: 15px;

    @media screen and ( max-width: 900px ) {
        max-width: 400px;
    }

    @media screen and ( max-width: 650px ) {
        font-size: 16px;
        text-align: center;
        margin-bottom: 10px;
    }
`;

const HeaderBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 50px;
    border-radius: 36px;
    color: #ffffff;
    font-size: 24px;
    border: none;
    background: #167FFA;
    -webkit-transition: all .3s;
    transition: all .3s;

    &:hover {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
        background: #0a57ae;
        -webkit-box-shadow: 0px 2px 8px rgba(22, 127, 250, 0.5);
        box-shadow: 0px 2px 8px rgba(22, 127, 250, 0.5);
    }

    @media screen and ( max-width: 650px ) {
        font-size: 16px;
        width: 200px;
        height: 40px;
    }
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and ( max-width: 650px ) {
        flex-direction: column;
    }
`;

const InfoText = styled.div`
    @media screen and ( max-width: 650px ) {
        order: 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 15px;
    }
`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 280px;
    object-fit: cover;
    -webkit-transition: all .3s;
    transition: all .3s;

    &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    @media screen and ( max-width: 900px ){
        width: 250px;
        height: 250px;
    }
`;

const HeaderBlock = () => {
    return (
        <Wrapp>
            <Info>
                <InfoText>
                    <HeaderTitle>
                        FRONT-END DEVELOPER
                    </HeaderTitle>
                    <HeaderSubtitle>
                        Дмитрий Иванов
                    </HeaderSubtitle>
                    <HeaderDescription>
                        Разрабатываю сайты для малого и среднего бизнеса. У меня можно дизайн и верстку небольшого сайта или интернет-магазина
                    </HeaderDescription>
                    <HeaderBtn href="#contact">
                        Оставить заявку
                    </HeaderBtn>
                </InfoText>
                <Avatar 
                    src="./img/avatar.jpg" 
                    alt="avatar"
                />
            </Info>
        </Wrapp>
    )
};

export default HeaderBlock;