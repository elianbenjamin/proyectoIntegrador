import React from "react";
import styles from './Card.module.css'

export default function Card(props) {

   return (
      <div className={styles.divCard}>
         <div className={styles.divCard2}>

               <h3 className={styles.h3Card}>{props.name}</h3>
               <button className={styles.buttonCard} onClick={props.onClose}>X</button>
               <img className={styles.imgCard} src={props.image} alt='Guia' />   

         </div>

         <div className={styles.divCard3}>
         
               <h3 className={styles.h2Card}>{props.status}</h3>
               <h3 className={styles.h2Card}>{props.species}</h3>
               <h3 className={styles.h2Card}>{props.gender}</h3>
         
         </div>
         <div className={styles.divCard4}>
                <h3 className={styles.h2Card}>{props.origin}</h3>
         </div>
         
         
      </div>
   );
}
