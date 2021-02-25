  import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'


 export function ChallengeBox(){
   const {activeChallenges, resetChallenge} = useContext(ChallengesContext)
   
    

   return(
     <div className={styles.challengeBoxContainer}>
       {activeChallenges? (
         <div className={styles.challengeActive}>
           <header>Ganhe {activeChallenges.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenges.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>
            <footer>
              <button
              type="button"
              className={styles.buttonFailed}
              onClick={resetChallenge}
              >
                Falhei
              </button>

              <button
              type="button"
              className={styles.buttonSucceeded}
              onClick={resetChallenge}
              >
                Completei
              </button>
            </footer>            
         </div>
       ):(
        <div className={styles.challengeNotActive}>
        <strong>Finalize o ciclo para receber o desafio</strong>
        <p>
          <img src ="icons/level-up.svg"alt="up"/>
          Avance de nivel Completando os desafios
        </p>
       </div>
       )}
     </div>
   )
 }