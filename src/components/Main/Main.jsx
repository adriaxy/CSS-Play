import './main.css'
import Editor from "./Editor/Editor";

export default function Main({levelNum, sublevelNum, challenge, defaultCode, solution, theory}){
    
    return (
        <>
            <section className="editor">
                <Editor 
                    levelNum={levelNum}
                    sublevelNum={sublevelNum}
                    challenge={challenge}
                    defaultCode={defaultCode}
                />
            </section>
            <section className="css-arena">
                <div className='playground'></div>
                <div className='target-layout'></div>
            </section>
            <section className="theory">
                
            </section>
        </>
    )
}