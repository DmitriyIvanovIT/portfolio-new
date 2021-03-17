import React, { useState } from 'react';
import styled from 'styled-components';
// import { useDB } from '../Hooks/useDB';
import { Container, Title } from '../style/Style';
import CardsBlock from './CardsBlock';
import WorkFilter from './WorkFilter';

const WorkBlock = styled.section`
    box-sizing: border-box;
    padding: 60px 0;
`;

const Work = ({ database }) => {

    // const dbWork = useDB(database);

    const [toolWork, setToolWork] = useState('all');

    return (
        <WorkBlock>
            <Container>
                <Title>Мои работы</Title>
                
                <WorkFilter 
                    toolWork={toolWork} 
                    setToolWork={setToolWork}
                />
                
                <CardsBlock toolWork={toolWork}/>
            </Container>
        </WorkBlock>
    );
};

export default Work;