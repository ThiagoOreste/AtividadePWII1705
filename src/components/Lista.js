import React from 'react';
import ItemLista from './ItemLista';

const Lista = () => {
    return(
        <>
            <ul>
                <ItemLista nome="Item 1"/>
                <ItemLista nome="Item 2"/>
                <ItemLista nome="Item 3"/>
                <ItemLista nome="Item 4"/>
            </ul>
        </>
        
    )
}
export default Lista