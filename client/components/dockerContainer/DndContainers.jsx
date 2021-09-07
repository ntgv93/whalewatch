import React from 'react'
import EachContainer from './EachContainer';
import { useDrag } from 'react-dnd'


const DndContainers = ({listOfContainers, handleDrop, state}) => {

    const activateContainer = [];
    listOfContainers.map(container => {
        if(container.state === state){
        activateContainer.push(<EachContainer key={container.id} info={container} handleDrop={handleDrop}/>);
        }
    });
    return (
        <div className='container' >
            {activateContainer}
        </div>
    )
}
export default DndContainers;
