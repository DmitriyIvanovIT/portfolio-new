import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    max-width: 1240px;
    width: 95%;
    margin: 0 auto;
    z-index: 3;

    & a {
        text-decoration: none;
    }  
`;

export const Title = styled.h2`
    font-size: 32px;
    margin: 0;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 15px;
    }
`;