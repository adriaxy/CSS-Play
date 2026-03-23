import './SubHeaderSection.css'

export default function SubHeaderSection({sectionName, children, isTitleAnmiated = false}){
    return(
        <div className={`subheader-section ${sectionName}`}>
            <div className={isTitleAnmiated ? 'subheader-title' : undefined}>
                <h2 className={`subheader-title-heading ${isTitleAnmiated && 'subheader-title--animated'}`}>
                    {children}
                </h2>
            </div>
        </div>
    )
}