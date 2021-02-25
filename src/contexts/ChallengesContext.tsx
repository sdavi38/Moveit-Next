import {createContext, useState, ReactNode} from 'react'
import challenges from '../../challenges.json'

interface ChallengesProviderProps{
  children:ReactNode

}
interface Challenges{
  type: 'body'|'eye';
  description:string;
  amount:number;
  }
  
interface ChallengesData{
 level:number;
 experienceToNexLeve:number;
 activeChallenges:Challenges;
 currentExperience:number;
 challengesCompleted:number;
 levelUp:() => void;
 startNewChallenge:()=> void;
 resetChallenge:()=> void;
 

}


export const ChallengesContext = createContext({} as ChallengesData)
  export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] =useState(1)
    const [currentExperience, setCurrentExperience] =useState(30)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenges, setActiveChallenges] = useState(null)

    const experienceToNexLeve = Math.pow((level + 1) * 4,2)
   
    function levelUp(){
      setLevel(level +1)
    }
    function startNewChallenge(){
      const randomChallengesIndex = Math.floor( Math.random()* challenges.length)
      const challenge = challenges[randomChallengesIndex]
      setActiveChallenges(challenge)
    }

    function resetChallenge(){
      setActiveChallenges(null)
    }
    return(
      <ChallengesContext.Provider value={{
       level, levelUp,
       currentExperience,
       challengesCompleted,
       startNewChallenge,
       activeChallenges,
       resetChallenge,
       experienceToNexLeve,
       
       }}>
          {children}
      </ChallengesContext.Provider>
    )
  }