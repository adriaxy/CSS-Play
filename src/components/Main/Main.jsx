import './main.css'
import Editor from "./Editor/Editor";
import Playground from './Playground/Playground';
import TargetLayout from './TargetLayout/TargetLayout';
import Theory from './Theory/Theory';
import LevelProgress from './LevelProgress/LevelProgress';
import ModalSolution from './Shared/ModalSolution';
import { useGame } from '@/app/GameContext';

export default function Main(){
    const {viewSolution, setViewSolution} = useGame();

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
                <LevelProgress/>
            </section>
            <section className="main__theory">
                <Theory/>
            </section>
            <ModalSolution 
            viewSolution={viewSolution} 
            className='modal-solution' 
            onClick={() => setViewSolution(false)}
            />
        </main>
    )
}