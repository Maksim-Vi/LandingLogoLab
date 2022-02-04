import React from 'react'
import './acardion.scss'

const Acardion = ({title,index,children}) => {

    const [isOpen, setOpen] = React.useState(false);

    React.useEffect(()=>{
        if(index === 0){
            setOpen(true)
        }
    },[index])

    return (
        <div className="accordion-wrapper">
            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
}

export default Acardion
