import React from "react";
import styles from './Search.module.css'


export default function SearchBar(props) {
   return (
      <div className={styles.div}>

         <input className={styles.input} type='search' />
         <button className={styles.button} onClick={props.onSearch}>Agregar</button> 

      </div>
   );
}
