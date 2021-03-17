import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../Hooks/useFetch';
import Loader from '../style/Loader';
import CardItem from './CardItem';

const Cards = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const CardsBlock = ({ toolWork }) => {

    const res = useFetch();

    const dbWorks = res.response;

    

    return (
        <Cards>
            {dbWorks ? dbWorks.map((item, i) => {
                if (toolWork === 'all') {
                    return <CardItem item={item} key={i} />
                } else if (toolWork === item.tools) {
                    return <CardItem item={item} key={i} />
            }
            
            }) : res.error ?
            <div>Sorry, we will fix it soon...</div> :
            <Loader/> }
            
        </Cards>
    );
};

export default CardsBlock;