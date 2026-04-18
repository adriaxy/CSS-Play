import './Editor.css'
import SubHeaderSection from '../Shared/SubHeaderSection';
import ResetCodeButton from './ResetCodeButton';
import ViewSolutionButton from './ViewSolutionButton';
import ModalSolution from '../Shared/ModalSolution';
import { useGame } from '@/app/GameContext';
import { useState, useEffect, useRef } from 'react';
import { parseCssToRules } from '../../../../lib/parseCss';

// Colors used to highlight /* Block 1 */ and /* Block 2 */ comments per sublevel.
// Each pair reflects the actual CSS color values involved in that sublevel's challenge.
const BLOCK_COLORS = {
  'color':            ['#ff0000', '#008000'],
  'background-color': ['#0000ff', '#ff0000'],
  'border':           ['#00ff00', '#ff69b4'],
  'border-radius':    ['#00ffff', '#ffff00'],
  'outline':          ['#a0522d', '#00bfff'],
  'box-shadow':       ['#008000', '#ff0000'],
  'z-index':          ['#4a90e2', '#d67ad0'],
  'float':            ['#55e06f', '#e94560'],
  'clear':            ['#4a90e2', '#e94560'],
};
const DEFAULT_BLOCK_COLORS = ['var(--text-on-light)', 'var(--text-on-light)'];

// Overlays styled spans on top of the textarea (which has transparent text) so
// block comments appear bold and color-coded without replacing the native input.
function buildHighlightHtml(code, block1Color, block2Color) {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped
    .replace(/\/\* Block 1 \*\//g, `<strong class="block-comment block1" style="color:${block1Color}">/* Block 1 */</strong>`)
    .replace(/\/\* Block 2 \*\//g, `<strong class="block-comment block2" style="color:${block2Color}">/* Block 2 */</strong>`);
}

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
  const textareaRef = useRef(null);
  const highlightRef = useRef(null);

  const [block1Color, block2Color] = BLOCK_COLORS[sublevelName] ?? DEFAULT_BLOCK_COLORS;

  const syncScroll = () => {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

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
            <span>CHALLENGE <span>{sublevelNumber}</span><span className='editor__title--light-typo'> - {sublevelName}</span></span>
          </SubHeaderSection>
          <p className='editor__challenge'>
            {parts.length === 2 ? (
              <>
                {parts[0]}
                <span className='editor__challenge--bold'>{boldTarget}</span>
                {parts[1]}
              </>
            ) : (
              parts[0]
            )}
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
          <div className="editor-code-wrapper">
            <div
              ref={highlightRef}
              className="editor-highlight"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: buildHighlightHtml(currentCode, block1Color, block2Color) }}
            />
            <textarea
              ref={textareaRef}
              className='textarea'
              name=""
              id=""
              onChange={handleChange}
              onScroll={syncScroll}
              value={currentCode}
            />
          </div>
        </div>
    )
}
