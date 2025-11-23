import './main.css'
import Editor from "./Editor/Editor";
import Playground from './Playground/Playground';
import TargetLayout from './TargetLayout/TargetLayout';
import Theory from './Theory/Theory';

export default function Main({levelNum, sublevelNum, challenge, defaultCode, solution, theory}){
    
    return (
        <main className='main'>
            <section className="main__editor">
                <Editor 
                    levelNum={levelNum}
                    sublevelNum={sublevelNum}
                    challenge={challenge}
                    defaultCode={defaultCode}
                />
            </section>
            <section className="main__playground">
                <Playground />
            </section>
            <section className="main__target">
                <TargetLayout />
            </section>
            <div></div>
            <section className="main__theory">
                <Theory />
            </section>
        </main>
    )
}