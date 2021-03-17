import React from 'react';
import styled from 'styled-components';

const WorkTabs = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
`;

const WorkTab = styled.span`
    margin: 0px 15px 0px 0px;
    border-radius: 20px;
    border: 2px solid #167FFA;
    background: none;
    padding: 5px 15px;
    color: #167FFA;
    font-size: 18px;
    transition: all .3s;
    cursor: pointer;

    @media (max-width: 520px) {
        font-size: 12px;
        margin: 0px 10px 0px 0px;
    }

    @media (max-width: 330px) {
        font-size: 10px;
    }

    &.active {
        color: #ffffff;
        background: #167FFA;
        pointer-events: none;
    }
    
    &:hover {
        transform: translateY(2px);
        background: #65acff;
        color: #ffffff;
        box-shadow: 0px 2px 8px rgba(22, 127, 250, 0.5);
    }
`;

const WorkFilter = ({ toolWork, setToolWork }) => {
    const changeTool = e => {
        setToolWork(e.target.dataset.tool);
    };

    return (
        <WorkTabs>
            <WorkTab 
                className={toolWork === 'all' ? 'active' : ''} 
                data-tool="all"
                onClick={changeTool}
            >
                Все
            </WorkTab>
            <WorkTab 
                className={toolWork === 'HTML' ? 'active' : ''} 
                data-tool="HTML"
                onClick={changeTool}
            >
                Вертка
            </WorkTab>
            <WorkTab 
                className={toolWork === 'Java Script' ? 'active' : ''} 
                data-tool="Java Script"
                onClick={changeTool}
            >
                Java Script
            </WorkTab>
            <WorkTab 
                className={toolWork === 'React' ? 'active' : ''} 
                data-tool="React"
                onClick={changeTool}
            >
                React
            </WorkTab>
        </WorkTabs>
    )
};

export default WorkFilter;
