import React from 'react';
import styles from './css/css.module.css'

const ItemLista = ({nome}) => {
    return(
        <>
            <li className={styles.cssLi}>{nome}</li>
        </>
    );
}

export default ItemLista