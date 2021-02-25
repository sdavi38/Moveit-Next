import { useState, useEffect, useContext } from 'react'
import {CountdownContext} from '../contexts/CountdowContext'
import styles from '../styles/components/Countdow.module.css'



export function Countdow(){
 //formatando os numeros o no layout 
  const {
    seconds,
    minutes,
    hasFinished,
    isActive,
    resetCountdow,
    startCountdown
   } = useContext(CountdownContext)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  
  return(
  <div>
    <div className={styles.countdowContainer}>
      <div>
      <span>{minuteLeft}</span>
      <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
      <span>{secondLeft}</span>
      <span>{secondRight}</span>
      </div>
    </div>

    {hasFinished ? (
       <button
       disabled 
       type="button"
       className={styles.countdowButton}
       >     
       Ciclo encerrado  
      </button>
    ):(
      <>
       {isActive ?(
     <button type="button"
      className={`${styles.countdowButton} ${styles.countdowButtonActive}`}
      onClick={resetCountdow}>     
       Abandonar ciclo  
     </button>

    ):(      
    <button type="button"
    className={styles.countdowButton}
    onClick={startCountdown}>
      iníciar ciclo
   
   </button>
    )}
      </>
    )}
   
    

  </div>
  )
}