import './Editor.css'
import SubHeaderSection from '../Shared/SubHeaderSection';
import ResetCodeButton from './ResetCodeButton';
import ViewSolutionButton from './ViewSolutionButton';
import ModalSolution from './ModalSolution';
import { useGame } from '@/app/GameContext';
import LevelProgress from '../LevelProgress/LevelProgress';

export default function Editor ({levelNum, sublevelNum, challenge, name, solutionCode}){
  const boldTarget = `${name} property`;
  const parts = challenge.split(boldTarget);
  const {code, setCode, initialGameCode, viewSolution, setViewSolution, sublevelState, setSublevelState} = useGame();

  const currentSublevelState = sublevelState[levelNum - 1][sublevelNum - 1]
  const defaultSublevelCode = currentSublevelState.defaultCode;
  const playerCode = currentSublevelState.playerCode;
  const currentCode = currentSublevelState.firstTime === true ? defaultSublevelCode : playerCode;

  const handleChange = (e) => {
    setSublevelState(prev => {
      const newData = [...prev];
      const innerArray = [...newData[levelNum - 1]];
      const obj = { ...innerArray[sublevelNum - 1], firstTime: false, playerCode: `${e.target.value}`}
      innerArray[sublevelNum - 1] = obj;
      newData[levelNum - 1] = innerArray;

      return newData;
      });
  }

  const resetCode = () => {
    setSublevelState(prev => {
      const newData = [...prev];
      const innerArray = [...newData[levelNum -1]];
      const obj = {...innerArray[sublevelNum -1], firstTime: true, playerCode: ''}
      innerArray[sublevelNum - 1] = obj;
      newData[levelNum - 1] = innerArray;

      return newData
    })
  }

    return (
        <div className='editor'>
          <SubHeaderSection sectionName={'editor__title'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-on-light)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
              <path d="M6 12h4m-2 -2v4" />
              <path d="M15 11l0 .01" />
              <path d="M18 13l0 .01" />
            </svg>
            <span>Level <span>{levelNum}</span> <span className='editor__title--light-typo'>- CHALLENGE <span>{sublevelNum}</span></span></span>
          </SubHeaderSection>
          <p className='editor__challenge'>
            {parts[0]}
            <span className='editor__challenge--bold'>{boldTarget}</span>
            {parts[1]}
          </p>
          <div className="editor-buttons__wrapper">
            <ResetCodeButton onClick={resetCode}/>
            <ViewSolutionButton onClick={() => setViewSolution(true)}/>
          </div>
          <textarea name="" id="" onChange={handleChange} value={currentCode}></textarea>
          <ModalSolution 
            viewSolution={viewSolution} 
            className='modal-solution' 
            onClick={() => setViewSolution(false)}
            solutionCode={solutionCode}
            />
        </div>
    )
}