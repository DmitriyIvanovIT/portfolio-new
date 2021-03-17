import React from 'react';
import styled from 'styled-components';
import { changeCard } from '../Functions/secondaryFunctions';

const Card = styled.div`
    position: relative;
    width: 300px;
    height: 270px;
    min-width: 300px;
    min-height: 270px;
    margin: 0 10px 20px 0;
    perspective: 1000px;
    display: inline-block;
    cursor: pointer;
    -moz-backface-visibility: hidden;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-sizing: border-box;

    &.active {
        & .front {
            transform: rotateY(180deg);
        }

        & .back {
            transform: rotateY(360deg);
        }
    }
`;

const SideFront = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 1s;
    backface-visibility: hidden;
    border: 1px solid #797979;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    overflow: hidden;
`;

const CardInfo = styled.div`
    width: 100%;
    display: flex;
    padding: 15px;
    box-sizing: border-box;
    flex-direction: column;
`;

const CardImg = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
`;

const CardTitile = styled.h3`
    margin: 0;
    margin-bottom: 18px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
`;

const More = styled.span`
    margin-top: auto;

`;

const SideBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    transform: rotateY(180deg);
    transition: 1s;
    backface-visibility: hidden;
    border: 1px solid #797979;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    overflow: hidden;
`;

const CardDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
`;

const CardButtons = styled.div`
    margin-top: auto;
`;

const CardBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 0;
    width: 180px;
    height: 35px;
    transition: all .3s;
    background: #167FFA;
    border-radius: 36px;
    color: #ffffff;
    border: none;
    outline: none;
    text-decoration: none;

    &:hover {
        transform: translateY(2px);
        box-shadow: 0px 2px 8px rgba(22, 127, 250, 0.5);
    }

    &:last-child {
        margin-top: 10px;
    }
`;

const CardItem = ({ item }) => {

    return (
        <Card 
            className="card" 
            onClick={changeCard}
            data-tool={item.tools}
        >
            <SideFront className="front">
                <CardImg src={item.images} alt={item.name} />
                <CardInfo>
                    <CardTitile>
                        {item.name}
                    </CardTitile>
                    <More>
                        Подробнее...
                    </More>
                </CardInfo>
                    
            </SideFront>

            <SideBack className="back">
                <CardTitile>
                    {item.name}
                </CardTitile>
                <CardDescription>
                    {item.description}
                </CardDescription>
                <CardButtons>
                    {item.page && <CardBtn 
                        href={item.page} 
                        target="_blank"
                    >
                        Посмотреть работу
                    </CardBtn>}
                    {item.codes && <CardBtn 
                        href={item.codes} 
                        target="_blank"
                    >
                        Посмотреть код
                    </CardBtn>}
                </CardButtons>
                    
            </SideBack>
        </Card>
    )
};

export default CardItem;