import './Editor.css'
import SubHeaderSection from '../Shared/SubHeaderSection';

export default function Editor ({levelNum, sublevelNum, challenge, defaultCode, name}){
  const boldTarget = `${name} property`;
  const parts = challenge.split(boldTarget);

    return (
        <div className='editor'>
          <SubHeaderSection sectionName={'editor__title'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-on-dark)"
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
          {/* <h2 className='editor__title'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-on-dark)"
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
          </h2> */}
          <p className='editor__challenge'>
            {parts[0]}
            <span className='editor__challenge--bold'>{boldTarget}</span>
            {parts[1]}
          </p>
          <textarea name="" id="" onChange={()=>{}}></textarea>
        </div>
    )
}