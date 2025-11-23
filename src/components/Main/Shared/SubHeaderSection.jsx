import './SubHeaderSection.css'

export default function SubHeaderSection({sectionName, children}){
    return(
        <h2 className={`subheader-section ${sectionName}`}>
            {children}
        </h2>
    )
}