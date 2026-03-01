export default function CardSublevels({ sublevelNames, onClick }){

    return(
        <ul>
            {
                sublevelNames.map(sublevel => <li key={sublevel}><button onClick={onClick}>{sublevel}</button></li>)
            }
        </ul>
    )
}