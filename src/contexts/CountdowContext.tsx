import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { ChallengesContext } from './ChallengesContext';
interface CountdowContextData{
  minutes:number;
  seconds:number;
  hasFinished:boolean;
  isActive:boolean;
  startCountdown:()=> void;
  resetCountdow:()=> void;

}

interface CountdowProviderProps{
  children:ReactNode

}

export const CountdownContext = createContext({}as CountdowContextData)
let countdownTimeout:NodeJS.Timeout;

export function CountdowProvider({children}:CountdowProviderProps){
  const {startNewChallenge}  = useContext(ChallengesContext)

  const [time , setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false);
  const [hasFinished , setHasFinished] = useState(false)
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

   //ativando o botão mudando de false para true
   function startCountdown() {

    setIsActive(true);
  }

  //parando o countdow
  function resetCountdow(){
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1*60) //resetando o countdow
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
    countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }else if(isActive && time === 0){
     setHasFinished(true)
     setIsActive(false)
     startNewChallenge()
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdow,
    }}>
    {children}
    </CountdownContext.Provider>
  )
}