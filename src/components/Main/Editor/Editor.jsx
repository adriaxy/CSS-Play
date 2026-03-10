import './Editor.css'
import SubHeaderSection from '../Shared/SubHeaderSection';
import ResetCodeButton from './ResetCodeButton';
import ViewSolutionButton from './ViewSolutionButton';
import ModalSolution from '../Shared/ModalSolution';
import { useGame } from '@/app/GameContext';
import { useState, useEffect, useRef } from 'react';
import { parseCssToRules } from '../../../../lib/parseCss';

export default function Editor (){
  const {viewSolution, setViewSolution, sublevelState, setSublevelState, currentLevel, currentSublevel, currentSublevelData} = useGame();
  const isCompleted = sublevelState[currentLevel][currentSublevel].completed ? 'completed' : '';

  const sublevelName = currentSublevelData.name;
  const sublevelNumber = currentSublevelData.id;
  const sublevelChallenge = currentSublevelData.challenge
  const boldTarget = `${sublevelName} property`;
  const parts = sublevelChallenge.split(boldTarget);

  const currentSublevelState = sublevelState[currentLevel][currentSublevel]
  const defaultSublevelCode = currentSublevelState.defaultCode;
  const playerCode = currentSublevelState.playerCode;
  const currentCode = currentSublevelState.firstTime === true ? defaultSublevelCode : playerCode;

  const [showSemicolonHint, setShowSemicolonHint] = useState(false);
  const hintTimerRef = useRef(null);

  useEffect(() => {
    if (!playerCode) {
      setShowSemicolonHint(false);
      return;
    }

    const lenient = parseCssToRules(playerCode, false);
    const strict = parseCssToRules(playerCode, true);

    const missingSemicolon = currentSublevelData.evaluatedBlocks.some(blockId => {
      const block = currentSublevelData.blocks.find(b => b.id === blockId);
      if (!block?.solution) return false;

      const matchesSolution = (styles) =>
        styles && block.solution.some(sol =>
          Object.keys(sol).every(key => styles[key] === sol[key])
        );

      return matchesSolution(lenient[blockId]) && !matchesSolution(strict[blockId]);
    });

    if (missingSemicolon) {
      setTimeout(() => {
        setShowSemicolonHint(true);
      }, 3000);
      clearTimeout(hintTimerRef.current);
      hintTimerRef.current = setTimeout(() => setShowSemicolonHint(false), 10000);
    } else {
      setShowSemicolonHint(false);
      clearTimeout(hintTimerRef.current);
    }

    return () => clearTimeout(hintTimerRef.current);
  }, [playerCode, currentSublevel, currentLevel]);

  const handleChange = (e) => {
    setSublevelState(prev => {
      const newData = [...prev];
      const innerArray = [...newData[currentLevel]];
      const obj = { ...innerArray[currentSublevel], firstTime: false, playerCode: `${e.target.value}`}
      innerArray[currentSublevel] = obj;
      newData[currentLevel] = innerArray;

      return newData;
      });
  }

  const resetCode = () => {
    setSublevelState(prev => {
      const newData = [...prev];
      const innerArray = [...newData[currentLevel]];
      const obj = {...innerArray[currentSublevel], firstTime: true, playerCode: ''}
      innerArray[currentSublevel] = obj;
      newData[currentLevel] = innerArray;

      return newData
    })
  }

    return (
        <div className={`editor ${isCompleted}`}>
          <SubHeaderSection sectionName={'editor__title'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
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
            <span>CHALLENGE <span>{sublevelNumber}</span><span className='editor__title--light-typo'> - {sublevelName.toUpperCase()}</span></span>
          </SubHeaderSection>
          <p className='editor__challenge'>
            {parts[0]}
            <span className='editor__challenge--bold'>{boldTarget}</span>
            {parts[1]}
          </p>
          <div className="editor-buttons__wrapper">
            {showSemicolonHint && (
              <p className="editor__semicolon-hint">Don't forget to close declarations with <code>;</code></p>
            )}
            <div className="editor-buttons__actions">
              <ResetCodeButton onClick={resetCode}/>
              <ViewSolutionButton onClick={() => setViewSolution(true)}/>
            </div>
          </div>
          <textarea className='textarea' name="" id="" onChange={handleChange} value={currentCode}></textarea>
        </div>
    )
}
