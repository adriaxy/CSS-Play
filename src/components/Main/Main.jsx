import './main.css'
import Editor from "./Editor/Editor";
import Playground from './Playground/Playground';
import TargetLayout from './TargetLayout/TargetLayout';
import Theory from './Theory/Theory';
import LevelProgress from './LevelProgress/LevelProgress';

export default function Main({levelNum, sublevelNum, challenge, defaultCode, solution, theoryText, name, initialStyles, numOfSublevels}){
    
    return (
        <main className='main'>
            <section className="main__editor">
                <Editor 
                    levelNum={levelNum}
                    sublevelNum={sublevelNum}
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
                    level={2}
                    sublevel={sublevelNum}
                    numOfSublevels={numOfSublevels}
                />
            </section>
            <div></div>
            <section className="main__theory">
                <Theory 
                    cssPropertyName={name}
                    theoryText={theoryText}    
                />
            </section>
        </main>
    )
}