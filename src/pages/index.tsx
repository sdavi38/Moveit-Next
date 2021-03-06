import { CompletedChallenges } from "../components/CompletedChallenges";
import ExperinceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import {Countdow} from '../components/Countdow'
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head'
import { ChallengeBox } from "../components/ChanllengeBox";
import { CountdowProvider } from "../contexts/CountdowContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Início | move.it</title>
      </Head>
     <ExperinceBar/>

     <CountdowProvider>
     <section>
       <div>
        <Profile/>
        <CompletedChallenges/>
        <Countdow/>
        </div>
       <div>
       <ChallengeBox/>
       </div>
     </section>
     </CountdowProvider>
    </div> 
  )
}
