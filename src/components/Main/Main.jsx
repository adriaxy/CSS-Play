import './main.css'
import Editor from "./Editor/Editor";
import Playground from './Playground/Playground';
import TargetLayout from './TargetLayout/TargetLayout';
import Theory from './Theory/Theory';
import LevelProgress from './LevelProgress/LevelProgress';
import { useGame } from '@/app/GameContext';

export default function Main({levelNum, sublevelNum, challenge, defaultCode, solution, theoryText, name, initialStyles, numOfSublevels}){
    const { currentLevel, currentSublevel } = useGame();
    return (
        <main className='main'>
            <section className="main__editor">
                <Editor 
                    levelNum={currentLevel + 1}
                    sublevelNum={currentSublevel + 1}
                    challenge={challenge}
                    defaultCode={defaultCode}
                    name={name}
                    solutionCode={solution}
                />
            </section>
            <section className='main__arena'>
                <section className="main__playground">
                    <Playground initialStyles={initialStyles}/>
                </section>
                <section className="main__target">
                    <TargetLayout initialStyles={initialStyles}/>
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
                    theoryText={theoryText}    
                />
            </section>
        </main>
    )
}