import './SubHeader.css'

export default function SubHeader({SubHeaderTitle, buttons = []}){
    return(
        <header className="sub-header">
            <h3 className="sub-header__title">
                {SubHeaderTitle === 'Playground'
                    ? <svg
                        className='sub-header__svg'
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="1.75"
                        strokLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
                        <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" />
                        <path d="M12 7l0 6" />
                      </svg>
                    : <svg
                        className='sub-header__svg' 
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M14 7v3h3l3 -3h-3v-3z" />
                        <path d="M14 10l-9 9" />
                        <path d="M5 15v4h4" />
                      </svg>
                }
                {SubHeaderTitle}
            </h3>
            {buttons.length > 0 && 
               <div className="sub-header__left">{buttons.map(btn => btn)}</div> 
            }
        </header>
    )
}