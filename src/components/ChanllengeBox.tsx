  import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdowContext'
import styles from '../styles/components/ChallengeBox.module.css'


 export function ChallengeBox(){
   const {activeChallenges, resetChallenge,  completedChallenge} = useContext(ChallengesContext)
   const {resetCountdow} = useContext(CountdownContext)

   function handleChallengesSucceeded(){
      completedChallenge()
      resetCountdow()
   }
   function handleChallengesFailed(){
     resetChallenge()
     resetCountdow()
  }
  

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
              onClick={handleChallengesFailed}
              >
                Falhei
              </button>

              <button
              type="button"
              className={styles.buttonSucceeded}
              onClick={handleChallengesSucceeded}
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