import './main.css'
import Editor from "./Editor/Editor";
import Playground from './Playground/Playground';
import TargetLayout from './TargetLayout/TargetLayout';
import Theory from './Theory/Theory';
import LevelProgress from './LevelProgress/LevelProgress';
import { useGame } from '@/app/GameContext';

export default function Main({name, numOfSublevels}){
    const { currentLevel, currentSublevel } = useGame();
    return (
        <main className='main'>
            <section className="main__editor">
                <Editor/>
            </section>
            <section className='main__arena'>
                <section className="main__playground">
                    <Playground/>
                </section>
                <section className="main__target">
                    <TargetLayout/>
                </section>
                <LevelProgress 
                    level={currentLevel + 1}
                    sublevel={currentSublevel + 1}
                    numOfSublevels={numOfSublevels}
                />
            </section>
            <section className="main__theory">
                <Theory 
                    cssPropertyName={name}  
                />
            </section>
        </main>
    )
}