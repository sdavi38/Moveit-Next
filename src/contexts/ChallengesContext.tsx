import {createContext, useState, ReactNode, useEffect} from 'react'
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
 completedChallenge:()=>void
 levelUp:() => void;
 startNewChallenge:()=> void;
 resetChallenge:()=> void;
 

}


export const ChallengesContext = createContext({} as ChallengesData)
  export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] =useState(1)
    const [currentExperience, setCurrentExperience] =useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenges, setActiveChallenges] = useState(null)
    const experienceToNexLeve = Math.pow((level + 1) * 4,2)
   
    useEffect(() => {
      Notification.requestPermission() //permissão no browser
      }, [])

    function levelUp(){
      setLevel(level +1)
    }
    function startNewChallenge(){
      const randomChallengesIndex = Math.floor( Math.random()* challenges.length)
      const challenge = challenges[randomChallengesIndex]
      setActiveChallenges(challenge)
      //ativando o som da notificação 
      new Audio('/notification.mp3').play
      
      // notificações com permissões do usuário
      if(Notification.permission === 'granted'){
        new  Notification('Novo Desafio ', {
          body: `Valendo ${challenge.amount} xp!`
        })
      }
    }

    function resetChallenge(){
      setActiveChallenges(null)
    }

    function completedChallenge(){
      if(!activeChallenges){
        return;
      }
      const {amount} = activeChallenges;
      let finalExperience = currentExperience + amount;
      if (finalExperience > experienceToNexLeve){
         finalExperience = finalExperience - experienceToNexLeve;
        levelUp();
      }
      setCurrentExperience(finalExperience)
      setActiveChallenges(null)
      setChallengesCompleted(challengesCompleted + 1)
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
       completedChallenge
       
       }}>
          {children}
      </ChallengesContext.Provider>
    )
  }