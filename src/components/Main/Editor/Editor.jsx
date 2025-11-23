import './Editor.css'

export default function Editor ({levelNum, sublevelNum, challenge, defaultCode}){
    return (
        <>
          <h2>Level <span>{levelNum}</span> - CHALLENGE <span>{sublevelNum}</span></h2>
          <p>{challenge}</p>
          <textarea name="" id=""></textarea>
        </>
    )
}