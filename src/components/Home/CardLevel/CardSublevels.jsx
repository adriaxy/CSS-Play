import './CardSublevels.css'

export default function CardSublevels({ sublevelNames, onClick, sublevelCompletions = [] }){
    return(
        <ul className="card-sublevels__ul">
            {
                sublevelNames.map((sublevel, i) => {
                    const completed = sublevelCompletions[i] ?? false;
                    const dotClass = `li__dot-decoration${completed ? ' li__dot-decoration--completed' : ''}`;
                    const btnClass = `card-sublevel__btn${completed ? ' card-sublevel__btn--completed' : ' card-sublevel__btn--pending'}`;
                    return (
                        <li key={sublevel} className='card-sublevel__li'>
                            <div className={dotClass}></div>
                            <button className={btnClass} onClick={onClick}>{sublevel}</button>
                        </li>
                    );
                })
            }
        </ul>
    )
}