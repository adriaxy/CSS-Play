import './CardLevel.css'

export default function CardLevel({levelName, onClick, children}){
    return(
        <article className='card'>
            <button onClick={onClick}>{levelName}</button>
            <div>{children}</div>
        </article>
    )
}