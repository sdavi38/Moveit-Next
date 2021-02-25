import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

function ExperinceBar(){
  const {currentExperience, experienceToNexLeve} = useContext(ChallengesContext)
  
  const percentToNextLevel = Math.round(currentExperience *100) / experienceToNexLeve;

  return(
    <header className={styles.experienceBar}>
      <span> 0 xp</span>
      <div>
        <div style={{width:`${percentToNextLevel}%`}}/>
        <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>
        {currentExperience} xp</span>
      </div>
      <span>{experienceToNexLeve} xp</span>


    </header>
  )
}
export default ExperinceBar;