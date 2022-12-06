import './Preview.css'

const Preview = ({ source, parentRef }) => {
    return (
        <div ref={parentRef} className='preview-container' dangerouslySetInnerHTML={{__html: source }} />
    )
}

export default Preview
